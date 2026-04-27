import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    try {
      // Extract name from email (e.g. john.doe@email.com -> John Doe)
      const nameMatch = email.match(/^([^@]*)@/);
      const rawName = nameMatch ? nameMatch[1] : '';
      const formattedName = rawName.replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

      await addDoc(collection(db, 'waitlist'), {
        name: formattedName,
        email: email,
        source: 'hero',
        joinedAt: new Date().toISOString(),
        createdAt: serverTimestamp()
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error adding document: ", error)
      alert("Something went wrong saving your email. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      className="relative pt-28 pb-16 overflow-x-hidden bg-white"
      id="home"
    >
      {/* Right-side blue fill — removes white showing behind phone */}
      <div className="absolute top-0 right-0 h-full w-[55%] pointer-events-none z-0" style={{ background: 'linear-gradient(to right, transparent, #3b82f6 30%, #1d4ed8 60%, #011c61 100%)' }} />

      {/* Precision SVG Background replicating the original design */}
      <div className="absolute bottom-0 md:top-0 left-0 w-full h-[20%] md:h-full overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 1440 800" className="absolute bottom-0 md:top-0 right-0 w-full h-full object-cover object-right-bottom" preserveAspectRatio="xMaxYMax slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2" fill="rgba(255,255,255,0.12)"/>
            </pattern>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#011c61" />
            </linearGradient>
          </defs>

          {/* Brighter Blue Base Wave */}
          <path d="M 700 800 C 700 500, 1000 250, 1440 150 L 1440 800 Z" fill="url(#grad1)"/>
          
          {/* Dark Blue Overlay Wave */}
          <path d="M 900 800 C 900 550, 1150 350, 1440 300 L 1440 800 Z" fill="url(#grad2)"/>
          
          {/* Dotted Grid Pattern on the right */}
          <path d="M 1150 800 C 1150 650, 1250 500, 1440 450 L 1440 800 Z" fill="url(#dots)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="flex flex-col gap-5">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit py-1.5 px-4 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-200" 
              style={{ background: 'linear-gradient(135deg, rgba(1,28,97,0.08) 0%, rgba(93,135,255,0.12) 100%)', color: '#011c61' }}
            >
              COMING SOON
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl text-dark font-bold leading-tight"
            >
              Smarter payments.<br />
              <span className="text-blue-500">Brighter future.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-muted leading-7 max-w-md"
            >
             Payvol is redefining everyday finance by combining payments, cards, financial insights, and crypto access into one unified platform. Our mission is to transform how people interact with money — turning daily transactions into a pathway for greater financial access and smarter decision-making.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 h-[50px] relative"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex items-center gap-2 absolute inset-0"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 h-full px-4 rounded-md border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                    <button type="submit" disabled={isLoading} className="bg-[#011c61] h-full px-6 rounded-md text-sm text-white font-medium whitespace-nowrap hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]">
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Join Waitlist'}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="absolute inset-0 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-5 rounded-md"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium">You're on the list! We'll be in touch.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                <img src="/assets/images/user/client-03.jpg" className="h-9 w-9 rounded-full border-2 border-white object-cover" alt="user" />
                <img src="/assets/images/user/client-04.jpg" className="h-9 w-9 rounded-full border-2 border-white object-cover" alt="user" />
                <img src="/assets/images/user/client-05.jpg" className="h-9 w-9 rounded-full border-2 border-white object-cover" alt="user" />
                <img src="/assets/images/user/client-07.jpg" className="h-9 w-9 rounded-full border-2 border-white object-cover" alt="user" />
              </div>
              <p className="text-sm text-muted font-medium">Join 5,000+ others on the waitlist</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              <img src="/assets/images/store.png" className="h-12 hover:scale-105 transition-transform cursor-pointer" alt="App Store" />
              <img src="/assets/images/google.png" className="h-12 hover:scale-105 transition-transform cursor-pointer" alt="Google Play" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center min-h-[400px] md:min-h-[560px]"
          >
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src="/assets/images/mockup.png"
              alt="PayVol App Mockup"
              className="relative z-10 h-[450px] md:h-[680px] max-w-full object-contain shadow-[0_20px_50px_rgba(1,28,97,0.3)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
