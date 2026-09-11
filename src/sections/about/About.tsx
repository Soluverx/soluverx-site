import './About.css'

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__container">
        <div className="about__content">
          <span className="about__eyebrow">Sobre a Soluverx</span>

          <h2 className="about__title">
            Tecnologia com proximidade, método e responsabilidade.
          </h2>

          <div className="about__text">
            <p>
              A Soluverx nasceu com a proposta de desenvolver soluções digitais
              sob medida para empresas que precisam organizar processos,
              integrar informações e resolver necessidades que ferramentas
              genéricas nem sempre atendem bem.
            </p>

            <p>
              Cada projeto começa pelo entendimento do problema. A partir disso,
              estruturamos a necessidade, definimos prioridades e desenvolvemos
              a solução de forma organizada e transparente.
            </p>

            <p>
              O crescimento é conduzido de forma responsável, com capacidade
              controlada de projetos e foco em qualidade, clareza e contato
              direto durante todo o desenvolvimento.
            </p>
          </div>
        </div>

        <div className="about__panel">
          <div className="about__panel-item">
            <span className="about__panel-label">01</span>

            <div>
              <h3>Desenvolvimento independente</h3>
              <p>
                Estrutura enxuta, contato direto e decisões tomadas com
                proximidade durante o projeto.
              </p>
            </div>
          </div>

          <div className="about__panel-item">
            <span className="about__panel-label">02</span>

            <div>
              <h3>Software sob medida</h3>
              <p>
                A solução parte da necessidade do negócio, e não de um produto
                pronto tentando servir para todos.
              </p>
            </div>
          </div>

          <div className="about__panel-item">
            <span className="about__panel-label">03</span>

            <div>
              <h3>Crescimento responsável</h3>
              <p>
                A capacidade de atendimento cresce junto com a estrutura,
                evitando promessas além do que pode ser entregue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About