import { motion } from 'framer-motion'

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="clay-card px-5 py-4 text-center min-w-[110px] hover:shadow-clay-hover transition-shadow"
    >
      <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-purplepastel-dark to-orange-dark bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">{label}</p>
    </motion.div>
  )
}
