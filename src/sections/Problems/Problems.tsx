import './Problems.css'

type IconProps = {
  className?: string
}

function ScatteredIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="5" y="7" width="13" height="11" rx="2.5" />
      <rect x="30" y="5" width="13" height="12" rx="2.5" />
      <rect x="7" y="31" width="14" height="11" rx="2.5" />
      <rect x="31" y="30" width="12" height="12" rx="2.5" />
      <path d="M18 13h8M24 13l-2.5-2.5M24 13l-2.5 2.5" />
      <path d="M24 35h7M24 35l2.5-2.5M24 35l2.5 2.5" />
    </svg>
  )
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 7a16 16 0 0 0-13.6 24.4L8 39l8.2-2.2A16 16 0 1 0 24 7Z" />
      <path d="M18.8 16.8c.4-.8 1-1 1.5-1h1.2c.4 0 .8.2 1 .6l1.6 3.6c.2.5.2.8-.1 1.2l-1.2 1.3c.8 1.7 2.8 3.7 4.6 4.4l1.5-1c.3-.3.7-.3 1.1-.1l3.5 1.6c.4.2.6.5.6.9v1.2c0 1-.6 1.6-1.5 1.8-.6.1-1.2.2-1.9.1-6.5-.4-12.3-6.2-12.7-12.6 0-.7 0-1.4.1-2Z" />
    </svg>
  )
}

function RepeatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M12 15h22a7 7 0 0 1 7 7v2" />
      <path d="M36 10l5 5-5 5" />
      <path d="M36 33H14a7 7 0 0 1-7-7v-2" />
      <path d="M12 38l-5-5 5-5" />
      <rect x="19" y="19" width="10" height="10" rx="2" />
    </svg>
  )
}

function ReportIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M13 6h15l8 8v28H13a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4Z" />
      <path d="M28 6v9h9" />
      <path d="M16 32V24M23 32V20M30 32v-5" />
    </svg>
  )
}

function PersonIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="18" cy="16" r="6" />
      <path d="M7 37c1.5-7 5.2-10.5 11-10.5S27.5 30 29 37" />
      <path d="M33 13h9v9" />
      <path d="M42 13 29 26" />
      <circle cx="36" cy="32" r="5" />
      <path d="M36 29v3l2 1.5" />
    </svg>
  )
}

function SpreadsheetIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="7" y="6" width="34" height="36" rx="4" />
      <path d="M7 17h34M7 28h34M18 17v25M30 17v25" />
      <path d="M13 11h9" />
      <path d="M35 9v5M32.5 11.5h5" />
    </svg>
  )
}

const problems = [
  {
    title: 'Informações espalhadas',
    description:
      'Você precisa abrir planilhas, mensagens, arquivos e sistemas diferentes para encontrar o que procura.',
    Icon: ScatteredIcon,
    tone: 'blue',
  },
  {
    title: 'Pedidos e informações no WhatsApp',
    description:
      'Pedidos, atualizações ou decisões ficam no meio de conversas e depois precisam ser procurados novamente.',
    Icon: WhatsAppIcon,
    tone: 'green',
  },
  {
    title: 'A mesma coisa várias vezes',
    description:
      'Uma informação é copiada, digitada ou conferida manualmente em mais de um lugar.',
    Icon: RepeatIcon,
    tone: 'cyan',
  },
  {
    title: 'Relatórios que dependem de trabalho manual',
    description:
      'Para enxergar uma informação atualizada, alguém precisa gerar, juntar ou organizar os dados novamente.',
    Icon: ReportIcon,
    tone: 'violet',
  },
  {
    title: 'Informação que depende de alguém',
    description:
      'Para descobrir como alguma coisa está, você precisa perguntar para uma pessoa específica ou esperar que ela encontre a informação.',
    Icon: PersonIcon,
    tone: 'sky',
  },
  {
    title: 'A planilha que cresceu demais',
    description:
      'Ela começou resolvendo algo simples, mas hoje tem tantas abas, fórmulas e controles que praticamente virou um sistema improvisado.',
    Icon: SpreadsheetIcon,
    tone: 'emerald',
  },
]

function Problems() {
  return (
    <section className="problems" id="problemas">
      <div className="problems__container">
        <header className="problems__header" data-reveal="up">
          <span className="problems__eyebrow">Situações do dia a dia</span>

          <h2 className="problems__title">
            Você se reconhece em alguma dessas situações?
          </h2>

          <p className="problems__intro">
            Estes são só alguns exemplos. Às vezes o problema é grande. Às
            vezes é só uma tarefa chata, repetitiva ou desorganizada que toma
            alguns minutos todos os dias.
          </p>
        </header>

        <div className="problems__grid" data-reveal-stagger>
          {problems.map(({ title, description, Icon, tone }, index) => (
            <article className="problem-card" key={title}>
              <div className="problem-card__top">
                <span className={`problem-card__icon problem-card__icon--${tone}`}>
                  <Icon />
                </span>

                <span className="problem-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="problem-card__content">
                <h3 className="problem-card__title">{title}</h3>
                <p className="problem-card__description">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="problems__other" data-reveal="up" data-reveal-delay="1">
          <div className="problems__other-copy">
            <span className="problems__other-kicker">E se o seu problema for outro?</span>
            <h3>Não precisa caber em uma dessas caixas.</h3>
            <p>
              Se existe algo no seu negócio que poderia ser mais simples,
              organizado ou automático, vale a pena entender se a tecnologia
              pode ajudar.
            </p>
          </div>

          <a className="problems__other-link" href="#contato">
            <span>Conte o que está dando trabalho</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Problems
