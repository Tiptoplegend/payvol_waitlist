import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function CTABanner() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    try {
      // Extract name from email (e.g. john.ansah@email.com -> John Ansah)
      const nameMatch = email.match(/^([^@]*)@/);
      const rawName = nameMatch ? nameMatch[1] : '';
      const formattedName = rawName.replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

      await addDoc(collection(db, 'waitlist'), {
        name: formattedName,
        email: email,
        source: 'cta_banner',
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="cta-gradient rounded-2xl px-6 py-10 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative circles */}
          <div className="absolute w-64 h-64 rounded-full bg-blue-500/10 -top-16 -right-16 pointer-events-none"></div>
          <div className="absolute w-40 h-40 rounded-full bg-blue-400/10 bottom-0 left-1/2 pointer-events-none"></div>
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold text-white leading-snug">
              Be the first to experience the future of finance.
            </h2>
            <p className="text-white/70 text-sm mt-3 leading-6">
              Join the PayVol waitlist today and get early access when we launch.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-md">
            <div>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full h-[50px] px-4 rounded-md text-sm outline-none border border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-white/50 focus:ring-2 focus:ring-blue-400 transition-colors md:flex-1"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-fit self-center md:self-auto btn-blue h-[50px] px-6 rounded-md text-sm text-white font-medium whitespace-nowrap hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                    >
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Join Waitlist'}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-md"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium">You're on the list! We'll be in touch.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img src="/assets/images/user/client-03.jpg" className="h-8 w-8 rounded-full border-2 border-white object-cover" alt="user" />
                <img src="/assets/images/user/client-04.jpg" className="h-8 w-8 rounded-full border-2 border-white object-cover" alt="user" />
                <img src="/assets/images/user/client-05.jpg" className="h-8 w-8 rounded-full border-2 border-white object-cover" alt="user" />
                <img src="/assets/images/user/client-07.jpg" className="h-8 w-8 rounded-full border-2 border-white object-cover" alt="user" />
              </div>
              <p className="text-white/70 text-sm">Join 5,000+ others on the waitlist</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

  )
}
