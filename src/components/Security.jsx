import { ArrowRight } from 'lucide-react'

const benefits = [
  {
    title: 'Priority Access',
    desc: 'Be among the very first to experience PayVol when we launch.',
  },
  {
    title: 'First Access to Cards',
    desc: 'Get virtual and physical cards before anyone else.',
  },
  {
    title: 'Early Crypto Features',
    desc: 'Access crypto functionality ahead of the public release.',
  },
  {
    title: 'Exclusive Rewards',
    desc: 'Special benefits reserved only for early supporters.',
  },
]

export default function Security() {
  return (
    <section id="security" className="py-28 bg-bgLightCard dark:bg-bgCard transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — Heading block */}
          <div className="lg:col-span-5">
            <span className="section-label">Early Access</span>
            <h2 className="section-heading mb-5">
              Join the waitlist today
            </h2>
            <p className="text-textLightMuted dark:text-textMuted text-lg leading-relaxed mb-8 transition-colors duration-300">
              Get ahead of the curve. Secure your spot and unlock exclusive benefits when PayVol launches.
            </p>
            <a
              href="#join-waitlist"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              Join now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — Benefits in a 2x2 grid, no icon boxes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/[0.06] dark:bg-white/[0.06] rounded-xl overflow-hidden border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-300">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-bgLight dark:bg-bgDark p-8 transition-colors duration-300 hover:bg-bgLightCardHover dark:hover:bg-bgCardHover"
              >
                {/* Simple ordinal, not an icon */}
                <span className="text-xs font-mono text-black/20 dark:text-white/20 mb-4 block transition-colors duration-300">0{idx + 1}</span>
                <h3 className="text-lg font-semibold text-textLight dark:text-white mb-2 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-textLightMuted dark:text-textMuted text-sm leading-relaxed transition-colors duration-300">{benefit.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
