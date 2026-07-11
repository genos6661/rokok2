import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MapPin, Briefcase } from 'lucide-react'
import MainLayout from '../layouts/MainLayout'
import BlobBackground from '../components/BlobBackground'
import SectionReveal from '../components/SectionReveal'
import useFetchData from '../hooks/useFetchData'
import { useLanguage } from '../context/LanguageContext'

export default function Careers() {
  const { t } = useLanguage()
  const { data: careers, loading } = useFetchData('careers.json')
  const navigate = useNavigate()

  return (
    <MainLayout>
      <section className="relative pt-32 pb-24 min-h-screen overflow-hidden">
        <BlobBackground variant="warm" />
        <div className="max-w-4xl mx-auto px-6">
          <SectionReveal className="text-center mb-14">
            <span className="eyebrow">{t('careers.eyebrow')}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-4">{t('careers.title')}</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-4">{t('careers.subtitle')}</p>
          </SectionReveal>

          {loading && <p className="text-center text-slate-500 dark:text-slate-500">Loading...</p>}

          <div className="space-y-4">
            {careers?.map((job, i) => (
              <SectionReveal key={job.id} delay={(i % 5) * 0.06}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="clay-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1.5">{job.position}</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1"><MapPin size={13} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase size={13} /> {job.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/coming-soon')}
                    className="clay-btn-primary text-sm py-2.5 px-6 self-start sm:self-auto"
                  >
                    {t('careers.apply')}
                  </button>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
