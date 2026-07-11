import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Globe, Sun, Moon } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { key: 'home', hash: '#hero' },
  { key: 'about', hash: '#about' },
  { key: 'products', hash: '#products' },
  { key: 'gallery', hash: '#gallery' },
  { key: 'news', hash: '#news' },
  { key: 'board', to: '/dewan-direksi' },
  { key: 'careers', to: '/karir' },
  { key: 'ecommerce', to: '/under-maintenance' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
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
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      {/* Container width is always a consistent 90% of the viewport,
          regardless of scroll state - only the background/shadow change.
          On mobile/tablet a translucent backdrop is always visible so nav
          text stays readable over the hero; on large screens it stays
          transparent at the top and becomes glass on scroll. */}
      <div
        className={`w-[90%] mx-auto rounded-clay-lg backdrop-blur-md transition-colors duration-300 ${
          scrolled
            ? 'glass-panel shadow-clay'
            : 'bg-white/75 dark:bg-slate-900/75 lg:bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-purplepastel-dark">
            <span className="w-10 h-10 rounded-clay-sm bg-gradient-to-br from-sky to-lavender shadow-clay flex items-center justify-center text-white">
              NK
            </span>
            <span className="hidden sm:inline dark:text-slate-100">Nusantara Kretek</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item)}
                className="px-3 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800/70 hover:text-purplepastel-dark transition-colors"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 dark:bg-slate-800/70 shadow-clay text-purplepastel-dark hover:shadow-clay-hover transition-all"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-full text-sm font-semibold bg-white/70 dark:bg-slate-800/70 shadow-clay text-purplepastel-dark hover:shadow-clay-hover transition-all"
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
              className="lg:hidden w-10 h-10 rounded-clay-sm bg-white/70 dark:bg-slate-800/70 shadow-clay flex items-center justify-center text-purplepastel-dark"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden pb-4 px-4 sm:px-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item)}
                className="text-left px-3 py-2 rounded-clay-sm text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800/70"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-2 rounded-clay-sm text-sm font-semibold bg-white/70 dark:bg-slate-800/70 mt-1 text-purplepastel-dark w-fit"
            >
              <Globe size={16} /> {lang === 'id' ? 'English' : 'Bahasa Indonesia'}
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
