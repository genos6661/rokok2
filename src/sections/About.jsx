import { motion } from 'framer-motion'
import { BookOpen, Eye, Target, Sparkles, Factory, Cog } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const cards = [
    { icon: BookOpen, title: t('about.historyTitle'), text: t('about.history'), color: 'from-sky-light to-sky' },
    { icon: Eye, title: t('about.visionTitle'), text: t('about.vision'), color: 'from-mint-light to-mint' },
    { icon: Target, title: t('about.missionTitle'), text: t('about.mission'), color: 'from-peach-light to-peach' }
  ]

  const values = t('about.values')

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-4">{t('about.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4">{t('about.overview')}</p>
        </SectionReveal>

        {/* History / Vision / Mission cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <SectionReveal key={card.title} delay={i * 0.1}>
              <div className="clay-card p-8 h-full hover:shadow-clay-hover transition-shadow">
                <div className={`w-14 h-14 rounded-clay-sm bg-gradient-to-br ${card.color} shadow-clay-inset flex items-center justify-center mb-5`}>
                  <card.icon className="text-white" size={26} />
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Core Values */}
        <SectionReveal className="mb-16">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">{t('about.valuesTitle')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((v, i) => (
              <motion.span
                key={v}
                whileHover={{ scale: 1.06 }}
                className="clay-card-solid px-6 py-3 text-sm font-semibold text-purplepastel-dark"
              >
                {v}
              </motion.span>
            ))}
          </div>
        </SectionReveal>

        {/* Factory Overview & Manufacturing Process */}
        <div className="grid lg:grid-cols-2 gap-8">
          <SectionReveal>
            <div className="clay-card overflow-hidden h-full">
              <img
                src="https://picsum.photos/seed/factoryabout/800/500"
                alt="Factory overview"
                className="w-full h-56 object-cover"
              />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Factory className="text-sky-dark" size={22} />
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{t('about.factoryTitle')}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t('about.factory')}</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="clay-card overflow-hidden h-full">
              <img
                src="https://picsum.photos/seed/processabout/800/500"
                alt="Manufacturing process"
                className="w-full h-56 object-cover"
              />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Cog className="text-orange-dark" size={22} />
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{t('about.processTitle')}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t('about.process')}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
