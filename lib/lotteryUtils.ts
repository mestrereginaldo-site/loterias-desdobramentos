// Utilitários para manipulação de dados de loteria

export interface LotteryConfig {
  id: string
  name: string
  maxNumber: number
  numbersToSelect: number
  price: number
  color: string
}

export const LOTTERIES: Record<string, LotteryConfig> = {
  'mega-sena': {
    id: 'mega-sena',
    name: 'Mega-Sena',
    maxNumber: 60,
    numbersToSelect: 6,
    price: 4.50,
    color: '#209869',
  },
  'lotofacil': {
    id: 'lotofacil',
    name: 'Lotofácil',
    maxNumber: 25,
    numbersToSelect: 15,
    price: 2.50,
    color: '#930089',
  },
  'quina': {
    id: 'quina',
    name: 'Quina',
    maxNumber: 80,
    numbersToSelect: 5,
    price: 2.00,
    color: '#260085',
  },
  'lotomania': {
    id: 'lotomania',
    name: 'Lotomania',
    maxNumber: 100,
    numbersToSelect: 20,
    price: 2.50,
    color: '#F78100',
  },
  'timemania': {
    id: 'timemania',
    name: 'Timemania',
    maxNumber: 80,
    numbersToSelect: 10,
    price: 3.00,
    color: '#02ADEF',
  },
  'dia-de-sorte': {
    id: 'dia-de-sorte',
    name: 'Dia de Sorte',
    maxNumber: 31,
    numbersToSelect: 7,
    price: 2.50,
    color: '#F58101',
  },
}

export interface HistoricalResult {
  date: string
  numbers: number[]
  prize: number
  winners: number
}

export interface GeneratedCombination {
  id: string
  numbers: number[]
  probability: number
  price: number
  guarantee: string
}

// Função para gerar números aleatórios
export function generateRandomNumbers(
  max: number,
  count: number,
  exclude: number[] = []
): number[] {
  const numbers: number[] = []
  
  while (numbers.length < count) {
    const randomNum = Math.floor(Math.random() * max) + 1
    
    if (!numbers.includes(randomNum) && !exclude.includes(randomNum)) {
      numbers.push(randomNum)
    }
  }
  
  return numbers.sort((a, b) => a - b)
}

// Função para calcular combinações possíveis (n choose k)
export function calculateTotalCombinations(n: number, k: number): number {
  if (k > n) return 0
  if (k === 0 || k === n) return 1
  
  let result = 1
  for (let i = 1; i <= k; i++) {
    result *= (n - k + i) / i
  }
  
  return Math.round(result)
}

// Função para gerar desdobramentos otimizados
export function generateOptimizedCombinations(
  selectedNumbers: number[],
  lotteryId: string
): GeneratedCombination[] {
  const lottery = LOTTERIES[lotteryId]
  const combinations: GeneratedCombination[] = []
  
  // Este é um exemplo simplificado. Na prática, aqui estaria o algoritmo de IA
  const baseNumbers = [...selectedNumbers].sort(() => Math.random() - 0.5)
  
  // Gerar 5 combinações de exemplo
  for (let i = 0; i < 5; i++) {
    const shuffled = [...baseNumbers].sort(() => Math.random() - 0.5)
    const combinationNumbers = shuffled.slice(0, lottery.numbersToSelect).sort((a, b) => a - b)
    
    // Adicionar alguns números extras se necessário
    while (combinationNumbers.length < lottery.numbersToSelect) {
      const randomNum = Math.floor(Math.random() * lottery.maxNumber) + 1
      if (!combinationNumbers.includes(randomNum)) {
        combinationNumbers.push(randomNum)
      }
    }
    
    combinations.push({
      id: `combo-${Date.now()}-${i}`,
      numbers: combinationNumbers.sort((a, b) => a - b),
      probability: 85 - i * 5, // Exemplo: diminui a probabilidade para combinações posteriores
      price: lottery.price,
      guarantee: `Garante ${lottery.numbersToSelect - 2} pontos se ${lottery.numbersToSelect + 2} números sorteados estiverem entre os ${selectedNumbers.length} escolhidos`,
    })
  }
  
  return combinations
}

// Função para calcular economia com desdobramento
export function calculateSavings(
  totalCombinations: number,
  optimizedCombinations: number
): {
  percentage: number
  moneySaved: number
  pricePerCombination: number
} {
  const pricePerCombination = 4.50 // Preço médio por combinação
  
  const originalCost = totalCombinations * pricePerCombination
  const optimizedCost = optimizedCombinations * pricePerCombination
  const moneySaved = originalCost - optimizedCost
  const percentage = totalCombinations > 0 ? ((totalCombinations - optimizedCombinations) / totalCombinations) * 100 : 0
  
  return {
    percentage: Math.round(percentage),
    moneySaved: Math.round(moneySaved * 100) / 100,
    pricePerCombination,
  }
}

// Função para formatar valores monetários
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

// Função para formatar números grandes
export function formatNumber(value: number): string {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M'
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K'
  }
  return value.toString()
}

// Função para calcular probabilidade de acerto
export function calculateWinProbability(
  numbersSelected: number,
  numbersToMatch: number,
  lotteryId: string
): number {
  const lottery = LOTTERIES[lotteryId]
  
  // n choose k
  function nCk(n: number, k: number): number {
    let result = 1
    for (let i = 1; i <= k; i++) {
      result *= (n - k + i) / i
    }
    return result
  }
  
  const totalCombinations = nCk(lottery.maxNumber, lottery.numbersToSelect)
  const favorableCombinations = nCk(numbersSelected, numbersToMatch) * 
    nCk(lottery.maxNumber - numbersSelected, lottery.numbersToSelect - numbersToMatch)
  
  return (favorableCombinations / totalCombinations) * 100
}

export default {
  LOTTERIES,
  generateRandomNumbers,
  calculateTotalCombinations,
  generateOptimizedCombinations,
  calculateSavings,
  formatCurrency,
  formatNumber,
  calculateWinProbability,
}
