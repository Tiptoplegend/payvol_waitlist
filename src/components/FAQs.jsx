import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is PayVol?',
    a: 'PayVol is an all-in-one finance app designed to make managing money effortless. From seamless payments and money transfers to virtual cards and budgeting tools, PayVol gives you full control of your finances in one place.',
  },
  {
    q: 'When will PayVol launch?',
    a: 'We are currently in the final stages of development and will be launching soon. Join our waitlist to be among the first to get access and receive exclusive early-bird benefits when we go live.',
  },
  {
    q: 'Is my money safe with PayVol?',
    a: 'Absolutely. PayVol uses bank-level encryption, two-factor authentication (2FA), and real-time fraud monitoring to ensure your funds and personal data are always protected.',
  },
  {
    q: 'What countries will PayVol support?',
    a: 'PayVol is initially launching in Ghana and will expand to other African markets and beyond. We are building infrastructure to support cross-border payments across multiple currencies.',
  },
  {
    q: 'Can I send money internationally with PayVol?',
    a: 'Yes. PayVol is built with cross-border transfers in mind, allowing you to send and receive money across borders quickly, securely, and at competitive rates.',
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = i => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section id="faqs" className="py-28 bg-bgLightCard dark:bg-bgCard transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Support</span>
            <h2 className="section-heading">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`border-b border-black/[0.06] dark:border-white/[0.06] ${i === 0 ? 'border-t' : ''} transition-colors duration-300`}
                >
                  <button
                    className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
                    onClick={() => toggle(i)}
                  >
                    <span className="text-[15px] font-semibold text-textLight dark:text-white pr-8 group-hover:text-primary transition-colors duration-200">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-black/30 dark:text-white/30 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-60 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-textLightMuted dark:text-textMuted leading-relaxed text-sm pr-12 transition-colors duration-300">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
