import type { ReactNode } from 'react'
import './Reveal.css'

type RevealProps = {
  children: ReactNode
  delay?: number
  distance?: number
  className?: string
}

function Reveal({
  children,
  className = '',
}: RevealProps) {
  return (
    <div className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export default Reveal