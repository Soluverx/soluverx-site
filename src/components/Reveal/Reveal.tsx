import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import './Reveal.css'

type RevealProps = {
  children: ReactNode
  delay?: number
  distance?: number
  className?: string
}

function Reveal({
  children,
  delay = 0,
  distance = 36,
  className = '',
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`reveal ${className}`}
      initial={
        reduceMotion
          ? { opacity: 1, y: 0 }
          : {
              opacity: 0,
              y: distance,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal