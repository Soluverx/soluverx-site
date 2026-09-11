import './Problems.css'

const problems = [
  {
    title: 'Processos manuais',
    description:
      'Tarefas repetitivas consomem tempo e aumentam a chance de erro no dia a dia.',
  },
  {
    title: 'Informações espalhadas',
    description:
      'Dados ficam divididos entre planilhas, mensagens, sistemas e anotações diferentes.',
  },
  {
    title: 'Retrabalho',
    description:
      'A mesma informação precisa ser digitada, conferida ou organizada várias vezes.',
  },
  {
    title: 'Falta de visibilidade',
    description:
      'Sem uma visão clara dos dados, decisões importantes ficam mais lentas e difíceis.',
  },
  {
    title: 'Ferramentas inadequadas',
    description:
      'Nem sempre uma solução pronta acompanha a forma como cada negócio realmente funciona.',
  },
]

function Problems() {
  return (
    <section className="problems" id="problemas">
      <div className="problems__container">
        <div className="problems__header">
          <span className="problems__eyebrow">Problemas reais</span>

          <h2 className="problems__title">
            Nem todo problema precisa de mais uma planilha.
          </h2>

          <p className="problems__intro">
            Quando processos começam a depender de controles manuais,
            informações espalhadas e tarefas repetitivas, a tecnologia pode
            ajudar a organizar o trabalho de forma mais simples e eficiente.
          </p>
        </div>

        <div className="problems__grid">
          {problems.map((problem, index) => (
            <article className="problem-card" key={problem.title}>
              <span className="problem-card__number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="problem-card__title">{problem.title}</h3>

              <p className="problem-card__description">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problems