import { motion } from 'framer-motion'

/**
 * SectionReveal - wraps children with a fade + slide-up reveal animation
 * that triggers once when scrolled into view.
 */
export default function SectionReveal({ children, className = '', delay = 0, y = 30 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
