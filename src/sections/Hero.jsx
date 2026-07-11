import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import BlobBackground from '../components/BlobBackground'
import StatCard from '../components/StatCard'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: '50+', label: t('hero.stat1') },
    { value: '120+', label: t('hero.stat2') },
    { value: '5000+', label: t('hero.stat3') },
    { value: '30+', label: t('hero.stat4') }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <BlobBackground variant="default" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            PT Nusantara Kretek Sejahtera
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-5 text-slate-800 dark:text-slate-100"
          >
            {t('hero.headline')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg mt-6 max-w-xl leading-relaxed"
          >
            {t('hero.subheadline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-9"
          >
            <a href="#about" className="clay-btn-primary">
              {t('hero.learnMore')} <ArrowRight size={18} />
            </a>
            <Link to="/under-maintenance" className="clay-btn-secondary">
              <ShoppingBag size={18} /> {t('hero.onlineStore')}
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-12">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} delay={0.4 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* Floating illustration */}
        <div className="relative hidden lg:flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-md"
          >
            <div className="clay-card p-6 rotate-3">
              <img
                src="https://picsum.photos/seed/heromain/600/700"
                alt="Factory illustration"
                className="rounded-clay-sm w-full h-[420px] object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="clay-card-solid absolute -bottom-8 -left-10 p-4 w-44"
            >
              <img
                src="https://picsum.photos/seed/heromini1/300/200"
                alt="Product"
                className="rounded-clay-sm w-full h-24 object-cover mb-2"
              />
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Quality Assured</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="clay-card-solid absolute -top-6 -right-8 p-3 w-32 text-center"
            >
              <p className="text-2xl font-extrabold text-orange-dark">30+</p>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium">Countries Reached</p>
            </motion.div>

            <motion.img
              src="https://picsum.photos/seed/herodecor1/120/120"
              alt=""
              animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="hidden xl:block absolute -bottom-16 right-6 w-20 h-20 object-cover rounded-clay-sm shadow-clay border-4 border-white"
            />
            <motion.img
              src="https://picsum.photos/seed/herodecor2/120/120"
              alt=""
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              className="hidden xl:block absolute top-24 -left-16 w-16 h-16 object-cover rounded-full shadow-clay border-4 border-white"
            />
            <motion.img
              src="https://picsum.photos/seed/herodecor3/120/120"
              alt=""
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="hidden xl:block absolute bottom-20 -right-16 w-14 h-14 object-cover rounded-full shadow-clay border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
