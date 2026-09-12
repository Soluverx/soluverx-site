import { motion } from 'motion/react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <div className="hero__content">
          <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Desenvolvimento de software sob medida
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Software sob medida para necessidades reais.
          </motion.h1>

          <motion.p
            className="hero__text"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Entendemos o problema, estruturamos a necessidade e desenvolvemos
            soluções digitais pensadas para cada projeto.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.38,
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
      </div>
    </section>
  )
}

export default Hero