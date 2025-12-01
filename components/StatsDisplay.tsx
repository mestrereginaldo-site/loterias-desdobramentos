'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const StatsDisplay = () => {
  const data = [
    { month: 'Jan', users: 4000, revenue: 2400 },
    { month: 'Fev', users: 3000, revenue: 1398 },
    { month: 'Mar', users: 2000, revenue: 9800 },
    { month: 'Abr', users: 2780, revenue: 3908 },
    { month: 'Mai', users: 1890, revenue: 4800 },
    { month: 'Jun', users: 2390, revenue: 3800 },
  ]

  const stats = [
    { label: 'Usuários Ativos', value: '10.234', change: '+12%' },
    { label: 'Desdobramentos Gerados', value: '45.678', change: '+23%' },
    { label: 'Prêmios Acumulados', value: 'R$ 12.5M', change: '+5%' },
    { label: 'Taxa de Acerto', value: '85.2%', change: '+3.2%' },
  ]

  return (
    <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold">{stat.value}</p>
              <span className="text-green-400 font-bold">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900/50 p-6 rounded-xl">
        <h4 className="font-bold mb-6 text-center">Crescimento da Plataforma</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563' }}
              />
              <Bar dataKey="users" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="revenue" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>
          Dados atualizados em tempo real • Mais de 50.000 combinações geradas diariamente
        </p>
      </div>
    </div>
  )
}

export default StatsDisplay
