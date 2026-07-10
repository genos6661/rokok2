import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BoardOfDirectors from './pages/BoardOfDirectors'
import Careers from './pages/Careers'
import UnderMaintenance from './pages/UnderMaintenance'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

/**
 * App - defines all routes.
 * Home ("/") is the single-page landing containing all main sections.
 * Separate pages exist only for Board of Directors, Careers, and
 * the Under Maintenance / Coming Soon placeholders.
 */
export default function App() {
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
