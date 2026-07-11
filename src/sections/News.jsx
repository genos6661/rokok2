import { useState } from 'react'
import SectionReveal from '../components/SectionReveal'
import NewsCard from '../components/NewsCard'
import NewsModal from '../components/NewsModal'
import useFetchData from '../hooks/useFetchData'
import { useLanguage } from '../context/LanguageContext'

export default function News() {
  const { t } = useLanguage()
  const { data: news, loading } = useFetchData('news.json')
  const [selected, setSelected] = useState(null)

  return (
    <section id="news" className="relative py-24 bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t('news.eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-4">{t('news.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4">{t('news.subtitle')}</p>
        </SectionReveal>

        {loading && <p className="text-center text-slate-500 dark:text-slate-500">Loading...</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news?.filter(n => n.status === 'published').map((article, i) => (
            <SectionReveal key={article.id} delay={(i % 3) * 0.1}>
              <NewsCard article={article} onReadMore={setSelected} readMoreLabel={t('news.readMore')} />
            </SectionReveal>
          ))}
        </div>
      </div>

      <NewsModal article={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
