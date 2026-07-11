import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, Clock } from 'lucide-react'
import BlobBackground from '../components/BlobBackground'
import { useLanguage } from '../context/LanguageContext'

export default function ComingSoon() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-clay-gradient dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <BlobBackground variant="warm" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="clay-card-solid max-w-lg w-full text-center p-10 sm:p-14"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-24 h-24 mx-auto rounded-clay-lg bg-gradient-to-br from-orange to-pinkpastel shadow-clay flex items-center justify-center mb-8"
        >
          <Clock className="text-white" size={40} />
        </motion.div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-3">
          {t('comingSoon.title')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">{t('comingSoon.subtitle')}</p>

        <Link to="/" className="clay-btn-primary">
          <HomeIcon size={18} /> {t('comingSoon.backHome')}
        </Link>
      </motion.div>
    </div>
  )
}
