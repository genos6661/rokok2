import { createContext, useContext, useState, useEffect } from 'react'
import id from '../locales/id.json'
import en from '../locales/en.json'

const dictionaries = { id, en }

const LanguageContext = createContext(null)

// Helper to get nested value by dot path e.g. "nav.home"
function getValue(obj, path) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'id')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (path) => {
    const value = getValue(dictionaries[lang], path)
    return value !== undefined ? value : path
  }

  const toggleLang = () => setLang((prev) => (prev === 'id' ? 'en' : 'id'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
