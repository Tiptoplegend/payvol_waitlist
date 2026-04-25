import { Send, CreditCard, BarChart2, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Send,
    title: 'Send & Receive Money',
    desc: 'Transfer money instantly to anyone, anywhere with low fees and top security.',
  },
  {
    icon: CreditCard,
    title: 'Virtual Cards',
    desc: 'Create virtual cards for online shopping and subscriptions.',
  },
  {
    icon: BarChart2,
    title: 'Track & Manage',
    desc: 'Monitor your spending, set budgets, and take control of your finances.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    desc: 'Bank-level security to keep your money and data always protected.',
  },
]

export default function Services() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex w-fit py-1.5 px-4 text-sm font-medium rounded-full border border-blue-200" style={{ background: 'linear-gradient(135deg, rgba(1,28,97,0.08) 0%, rgba(93,135,255,0.12) 100%)', color: '#011c61' }}>
            ALL IN ONE FINANCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 leading-snug">
            Everything you need in<br />one powerful app
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <div key={idx} className="text-center flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
                <Icon className="h-8 w-8 text-dark" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-dark">{title}</h3>
              <p className="text-sm text-muted leading-6">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a
            href="#features"
            className="py-3 px-8 rounded-md border border-gray-300 text-base font-medium text-dark hover:border-primary hover:text-primary transition-all duration-300"
          >
            See All Features
          </a>
        </div>
      </div>
    </section>
  )
}
