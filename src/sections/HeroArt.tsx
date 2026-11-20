import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Asterisk, Sparkle, Sparkles, School } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

export function HeroArt() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const mainY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const smallY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const stickerY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const stickerRotate = useTransform(scrollYProgress, [0, 1], [-8, 14])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <div className="hero-art" ref={ref} aria-label="Fotografias do ambiente escolar">
      <motion.div
        className="hero-photo hero-photo-main"
        style={{ y: mainY, rotate: 3 }}
        initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ duration: 1, ease, delay: 0.2 }}
      >
        <motion.img
          src="/images/galeria/coral-festival-africano.jpg"
          alt="Coral de alunos e professores no festival cultural do Externato Fátima"
          style={{ scale: imageScale }}
          fetchPriority="high"
        />
        <span className="photo-label"><School size={15} /> Cultura, arte e convivência</span>
      </motion.div>
      <motion.div
        className="hero-photo hero-photo-small"
        style={{ y: smallY, rotate: -8 }}
        initial={{ opacity: 0, x: -40, rotate: -18 }}
        animate={{ opacity: 1, x: 0, rotate: -8 }}
        transition={{ duration: 0.9, ease, delay: 0.5 }}
      >
        <img src="/images/galeria/danca-tradicional.jpg" alt="Alunas a apresentar uma dança tradicional" />
      </motion.div>
      <motion.div
        className="hero-sticker hero-sticker-yellow"
        style={{ y: stickerY, rotate: stickerRotate }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.8 }}
      >
        <span>2027</span><small>ANO LECTIVO</small>
      </motion.div>
      <motion.div
        className="hero-sticker hero-sticker-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
      >
        <Sparkles size={19} /><span>Aprender<br />faz crescer!</span>
      </motion.div>
      <motion.div className="hero-orbit" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
      <motion.div className="hero-star hero-star-one" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}><Asterisk size="1em" aria-hidden="true" /></motion.div>
      <div className="hero-star hero-star-two"><Sparkle size="1em" aria-hidden="true" /></div>
    </div>
  )
}
