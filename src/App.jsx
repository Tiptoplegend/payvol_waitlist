import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Security from './components/Security'
import FAQs from './components/FAQs'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import LegalPage from './pages/LegalPage'

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
