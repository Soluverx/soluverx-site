import './Inclusion.css'

const frictionItems = [
  'Copiar dados',
  'Atualizar planilha',
  'Procurar informação',
  'Enviar um aviso',
  'Conferir pedidos',
  'Juntar relatórios',
]

function Inclusion() {
  return (
    <section className="inclusion" id="possibilidades">
      <div className="inclusion__container">
        <div className="inclusion__content" data-reveal="left">
          <span className="inclusion__eyebrow">
            Não precisa ser um projeto enorme
          </span>

          <h2 className="inclusion__title">
            Seu problema não precisa ser gigante para merecer uma solução melhor.
          </h2>

          <p className="inclusion__text">
            Às vezes não é “um sistema novo”. É só uma tarefa que poderia deixar
            de ser manual, uma informação que poderia aparecer sozinha ou um
            processo que poderia ser muito mais simples.
          </p>

          <div className="inclusion__note">
            <span className="inclusion__note-icon" aria-hidden="true">
              ✓
            </span>

            <p>
              Nem toda situação precisa de software. Primeiro entendemos o
              problema para avaliar o que realmente faz sentido.
            </p>
          </div>
        </div>

        <div
          className="inclusion__visual"
          data-reveal="right"
          data-reveal-delay="1"
          aria-label="Exemplos de pequenas tarefas que podem ser melhoradas"
        >
          <div className="inclusion__visual-glow" aria-hidden="true" />

          <svg
            className="inclusion__lines"
            viewBox="0 0 620 460"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="inclusion-line-gradient"
                x1="170"
                y1="230"
                x2="425"
                y2="230"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2563EB" stopOpacity="0.28" />
                <stop offset="0.58" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="1" stopColor="#67E8F9" stopOpacity="0.55" />
              </linearGradient>
            </defs>

            <path d="M200 69 C285 69 327 141 406 174" />
            <path d="M184 135 C278 135 325 171 406 194" />
            <path d="M210 201 C290 201 335 207 406 214" />
            <path d="M185 267 C280 267 331 247 406 234" />
            <path d="M216 333 C298 333 336 281 406 254" />
            <path d="M204 399 C294 399 337 315 406 274" />
          </svg>

          <div className="inclusion__frictions">
            {frictionItems.map((item, index) => (
              <div
                className={`inclusion__friction inclusion__friction--${index + 1}`}
                key={item}
              >
                <span className="inclusion__friction-dot" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="inclusion__core">
            <span className="inclusion__core-kicker">Talvez</span>
            <strong>Pode existir um jeito melhor.</strong>
            <span className="inclusion__core-detail">
              mais simples · mais organizado · menos manual
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inclusion
