import { useState } from 'react'

export default function CTABanner() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="cta-gradient rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
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
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 py-3 px-4 rounded-md text-sm outline-none border border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-white/50"
              />
              <button
                className="btn-blue py-3 px-6 rounded-md text-sm text-white font-medium whitespace-nowrap"
              >
                Join Waitlist
              </button>
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
        </div>
      </div>
    </section>

  )
}
