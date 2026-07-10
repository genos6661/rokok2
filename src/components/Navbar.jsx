import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const navItems = [
  { key: 'home', hash: '#hero' },
  { key: 'about', hash: '#about' },
  { key: 'products', hash: '#products' },
  { key: 'gallery', hash: '#gallery' },
  { key: 'news', hash: '#news' },
  { key: 'faq', hash: '#faq' },
  { key: 'board', to: '/dewan-direksi' },
  { key: 'careers', to: '/karir' },
  { key: 'ecommerce', to: '/under-maintenance' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (item) => {
    setOpen(false)
    if (item.to) {
      navigate(item.to)
      return
    }
    if (location.pathname !== '/') {
      navigate('/' + item.hash)
    } else {
      const el = document.querySelector(item.hash)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 rounded-clay-lg transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-clay mx-3 sm:mx-6'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-purplepastel-dark">
            <span className="w-10 h-10 rounded-clay-sm bg-gradient-to-br from-sky to-lavender shadow-clay flex items-center justify-center text-white">
              NK
            </span>
            <span className="hidden sm:inline">Nusantara Kretek</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item)}
                className="px-3 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-white/70 hover:text-purplepastel-dark transition-colors"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-full text-sm font-semibold bg-white/70 shadow-clay text-purplepastel-dark hover:shadow-clay-hover transition-all"
            >
              <Globe size={16} />
              {lang.toUpperCase()}
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNav({ hash: '#contact' })
              }}
              className="hidden md:inline-flex clay-btn-primary text-sm py-2 px-5"
            >
              {t('nav.contact')}
            </a>
            <button
              className="lg:hidden w-10 h-10 rounded-clay-sm bg-white/70 shadow-clay flex items-center justify-center"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden pb-4 flex flex-col gap-1 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item)}
                className="text-left px-3 py-2 rounded-clay-sm text-sm font-medium text-slate-700 hover:bg-white/70"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-2 rounded-clay-sm text-sm font-semibold bg-white/70 mt-1"
            >
              <Globe size={16} /> {lang === 'id' ? 'English' : 'Bahasa Indonesia'}
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
