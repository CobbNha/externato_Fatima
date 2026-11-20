import { useRef } from 'react'
import type { ReactNode } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import type { Variants } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
}

export const stagger = (delayChildren = 0, staggerChildren = 0.09): Variants => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren } },
})

const viewport = { once: true, amount: 0.2 } as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'up' | 'left' | 'right' | 'scale'
}

const offsets = {
  up: { x: 0, y: 40, scale: 1 },
  left: { x: -50, y: 0, scale: 1 },
  right: { x: 50, y: 0, scale: 1 },
  scale: { x: 0, y: 0, scale: 0.92 },
}

export function Reveal({ children, className, delay = 0, from = 'up' }: RevealProps) {
  const offset = offsets[from]
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} variants={stagger(delay)} initial="hidden" whileInView="visible" viewport={viewport}>
      {children}
    </motion.div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}

export function ParallaxImage({ src, alt, className, distance = 60 }: { src: string; alt: string; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance])
  return (
    <div ref={ref} className={`parallax-frame ${className ?? ''}`}>
      <motion.img src={src} alt={alt} style={{ y }} loading="lazy" decoding="async" />
    </div>
  )
}
