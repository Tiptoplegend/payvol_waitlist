import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
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
      const nameMatch = email.match(/^([^@]*)@/);
      const rawName = nameMatch ? nameMatch[1] : '';
      const formattedName = rawName.replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

      await addDoc(collection(db, 'waitlist'), {
        name: formattedName,
        email: email,
        source: 'hero_banner',
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
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 bg-bgLight dark:bg-bgDark flex items-center transition-colors duration-300" id="home">
      
      {/* Subtle radial gradient — not flashy */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black/[0.03] via-bgLight to-bgLight dark:from-navyBlue/20 dark:via-bgDark dark:to-bgDark pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.08] text-textLight dark:text-white mb-6 tracking-tight transition-colors duration-300">
                One App.<br />
                Endless <span className="text-primary">Possibilities.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-textLightMuted dark:text-textMuted leading-relaxed max-w-lg mb-10 transition-colors duration-300">
                Manage payments, cards, crypto, and financial insights in one seamless platform designed for the next generation.
              </p>

              {/* Email Capture */}
              <div className="w-full max-w-md mb-14">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="input-dark flex-1"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap min-w-[160px]"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Get Early Access
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 bg-primary/[0.08] border border-primary/20 text-primary px-6 py-4 rounded-lg">
                    <span className="text-[15px] font-medium">You're on the list — we'll be in touch soon.</span>
                  </div>
                )}
              </div>

              {/* Trust indicators — clean, minimal text separated by mid-dots */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] tracking-[0.15em] uppercase text-textLight/40 dark:text-white/30 font-medium transition-colors duration-300">
                <span>Built for Emerging Markets</span>
                <span className="text-black/10 dark:text-white/10">·</span>
                <span>Secure by Design</span>
                <span className="text-black/10 dark:text-white/10">·</span>
                <span>All-in-One Finance</span>
              </div>
            </motion.div>
          </div>

          {/* Right Mockup */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-devices relative"
            >
              {/* Very subtle glow — not a big blurry blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary/[0.06] blur-[120px] rounded-full pointer-events-none" />
              
              <img
                src="/assets/images/payvol-mockups.png"
                alt="PayVol Dashboard and Mobile App"
                className="hero-mockups-img relative z-10"
                draggable={false}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
