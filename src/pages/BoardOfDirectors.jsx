import { motion } from 'framer-motion'
import MainLayout from '../layouts/MainLayout'
import BlobBackground from '../components/BlobBackground'
import SectionReveal from '../components/SectionReveal'
import useFetchData from '../hooks/useFetchData'
import { useLanguage } from '../context/LanguageContext'

export default function BoardOfDirectors() {
  const { t } = useLanguage()
  const { data: board, loading } = useFetchData('board.json')

  return (
    <MainLayout>
      <section className="relative pt-32 pb-24 min-h-screen overflow-hidden">
        <BlobBackground variant="cool" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">{t('board.eyebrow')}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-4">{t('board.title')}</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-4">{t('board.subtitle')}</p>
          </SectionReveal>

          {loading && <p className="text-center text-slate-500 dark:text-slate-500">Loading...</p>}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {board?.map((member, i) => (
              <SectionReveal key={member.id} delay={(i % 4) * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="clay-card overflow-hidden text-center">
                  <img src={member.photo} alt={member.name} className="w-full h-56 object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">{member.name}</h3>
                    <p className="text-xs font-semibold text-purplepastel-dark mb-3">{member.position}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
