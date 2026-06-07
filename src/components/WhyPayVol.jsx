const benefits = [
  {
    title: 'Unified Financial Hub',
    desc: 'Payments, cards, crypto, and insights — everything lives in one platform.',
  },
  {
    title: 'Simple & Secure',
    desc: 'Modern UX backed by bank-level encryption and real-time fraud monitoring.',
  },
  {
    title: 'Financial Insights',
    desc: 'Track spending patterns and build healthier financial habits automatically.',
  },
  {
    title: 'Crypto Accessibility',
    desc: 'Bridge digital assets and everyday spending without the complexity.',
  },
  {
    title: 'Family & Student Accounts',
    desc: 'Set up managed accounts for children and students with spending controls.',
  },
]

export default function WhyPayVol() {
  return (
    <section id="about" className="py-28 bg-bgLightCard dark:bg-bgCard transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Copy */}
          <div>
            <span className="section-label">Why PayVol</span>
            <h2 className="section-heading mb-6">
              More Than<br />Payments
            </h2>
            <p className="text-lg text-textLightMuted dark:text-textMuted leading-relaxed max-w-lg transition-colors duration-300">
              Most financial products focus on moving money. PayVol helps people manage money better — through payments, cards, crypto accessibility, and financial insights, all in one place.
            </p>
          </div>

          {/* Right — Benefits list, typography-driven */}
          <div className="flex flex-col">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-5 py-6 ${
                  idx !== benefits.length - 1 ? 'border-b border-black/[0.06] dark:border-white/[0.06]' : ''
                }`}
              >
                {/* Minimal accent dash instead of icon-in-box */}
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <div>
                  <h4 className="text-base font-semibold text-textLight dark:text-white mb-1 transition-colors duration-300">{benefit.title}</h4>
                  <p className="text-sm text-textLightMuted dark:text-textMuted leading-relaxed transition-colors duration-300">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
