'use client'

import { Brain, TrendingUp, Zap } from 'lucide-react'
import { useState } from 'react'

const AISuggestions = () => {
  const [suggestions, setSuggestions] = useState([
    { id: 1, numbers: [3, 7, 13, 22, 28, 45], confidence: 92 },
    { id: 2, numbers: [5, 11, 19, 30, 41, 52], confidence: 88 },
    { id: 3, numbers: [8, 14, 21, 33, 40, 49], confidence: 85 },
  ])

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
          <Brain size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Sugestões da IA</h3>
          <p className="text-gray-400">Combinações geradas por nossa inteligência artificial</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="bg-gray-900/80 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Zap size={16} className="text-yellow-400" />
                <span className="font-bold">Combinação #{suggestion.id}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp size={16} className="text-green-400" />
                <span className="text-green-400 font-bold">{suggestion.confidence}%</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {suggestion.numbers.map((num) => (
                <div
                  key={num}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold"
                >
                  {num}
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Probabilidade de acerto:</span>
                <span className="text-green-400">1 em 12.000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Custo por jogo:</span>
                <span className="text-blue-400">R$ 4,50</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-bold transition-all">
              Usar Esta Combinação
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-900/50 rounded-xl p-6">
        <h4 className="font-bold mb-4 text-center">Como a IA funciona?</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
            <p className="text-sm text-gray-300">Análise de 20+ anos de resultados</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
            <p className="text-sm text-gray-300">Identificação de padrões ocultos</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
            <p className="text-sm text-gray-300">Otimização matemática</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
            <p className="text-sm text-gray-300">Geração de combinações</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AISuggestions
