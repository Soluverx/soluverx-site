import './Solutions.css'

const solutions = [
  {
    title: 'Sistemas sob medida',
    description:
      'Soluções desenvolvidas a partir da necessidade real do negócio, sem depender de processos engessados.',
  },
  {
    title: 'Dashboards',
    description:
      'Painéis claros para acompanhar indicadores, dados importantes e o que está acontecendo no negócio.',
  },
  {
    title: 'Automações',
    description:
      'Redução de tarefas repetitivas por meio de fluxos automatizados e processos mais eficientes.',
  },
  {
    title: 'Integrações',
    description:
      'Conexão entre sistemas, ferramentas e fontes de dados que hoje funcionam de forma separada.',
  },
  {
    title: 'Ferramentas internas',
    description:
      'Aplicações criadas para organizar operações, controles, equipes e rotinas específicas.',
  },
  {
    title: 'MVPs',
    description:
      'Versões iniciais de produtos digitais para validar ideias com estrutura, clareza e menor risco.',
  },
]

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

                <span className="solution-card__arrow" aria-hidden="true">
                  ↗
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

        <div className="solutions__footer">
          <p className="solutions__footer-text">
            Tem uma necessidade específica e não encontrou uma solução pronta
            que realmente resolva?
          </p>

          <a href="#contato" className="solutions__cta">
            Conte sua necessidade
          </a>
        </div>
      </div>
    </section>
  )
}

export default Solutions