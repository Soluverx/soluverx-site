import { motion, useReducedMotion } from 'motion/react'
import soluverxSymbol from '../../assets/brand/soluverx-symbol.png'
import './Hero.css'

function Hero() {
  const reduceMotion = useReducedMotion()

  const initial = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 22 }

  const animate = {
    opacity: 1,
    y: 0,
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero__ambient" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__content">
          <motion.span
            className="hero__eyebrow"
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Desenvolvimento de software sob medida
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Software sob medida para necessidades reais.
          </motion.h1>

          <motion.p
            className="hero__text"
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Entendemos o problema, estruturamos a necessidade e desenvolvemos
            soluções digitais pensadas para cada projeto.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a href="#contato" className="hero__primary">
              Conte o que você precisa resolver
            </a>

            <a href="#processo" className="hero__secondary">
              Como trabalhamos
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          aria-hidden="true"
          initial={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.94 }
          }
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: reduceMotion ? 0 : 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero__visual-stage">
            <div className="hero__glow" />

            <div className="hero__ring hero__ring--inner" />
            <div className="hero__ring hero__ring--outer" />

            <div className="hero__symbol-wrapper">
              <img
                src={soluverxSymbol}
                alt=""
                className="hero__symbol"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

export default Hero