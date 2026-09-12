import './Solutions.css'

const solutions = [
  {
    title: 'Sistemas sob medida',
    description:
      'Soluções desenvolvidas a partir da necessidade real do negócio, sem depender de processos engessados.',
    icon: 'system',
  },
  {
    title: 'Dashboards',
    description:
      'Painéis claros para acompanhar indicadores, dados importantes e o que está acontecendo no negócio.',
    icon: 'dashboard',
  },
  {
    title: 'Automações',
    description:
      'Redução de tarefas repetitivas por meio de fluxos automatizados e processos mais eficientes.',
    icon: 'automation',
  },
  {
    title: 'Integrações',
    description:
      'Conexão entre sistemas, ferramentas e fontes de dados que hoje funcionam de forma separada.',
    icon: 'integration',
  },
  {
    title: 'Ferramentas internas',
    description:
      'Aplicações criadas para organizar operações, controles, equipes e rotinas específicas.',
    icon: 'internal',
  },
  {
    title: 'MVPs',
    description:
      'Versões iniciais de produtos digitais para validar ideias com estrutura, clareza e menor risco.',
    icon: 'mvp',
  },
]

function SolutionIcon({ type }: { type: string }) {
  const commonProps = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (type) {
    case 'system':
      return (
        <svg {...commonProps}>
          <rect x="9" y="9" width="30" height="10" rx="3" />
          <rect x="9" y="29" width="30" height="10" rx="3" />
          <path d="M15 14h1" />
          <path d="M20 14h1" />
          <path d="M15 34h1" />
          <path d="M20 34h1" />
          <path d="M34 14h1" />
          <path d="M34 34h1" />
        </svg>
      )

    case 'dashboard':
      return (
        <svg {...commonProps}>
          <path d="M10 37V24" />
          <path d="M19 37V17" />
          <path d="M28 37V27" />
          <path d="M37 37V10" />
          <path d="M8 39h32" />
        </svg>
      )

    case 'automation':
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="6" />
          <path d="M24 8v5" />
          <path d="M24 35v5" />
          <path d="M8 24h5" />
          <path d="M35 24h5" />
          <path d="M13 13l4 4" />
          <path d="M31 31l4 4" />
          <path d="M35 13l-4 4" />
          <path d="M17 31l-4 4" />
          <path d="M26 17l-5 8h6l-5 8" />
        </svg>
      )

    case 'integration':
      return (
        <svg {...commonProps}>
          <path d="M20 17l-5-5a7 7 0 0 0-10 10l7 7a7 7 0 0 0 10 0l3-3" />
          <path d="M28 31l5 5a7 7 0 0 0 10-10l-7-7a7 7 0 0 0-10 0l-3 3" />
          <path d="M18 30l12-12" />
        </svg>
      )

    case 'internal':
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="14" height="14" rx="3" />
          <rect x="26" y="8" width="14" height="14" rx="3" />
          <rect x="8" y="26" width="14" height="14" rx="3" />
          <rect x="26" y="26" width="14" height="14" rx="3" />
        </svg>
      )

    case 'mvp':
      return (
        <svg {...commonProps}>
          <path d="M28 8c6 2 10 6 12 12L27 33l-12-12L28 8Z" />
          <path d="M17 19l-7 2-4 7 11 1" />
          <path d="M29 31l-1 11 7-4 2-7" />
          <circle cx="30" cy="18" r="3" />
        </svg>
      )

    default:
      return null
  }
}

function Solutions() {
  return (
    <section className="solutions" id="solucoes">
      <div className="solutions__container">
        <div className="solutions__header">
          <span className="solutions__eyebrow">Soluções</span>

          <h2 className="solutions__title">
            Quando o problema é específico, a solução também pode ser.
          </h2>

          <p className="solutions__intro">
            Desenvolvemos soluções digitais pensadas para a realidade de cada
            projeto, buscando simplificar processos, organizar informações e
            gerar mais clareza para o negócio.
          </p>
        </div>

        <div className="solutions__grid">
          {solutions.map((solution, index) => (
            <article className="solution-card" key={solution.title}>
              <div className="solution-card__top">
                <span className="solution-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="solution-card__icon">
                  <SolutionIcon type={solution.icon} />
                </span>
              </div>

              <div className="solution-card__content">
                <h3 className="solution-card__title">{solution.title}</h3>

                <p className="solution-card__description">
                  {solution.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions