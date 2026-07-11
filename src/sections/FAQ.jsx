import SectionReveal from '../components/SectionReveal'
import AccordionItem from '../components/AccordionItem'
import useFetchData from '../hooks/useFetchData'
import { useLanguage } from '../context/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const { data: faqs, loading } = useFetchData('faq.json')

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionReveal className="text-center mb-14">
          <span className="eyebrow">{t('faq.eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-4">{t('faq.title')}</h2>
        </SectionReveal>

        {loading && <p className="text-center text-slate-500 dark:text-slate-500">Loading...</p>}

        <div className="space-y-4">
          {faqs?.map((item, i) => (
            <SectionReveal key={item.id} delay={(i % 5) * 0.05}>
              <AccordionItem question={item.q} answer={item.a} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
