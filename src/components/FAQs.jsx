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
    <section id="FAQs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-flex w-fit py-1.5 px-4 text-sm font-medium rounded-full border border-blue-200" style={{ background: 'linear-gradient(135deg, rgba(1,28,97,0.08) 0%, rgba(93,135,255,0.12) 100%)', color: '#011c61' }}>FAQs</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 bg-white rounded-xl divide-y divide-gray-200 shadow-sm">
          {faqs.map((faq, i) => (
            <div key={i} className="overflow-hidden">
              <button
                className="flex justify-between items-center px-5 py-4 w-full font-semibold text-lg text-left gap-4"
                onClick={() => toggle(i)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-muted text-base font-normal">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
