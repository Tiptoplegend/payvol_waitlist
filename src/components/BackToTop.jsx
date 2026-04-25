import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed z-50 bottom-8 right-8 h-9 w-9 rounded-md bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primaryDark transition-all duration-300"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4 stroke-2" />
    </button>
  )
}
