import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'
import BlobBackground from '../components/BlobBackground'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-clay-gradient dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <BlobBackground variant="cool" />
      <div className="clay-card-solid max-w-md w-full text-center p-12">
        <p className="text-6xl font-extrabold bg-gradient-to-br from-purplepastel-dark to-orange-dark bg-clip-text text-transparent mb-4">
          404
        </p>
        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Halaman Tidak Ditemukan</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">Halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
        <Link to="/" className="clay-btn-primary">
          <HomeIcon size={18} /> Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
