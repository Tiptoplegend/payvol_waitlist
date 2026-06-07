import { Send, CreditCard, Bitcoin, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Send,
    title: 'Payments',
    desc: 'Instant transfers and seamless money movement across borders, at competitive rates.',
  },
  {
    icon: CreditCard,
    title: 'Cards',
    desc: 'Virtual and physical cards designed for everyday spending — online and in-store.',
  },
  {
    icon: Bitcoin,
    title: 'Crypto',
    desc: 'Connect and manage crypto alongside traditional finance, all in one place.',
  },
  {
    icon: BarChart3,
    title: 'Insights',
    desc: 'Understand your spending patterns and build better financial habits over time.',
  },
]

export default function Services() {
  return (
    <section id="features" className="py-28 bg-bgLight dark:bg-bgDark transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Features</span>
          <h2 className="section-heading mb-5">
            The Future of Finance,<br />Simplified
          </h2>
          <p className="text-textLightMuted dark:text-textMuted text-lg leading-relaxed transition-colors duration-300">
            Everything you need to manage, move, and grow your money — unified in one intelligent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.06] dark:bg-white/[0.06] rounded-xl overflow-hidden border border-black/[0.06] dark:border-white/[0.06] transition-colors duration-300">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-bgLightCard dark:bg-bgCard p-10 flex flex-col items-start transition-colors duration-300 hover:bg-bgLightCardHover dark:hover:bg-bgCardHover"
            >
              <feature.icon className="w-6 h-6 text-primary mb-8" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-textLight dark:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
              <p className="text-textLightMuted dark:text-textMuted text-[15px] leading-relaxed transition-colors duration-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
