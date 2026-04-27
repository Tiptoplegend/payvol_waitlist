import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'About Us', href: '#about' },
  { label: 'FAQs', href: '#faqs' },
  
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 py-2 shadow-md lg:shadow-none ${
        isSticky ? 'bg-white shadow-md' : 'bg-white lg:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-nowrap flex-wrap items-center">
          <a className="flex items-center" href="#home">
            <img src="/assets/images/PV-logo.png" className="h-16 w-auto object-contain" alt="Logo" />
          </a>

          <div className="lg:hidden flex items-center ml-auto px-2.5">
            <button onClick={() => setIsOpen(!isOpen)} type="button">
              {isOpen
                ? <X className="h-8 w-8 text-black" />
                : <Menu className="h-8 w-8 text-black" />
              }
            </button>
          </div>

          <div
            className={`${
              isOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row basis-full lg:basis-auto grow items-center justify-center mx-auto mt-6 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row gap-y-2 lg:items-center justify-center">
              {navLinks.map(link => (
                <li key={link.href} className="mx-1.5">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize transition-all duration-300 hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                      activeSection === link.href.slice(1)
                        ? 'text-primary after:w-full'
                        : isSticky
                        ? 'text-dark'
                        : 'text-black'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-auto shrink hidden lg:inline-flex gap-2">
            <a
              href="#"
              className="btn-primary py-2 px-6 inline-flex items-center gap-2 rounded-md text-base text-white font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Join Waitlist</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  )
}
