import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, Wrench } from 'lucide-react'
import BlobBackground from '../components/BlobBackground'
import { useLanguage } from '../context/LanguageContext'

export default function UnderMaintenance() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-clay-gradient">
      <BlobBackground variant="default" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="clay-card-solid max-w-lg w-full text-center p-10 sm:p-14"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-24 h-24 mx-auto rounded-clay-lg bg-gradient-to-br from-sky to-lavender shadow-clay flex items-center justify-center mb-8"
        >
          <Wrench className="text-white" size={40} />
        </motion.div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3">
          {t('maintenance.title')}
        </h1>
        <p className="text-slate-600 mb-8">{t('maintenance.subtitle')}</p>

        <Link to="/" className="clay-btn-primary">
          <HomeIcon size={18} /> {t('maintenance.backHome')}
        </Link>
      </motion.div>
    </div>
  )
}
