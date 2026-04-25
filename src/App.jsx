import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Security from './components/Security'
import FAQs from './components/FAQs'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Security />
        <FAQs />
        <CTABanner />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
