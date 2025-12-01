'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Clock } from 'lucide-react'

// Dados mockados para exemplo
const mockResults = [
  {
    lottery: 'Mega-Sena',
    numbers: [4, 12, 26, 38, 42, 51],
    date: '2024-01-20',
    prize: 'R$ 50.000.000',
  },
  {
    lottery: 'Lotofácil',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    date: '2024-01-19',
    prize: 'R$ 2.500.000',
  },
  {
    lottery: 'Quina',
    numbers: [12, 24, 36, 48, 60],
    date: '2024-01-18',
    prize: 'R$ 10.000.000',
  },
]

const LiveResults = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('pt-BR'))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="text-green-400" />
          <h3 className="text-2xl font-bold">Resultados Oficiais</h3>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <Clock size={18} />
          <span>Atualizado em: {time}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockResults.map((lottery) => (
          <div
            key={lottery.lottery}
            className="bg-gray-900/80 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold">{lottery.lottery}</h4>
              <span className="text-sm text-gray-400">{lottery.date}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {lottery.numbers.map((num) => (
                <div
                  key={num}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold"
                >
                  {num}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400">Prêmio</p>
              <p className="text-2xl font-bold text-green-400">{lottery.prize}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="text-blue-400 hover:text-blue-300 font-semibold">
          Ver todos os resultados →
        </button>
      </div>
    </div>
  )
}

export default LiveResults
