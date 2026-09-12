import { motion } from 'motion/react'
import './Problems.css'

const problems = [
  {
    title: 'Processos manuais',
    description:
      'Tarefas repetitivas consomem tempo e aumentam a chance de erro no dia a dia.',
    icon: 'process',
  },
  {
    title: 'Informações espalhadas',
    description:
      'Dados ficam divididos entre planilhas, mensagens, sistemas e anotações diferentes.',
    icon: 'nodes',
  },
  {
    title: 'Retrabalho',
    description:
      'A mesma informação precisa ser digitada, conferida ou organizada várias vezes.',
    icon: 'repeat',
  },
  {
    title: 'Falta de visibilidade',
    description:
      'Sem uma visão clara dos dados, decisões importantes ficam mais lentas e difíceis.',
    icon: 'visibility',
  },
  {
    title: 'Ferramentas inadequadas',
    description:
      'Nem sempre uma solução pronta acompanha a forma como cada negócio realmente funciona.',
    icon: 'tool',
  },
  {
    title: 'Dificuldade para escalar',
    description:
      'Processos que funcionam no início podem se tornar lentos, confusos e difíceis de manter conforme o negócio cresce.',
    icon: 'scale',
  },
]

function ProblemIcon({ type }: { type: string }) {
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
    case 'process':
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="7" />
          <path d="M24 8v5" />
          <path d="M24 35v5" />
          <path d="M8 24h5" />
          <path d="M35 24h5" />
          <path d="M12.7 12.7l3.5 3.5" />
          <path d="M31.8 31.8l3.5 3.5" />
          <path d="M35.3 12.7l-3.5 3.5" />
          <path d="M16.2 31.8l-3.5 3.5" />
        </svg>
      )

    case 'nodes':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="36" cy="12" r="3.5" />
          <circle cx="12" cy="36" r="3.5" />
          <circle cx="36" cy="36" r="3.5" />
          <circle cx="24" cy="24" r="4" />
          <path d="M15 14l6 6" />
          <path d="M33 14l-6 6" />
          <path d="M15 34l6-6" />
          <path d="M33 34l-6-6" />
        </svg>
      )

    case 'repeat':
      return (
        <svg {...commonProps}>
          <path d="M14 15h18l-4-4" />
          <path d="M32 15l-4 4" />
          <path d="M34 33H16l4 4" />
          <path d="M16 33l4-4" />
          <path d="M36 17c2 2 3 4.5 3 7" />
          <path d="M12 31c-2-2-3-4.5-3-7" />
        </svg>
      )

    case 'visibility':
      return (
        <svg {...commonProps}>
          <path d="M6 24s6-10 18-10 18 10 18 10-6 10-18 10S6 24 6 24Z" />
          <circle cx="24" cy="24" r="4.5" />
          <path d="M24 8v3" />
          <path d="M24 37v3" />
        </svg>
      )

    case 'tool':
      return (
        <svg {...commonProps}>
          <path d="M29 10a9 9 0 0 0-10.5 11L8 31.5 16.5 40 27 29.5A9 9 0 0 0 38 19l-7 7-9-9 7-7Z" />
        </svg>
      )

    case 'scale':
      return (
        <svg {...commonProps}>
          <path d="M10 37h28" />
          <path d="M14 31l7-8 6 5 10-14" />
          <path d="M31 14h6v6" />
        </svg>
      )

    default:
      return null
  }
}

function Problems() {
  return (
    <section className="problems" id="problemas">
      <div className="problems__container">
        <motion.div
          className="problems__header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.58,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="problems__eyebrow">Problemas reais</span>

          <h2 className="problems__title">
            Nem todo problema precisa de mais uma planilha.
          </h2>

          <p className="problems__intro">
            Quando processos começam a depender de controles manuais,
            informações espalhadas e tarefas repetitivas, a tecnologia pode
            ajudar a organizar o trabalho de forma mais simples e eficiente.
          </p>
        </motion.div>

        <div className="problems__grid">
          {problems.map((problem, index) => (
            <motion.article
              className="problem-card"
              key={problem.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.08,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.055,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="problem-card__top">
                <span className="problem-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="problem-card__icon">
                  <ProblemIcon type={problem.icon} />
                </span>
              </div>

              <div className="problem-card__content">
                <h3 className="problem-card__title">{problem.title}</h3>

                <p className="problem-card__description">
                  {problem.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problems