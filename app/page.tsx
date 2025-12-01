import LiveResults from '@/components/LiveResults'
import LotteryGenerator from '@/components/LotteryGenerator'
import AISuggestions from '@/components/AISuggestions'
import StatsDisplay from '@/components/StatsDisplay'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Ganhar na Loteria é uma Ciência
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Use a inteligência artificial para maximizar suas chances com
          desdobramentos matematicamente otimizados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Começar Agora - Grátis
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
            Ver Planos Premium
          </button>
        </div>
      </section>

      {/* Live Results */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Resultados em Tempo Real
        </h2>
        <LiveResults />
      </section>

      {/* Generator */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Gerador de Desdobramentos
        </h2>
        <LotteryGenerator />
      </section>

      {/* AI Suggestions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Sugestões de IA
        </h2>
        <AISuggestions />
      </section>

      {/* Stats */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">
          Estatísticas que Impressionam
        </h2>
        <StatsDisplay />
      </section>
    </div>
  )
}
