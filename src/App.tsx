import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { PortfolioSections } from '@/components/PortfolioSections'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioSections />
      </main>
      <Footer />
    </>
  )
}
