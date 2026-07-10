import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout({ children, showFooter = true }) {
  return (
    <div className="min-h-screen flex flex-col bg-clay-gradient">
      <Navbar />
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}
