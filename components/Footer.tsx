import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-white">Loteria AI</span>
            </div>
            <p className="text-gray-400">
              Revolucionando suas chances com inteligência artificial.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resultados" className="text-gray-400 hover:text-white">
                  Resultados
                </Link>
              </li>
              <li>
                <Link href="/desdobramentos" className="text-gray-400 hover:text-white">
                  Desdobramentos
                </Link>
              </li>
              <li>
                <Link href="/premium" className="text-gray-400 hover:text-white">
                  Premium
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termos" className="text-gray-400 hover:text-white">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-400 hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/responsabilidade" className="text-gray-400 hover:text-white">
                  Responsabilidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <p className="text-gray-400">
              Dúvidas? Entre em contato:
              <br />
              suporte@loteriaai.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Loteria AI. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Este site não é afiliado à Caixa Econômica Federal.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
