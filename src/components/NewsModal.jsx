import { AnimatePresence, motion } from 'framer-motion'
import { X, Calendar } from 'lucide-react'

export default function NewsModal({ article, onClose }) {
  return (
    <AnimatePresence>
      {article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="clay-card-solid max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white shadow-clay flex items-center justify-center"
            >
              <X size={18} />
            </button>
            <img src={article.thumbnail} alt={article.title} className="w-full h-56 object-cover rounded-clay-sm mb-5" />
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
              <Calendar size={13} />
              {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{article.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{article.content}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
