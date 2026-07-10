import { Link } from 'react-router-dom'
import { Instagram, Facebook, Linkedin, Youtube, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import useFetchData from '../hooks/useFetchData'

export default function Footer() {
  const { t } = useLanguage()
  const { data: settings } = useFetchData('settings.json')

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-white to-lavender-light pt-20 pb-8 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Company */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-purplepastel-dark mb-4">
              <span className="w-10 h-10 rounded-clay-sm bg-gradient-to-br from-sky to-lavender shadow-clay flex items-center justify-center text-white">
                NK
              </span>
              <span>{settings?.company_name || 'Nusantara Kretek'}</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {settings?.address}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-800">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-purplepastel-dark">{t('nav.about')}</a></li>
              <li><a href="#products" className="hover:text-purplepastel-dark">{t('nav.products')}</a></li>
              <li><Link to="/dewan-direksi" className="hover:text-purplepastel-dark">{t('nav.board')}</Link></li>
              <li><Link to="/karir" className="hover:text-purplepastel-dark">{t('nav.careers')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-800">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>{settings?.phone}</li>
              <li>{settings?.email}</li>
            </ul>
            <div className="flex gap-2 mt-4">
              {settings?.instagram && (
                <a href={settings.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white shadow-clay flex items-center justify-center text-purplepastel-dark hover:shadow-clay-hover">
                  <Instagram size={16} />
                </a>
              )}
              {settings?.facebook && (
                <a href={settings.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white shadow-clay flex items-center justify-center text-purplepastel-dark hover:shadow-clay-hover">
                  <Facebook size={16} />
                </a>
              )}
              {settings?.linkedin && (
                <a href={settings.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white shadow-clay flex items-center justify-center text-purplepastel-dark hover:shadow-clay-hover">
                  <Linkedin size={16} />
                </a>
              )}
              {settings?.youtube && (
                <a href={settings.youtube} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white shadow-clay flex items-center justify-center text-purplepastel-dark hover:shadow-clay-hover">
                  <Youtube size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-800">{t('footer.newsletter')}</h4>
            <p className="text-sm text-slate-600 mb-3">{t('footer.newsletterText')}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 bg-white rounded-full shadow-clay-inset p-1.5"
            >
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 bg-transparent px-3 text-sm outline-none"
              />
              <button className="w-9 h-9 rounded-full bg-gradient-to-br from-purplepastel-dark to-orange-dark text-white flex items-center justify-center shrink-0">
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {settings?.company_name || 'Nusantara Kretek'}. {t('footer.rights')}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-purplepastel-dark">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-purplepastel-dark">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
