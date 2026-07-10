import MainLayout from '../layouts/MainLayout'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Products from '../sections/Products'
import Gallery from '../sections/Gallery'
import News from '../sections/News'
import FAQ from '../sections/FAQ'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Products />
      <Gallery />
      <News />
      <FAQ />
    </MainLayout>
  )
}
