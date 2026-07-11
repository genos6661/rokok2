import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProductModal({ product, onClose }) {
  return (
    <AnimatePresence>
      {product && (
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
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white dark:bg-slate-800 shadow-clay flex items-center justify-center"
            >
              <X size={18} />
            </button>
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-56 object-cover rounded-clay-sm mb-5"
            />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">{product.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{product.detail}</p>
            <div className="grid grid-cols-3 gap-3">
              {product.gallery?.map((img, i) => (
                <img key={i} src={img} alt="" className="w-full h-24 object-cover rounded-clay-sm" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
