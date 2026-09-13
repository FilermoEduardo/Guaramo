import { BookOpen, FileText, Home, HeartPulse, Baby, Briefcase, type LucideIcon } from 'lucide-react'

type HelpItem = {
  icon: LucideIcon
  title: string
  description: string
}

const items: HelpItem[] = [
  {
    icon: BookOpen,
    title: 'Acesso ao ensino de Português',
    description: 'Aulas e turmas acolhedoras para você se comunicar com confiança no dia a dia.',
  },
  {
    icon: FileText,
    title: 'Orientação para emissão de Documentos',
    description: 'Apoio para regularizar sua situação e ter acesso aos seus direitos.',
  },
  {
    icon: Home,
    title: 'Como conseguir Aluguel',
    description: 'Orientação de moradia para encontrar um lar seguro para você e sua família.',
  },
  {
    icon: HeartPulse,
    title: 'Fazer o registro no SUS',
    description: 'Ajudamos você a acessar o sistema público de saúde e cuidar do que importa.',
  },
  {
    icon: Baby,
    title: 'Programa de atenção a mulheres grávidas',
    description: 'Cesta de gestantes e cuidado especial para mães e bebês nesse momento tão importante.',
  },
  {
    icon: Briefcase,
    title: 'Oportunidades de trabalho e Diárias',
    description: 'Conexões com vagas e diárias para você recomeçar com dignidade e autonomia.',
  },
]

export function HowWeHelp() {
  return (
    <section id="como-ajudamos" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-emerald-800">Como podemos ajudar?</h2>
          <p className="mt-4 text-stone-600 text-lg leading-relaxed">
            Caminhamos junto de você em cada passo da chegada e do recomeço. Escolha por onde começar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-700 group-hover:text-yellow-400 transition-colors">
                <Icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-extrabold text-emerald-800 mb-2">{title}</h3>
              <p className="text-stone-600 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
