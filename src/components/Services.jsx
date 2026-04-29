import { Send, CreditCard, BarChart2, ShieldCheck, Bitcoin } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Send,
    title: 'Send & Receive Money',
    desc: 'Transfer money instantly to anyone, anywhere with low fees and top security.',
  },
  {
    icon: CreditCard,
    title: 'Virtual & Physical Cards',
    desc: 'We Offer virtual and physical cards for online shopping and subscriptions.',
  },
  {
    icon: Bitcoin,
    title: 'Crypto Access',
    desc: 'Buy, sell, and manage crypto assets seamlessly alongside your everyday finances.',
  },
  {
    icon: BarChart2,
    title: 'Track & Manage',
    desc: 'Monitor your spending, set budgets, and take control of your finances.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    desc: 'Bank-level security to keep your money\nand data always protected.',
  },
]

export default function Services() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="inline-flex w-fit py-1.5 px-4 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-200" style={{ background: 'linear-gradient(135deg, rgba(1,28,97,0.08) 0%, rgba(93,135,255,0.12) 100%)', color: '#011c61' }}>
            ALL IN ONE FINANCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 leading-snug">
            Everything you need in<br />one powerful app
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx} 
              className={`text-center flex flex-col items-center gap-4 group cursor-pointer ${idx === services.length - 1 ? 'lg:col-start-2 lg:col-span-2' : ''}`}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 group-hover:bg-blue-50 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(1,28,97,0.08)] transition-all duration-300">
                <Icon className="h-8 w-8 text-dark group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-dark">{title}</h3>
              <p className="text-sm text-muted leading-6 whitespace-pre-line">{desc}</p>
            </motion.div>
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
