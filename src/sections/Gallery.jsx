import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import useFetchData from '../hooks/useFetchData'
import { useLanguage } from '../context/LanguageContext'

export default function Gallery() {
  const { t } = useLanguage()
  const { data: gallery, loading } = useFetchData('gallery.json')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = useMemo(() => {
    if (!gallery) return []
    return ['all', ...new Set(gallery.map((g) => g.category))]
  }, [gallery])

  const filtered = useMemo(() => {
    if (!gallery) return []
    if (activeCategory === 'all') return gallery
    return gallery.filter((g) => g.category === activeCategory)
  }, [gallery, activeCategory])

  return (
    <section id="gallery" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">{t('gallery.eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-4">{t('gallery.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4">{t('gallery.subtitle')}</p>
        </SectionReveal>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-br from-purplepastel-dark to-orange-dark text-white shadow-clay'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 shadow-clay-inset hover:shadow-clay'
              }`}
            >
              {cat === 'all' ? t('gallery.all') : cat}
            </button>
          ))}
        </div>

        {loading && <p className="text-center text-slate-500 dark:text-slate-500">Loading...</p>}

        {/* Masonry layout */}
        <div className="masonry">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="masonry-item clay-card overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="w-full object-cover rounded-clay" loading="lazy" />
              <div className="p-3">
                <p className="text-xs font-semibold text-purplepastel-dark">{item.category}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
