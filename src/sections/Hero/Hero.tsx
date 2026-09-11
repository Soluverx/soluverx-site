import soluverxSymbol from '../../assets/brand/soluverx-symbol.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            Desenvolvimento de software sob medida
          </span>

          <h1 className="hero__title">
            Software sob medida para necessidades reais.
          </h1>

          <p className="hero__text">
            Entendemos o problema, estruturamos a necessidade e desenvolvemos
            soluções digitais pensadas para cada projeto.
          </p>

          <div className="hero__actions">
            <a href="#contato" className="hero__primary">
              Conte o que você precisa resolver
            </a>

            <a href="#processo" className="hero__secondary">
              Como trabalhamos
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow" />

          <img
            src={soluverxSymbol}
            alt=""
            className="hero__symbol"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero