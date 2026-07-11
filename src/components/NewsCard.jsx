import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

export default function NewsCard({ article, onReadMore, readMoreLabel }) {
  const date = new Date(article.date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <motion.div whileHover={{ y: -6 }} className="clay-card overflow-hidden flex flex-col h-full">
      <img src={article.thumbnail} alt={article.title} className="w-full h-44 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500 mb-2">
          <Calendar size={13} /> {date}
        </div>
        <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4 flex-1">{article.summary}</p>
        <button
          onClick={() => onReadMore(article)}
          className="self-start text-xs font-semibold text-purplepastel-dark flex items-center gap-1 hover:gap-2 transition-all"
        >
          {readMoreLabel} <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  )
}
