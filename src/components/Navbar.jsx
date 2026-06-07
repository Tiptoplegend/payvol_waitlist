import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#roadmap' },
  { label: 'FAQ', href: '#faqs' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isSticky ? 'bg-white/90 dark:bg-bgDark/90 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.06] py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a className="flex items-center shrink-0" href="#home">
            <img src="/assets/images/PV-logo.png" className="h-16 w-auto object-contain dark:brightness-0 dark:invert" alt="PayVol Logo" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-textLightMuted hover:text-textLight dark:text-white/50 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA & Theme */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="text-textLightMuted hover:text-textLight dark:text-white/50 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" strokeWidth={2} /> : <Moon className="w-4 h-4" strokeWidth={2} />}
            </button>
            <a href="#join-waitlist" className="btn-primary text-[13px] py-2.5 px-5">
              Join Waitlist
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-textLightMuted hover:text-textLight dark:text-white/70 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" strokeWidth={2} /> : <Moon className="w-5 h-5" strokeWidth={2} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-textLightMuted hover:text-textLight dark:text-white/70 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[64px] bg-white/98 dark:bg-bgDark/98 backdrop-blur-xl z-[998] lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-8">
              <ul className="flex flex-col gap-1">
                {navLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-lg font-medium text-textLightMuted hover:text-textLight dark:text-white/70 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
                <a
                  href="#join-waitlist"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full py-3.5 text-center text-sm block"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
