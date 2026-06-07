import { useState } from 'react'
import { Loader2, ArrowRight } from 'lucide-react'
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
    <section id="join-waitlist" className="py-28 bg-bgLight dark:bg-bgDark transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative bg-bgLightCard dark:bg-bgCard border border-black/[0.06] dark:border-white/[0.06] rounded-xl p-12 md:p-20 overflow-hidden transition-colors duration-300">
          {/* Subtle corner glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/[0.04] blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="section-label">Waitlist</span>
            <h2 className="section-heading mb-5">
              Ready to experience the<br />future of finance?
            </h2>
            <p className="text-textLightMuted dark:text-textMuted text-lg mb-10 leading-relaxed transition-colors duration-300">
              Join the PayVol waitlist today and get early access when we launch.
            </p>

            <div className="max-w-md mx-auto">
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
                    className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap min-w-[150px]"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 bg-primary/[0.08] border border-primary/20 text-primary px-6 py-4 rounded-lg">
                  <span className="text-[15px] font-medium">You're on the list — we'll be in touch soon.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
