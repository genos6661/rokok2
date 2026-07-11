import { useState } from 'react'
import SectionReveal from '../components/SectionReveal'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import useFetchData from '../hooks/useFetchData'
import { useLanguage } from '../context/LanguageContext'

export default function Products() {
  const { t } = useLanguage()
  const { data: products, loading } = useFetchData('products.json')
  const [selected, setSelected] = useState(null)

  return (
    <section id="products" className="relative py-24 bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">{t('products.eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mt-4">{t('products.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4">{t('products.subtitle')}</p>
        </SectionReveal>

        {loading && <p className="text-center text-slate-500 dark:text-slate-500">Loading...</p>}

        <div
          className="grid gap-6 justify-center"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 20rem))' }}
        >
          {products?.filter(p => p.status === 'active').map((product, i) => (
            <SectionReveal key={product.id} delay={(i % 4) * 0.08}>
              <ProductCard
                product={product}
                onViewDetail={setSelected}
                viewLabel={t('products.viewDetail')}
                buyLabel={t('products.buyNow')}
              />
            </SectionReveal>
          ))}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
