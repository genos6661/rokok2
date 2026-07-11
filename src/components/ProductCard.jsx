import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, ShoppingCart } from 'lucide-react'

export default function ProductCard({ product, onViewDetail, viewLabel, buyLabel }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="clay-card overflow-hidden group flex flex-col h-full"
    >
      <div className="overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1.5">{product.name}</h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetail(product)}
            className="flex-1 text-xs font-semibold px-3 py-2.5 rounded-full bg-white dark:bg-slate-800 shadow-clay-inset text-purplepastel-dark flex items-center justify-center gap-1.5 hover:shadow-clay transition-all"
          >
            <Eye size={14} /> {viewLabel}
          </button>
          <Link
            to="/under-maintenance"
            className="flex-1 text-xs font-semibold px-3 py-2.5 rounded-full bg-gradient-to-br from-purplepastel-dark to-orange-dark text-white flex items-center justify-center gap-1.5 shadow-clay hover:shadow-clay-hover transition-all"
          >
            <ShoppingCart size={14} /> {buyLabel}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
