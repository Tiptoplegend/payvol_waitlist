import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section
      className="relative pt-28 pb-16 overflow-x-hidden bg-white"
      id="home"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit py-1.5 px-4 text-sm font-medium rounded-full border border-blue-200" style={{ background: 'linear-gradient(135deg, rgba(1,28,97,0.08) 0%, rgba(93,135,255,0.12) 100%)', color: '#011c61' }}>
              COMING SOON
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-dark font-bold leading-tight">
              Smarter payments.<br />
              <span className="text-primary">Brighter future.</span>
            </h1>

            <p className="text-base text-muted leading-7 max-w-md">
              PayVol is the all-in-one finance app for seamless payments, money transfers, virtual cards, budgeting, and more. Built for a better way to manage money.
            </p>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 py-3 px-4 rounded-md border border-gray-300 text-sm outline-none focus:border-primary"
              />
              <button className="btn-primary py-3 px-6 rounded-md text-sm text-white transition-all duration-300 font-medium whitespace-nowrap">
                Join Waitlist
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img src="/assets/images/user/client-03.jpg" className="h-9 w-9 rounded-full border-2 border-white object-cover" alt="user" />
                <img src="/assets/images/user/client-04.jpg" className="h-9 w-9 rounded-full border-2 border-white object-cover" alt="user" />
                <img src="/assets/images/user/client-05.jpg" className="h-9 w-9 rounded-full border-2 border-white object-cover" alt="user" />
                <img src="/assets/images/user/client-07.jpg" className="h-9 w-9 rounded-full border-2 border-white object-cover" alt="user" />
              </div>
              <p className="text-sm text-muted font-medium">Join 5,000+ others on the waitlist</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <img src="/assets/images/store.png" className="h-12" alt="App Store" />
              <img src="/assets/images/google.png" className="h-12" alt="Google Play" />
            </div>
          </div>

          <div className="relative flex items-center justify-center min-h-[560px]">
            <img
              src="/assets/images/p-mockup.png"
              alt="PayVol App Mockup"
              className="mockup-img h-[640px] max-w-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
