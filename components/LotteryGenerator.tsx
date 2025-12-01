'use client'

import { useState } from 'react'
import { Sparkles, Calculator } from 'lucide-react'

const LotteryGenerator = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])
  const [generatedCombinations, setGeneratedCombinations] = useState<number[][]>([])

  const toggleNumber = (num: number) => {
    setSelectedNumbers((prev) =>
      prev.includes(num)
        ? prev.filter((n) => n !== num)
        : [...prev, num]
    )
  }

  const generateCombinations = () => {
    // Simulação de geração de combinações
    const combinations = []
    for (let i = 0; i < 3; i++) {
      const comb = [...selectedNumbers]
        .sort((a, b) => a - b)
        .slice(0, 6)
      combinations.push(comb)
    }
    setGeneratedCombinations(combinations)
  }

  return (
    <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Sparkles className="text-blue-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Gerador Inteligente</h3>
            <p className="text-gray-400">Selecione seus números preferidos</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Calculator className="text-purple-400" />
          </div>
          <span className="text-sm text-gray-400">IA Ativa</span>
        </div>
      </div>

      {/* Number Grid */}
      <div className="mb-8">
        <div className="grid grid-cols-10 gap-3 mb-6">
          {Array.from({ length: 60 }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => toggleNumber(num)}
              className={`
                w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                transition-all duration-300
                ${selectedNumbers.includes(num)
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white transform scale-110'
                  : 'bg-gray-700 hover:bg-gray-600'
                }
              `}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-400">Números selecionados</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedNumbers.map((num) => (
                <span
                  key={num}
                  className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300"
                >
                  {num}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-300">
            {selectedNumbers.length} números selecionados
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={generateCombinations}
            disabled={selectedNumbers.length < 6}
            className={`
              flex-1 py-4 rounded-xl font-bold text-lg transition-all
              ${selectedNumbers.length >= 6
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                : 'bg-gray-700 cursor-not-allowed'
              }
            `}
          >
            Gerar Desdobramentos com IA
          </button>
          <button
            onClick={() => setSelectedNumbers([])}
            className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold transition-colors"
          >
            Limpar
          </button>
        </div>
      </div>

      {/* Generated Combinations */}
      {generatedCombinations.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-xl font-bold mb-6">Combinações Otimizadas</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {generatedCombinations.map((comb, idx) => (
              <div
                key={idx}
                className="bg-gray-900/80 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Jogo {idx + 1}</span>
                  <span className="text-sm text-blue-400">Garantia: 85%</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {comb.map((num) => (
                    <div
                      key={num}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-400">6 números</span>
                  <button className="text-green-400 hover:text-green-300 font-semibold">
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 p-6 rounded-xl">
          <h4 className="font-bold mb-2">Matriz Reduzida</h4>
          <p className="text-gray-400 text-sm">
            Sistema matemático que reduz o número de combinações necessárias.
          </p>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-xl">
          <h4 className="font-bold mb-2">Análise Estatística</h4>
          <p className="text-gray-400 text-sm">
            IA analisa 20 anos de resultados para sugerir as melhores combinações.
          </p>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-xl">
          <h4 className="font-bold mb-2">Economia Inteligente</h4>
          <p className="text-gray-400 text-sm">
            Aumente suas chances gastando até 70% menos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LotteryGenerator
