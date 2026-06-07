const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    desc: 'Sign up in under two minutes. Verify your identity and you\'re ready to go.',
  },
  {
    number: '02',
    title: 'Connect Your Accounts',
    desc: 'Link Mobile Money, bank accounts, and crypto wallets — all in one place.',
  },
  {
    number: '03',
    title: 'Manage Everything',
    desc: 'Send, spend, save, and track your finances from a single dashboard.',
  },
]

export default function HowItWorks() {
  return (
    <section id="roadmap" className="py-28 bg-bgLight dark:bg-bgDark transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="section-heading">
            Get started in minutes
          </h2>
        </div>

        <div className="max-w-4xl">
          <div className="flex flex-col">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-8 md:gap-12 py-10 ${
                  idx !== steps.length - 1 ? 'border-b border-black/[0.06] dark:border-white/[0.06]' : ''
                }`}
              >
                {/* Step number — large, muted, typographic */}
                <span className="text-[3.5rem] md:text-[4.5rem] font-bold leading-none text-black/[0.04] dark:text-white/[0.06] font-heading select-none shrink-0 -mt-2 transition-colors duration-300">
                  {step.number}
                </span>

                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-textLight dark:text-white mb-2 transition-colors duration-300">{step.title}</h3>
                  <p className="text-textLightMuted dark:text-textMuted text-[15px] leading-relaxed max-w-md transition-colors duration-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
