import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Entendimento',
    description:
      'Primeiro buscamos entender o problema, o contexto e o que realmente precisa ser resolvido.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description:
      'Organizamos requisitos, prioridades, escopo e a melhor forma de estruturar a solução.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description:
      'A solução começa a ser construída de forma organizada, com foco no que foi definido.',
  },
  {
    number: '04',
    title: 'Testes',
    description:
      'Validamos funcionamento, fluxos e detalhes importantes antes da entrega.',
  },
  {
    number: '05',
    title: 'Entrega',
    description:
      'A solução é disponibilizada com orientações claras e espaço para ajustes necessários.',
  },
]

function Process() {
  return (
    <section className="process" id="processo">
      <div className="process__container">
        <div className="process__header">
          <span className="process__eyebrow">Como trabalhamos</span>

          <h2 className="process__title">
            Primeiro entendemos. Depois desenvolvemos.
          </h2>

          <p className="process__intro">
            Cada projeto passa por etapas claras para reduzir improvisos,
            alinhar expectativas e manter o desenvolvimento organizado.
          </p>
        </div>

        <div className="process__timeline">
          {steps.map((step) => (
            <article className="process-step" key={step.number}>
              <div className="process-step__marker">
                <span>{step.number}</span>
              </div>

              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>

                <p className="process-step__description">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process