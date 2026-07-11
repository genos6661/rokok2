import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import BoardOfDirectors from './pages/BoardOfDirectors'
import Careers from './pages/Careers'
import UnderMaintenance from './pages/UnderMaintenance'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'
import { FRONTEND_DOMAIN } from './config'

/**
 * App - defines all routes.
 * Home ("/") is the single-page landing containing all main sections.
 * Separate pages exist only for Board of Directors, Careers, and
 * the Under Maintenance / Coming Soon placeholders.
 */
export default function App() {
  const location = useLocation()

  // Keep the canonical + Open Graph URL meta tags in sync with the
  // current route, built from the shared FRONTEND_DOMAIN config so it
  // always points at the site's real public address.
  useEffect(() => {
    const url = `${FRONTEND_DOMAIN}${location.pathname}`

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }
    ogUrl.setAttribute('content', url)
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dewan-direksi" element={<BoardOfDirectors />} />
      <Route path="/karir" element={<Careers />} />
      <Route path="/under-maintenance" element={<UnderMaintenance />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
