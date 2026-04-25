import { Mail, Bell, Smartphone } from 'lucide-react'

const steps = [
  {
    icon: Mail,
    number: '01',
    title: 'Join the Waitlist',
    desc: 'Enter your email and be among the first to access PayVol.',
  },
  {
    icon: Bell,
    number: '02',
    title: 'Get Notified',
    desc: "We'll notify you when PayVol is ready for early access.",
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'Experience PayVol',
    desc: 'Enjoy seamless payments, smart features, and total financial freedom.',
  },
]

export default function HowItWorks() {
  return (
    <section id="security" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex w-fit py-1.5 px-4 text-sm font-medium rounded-full border border-blue-200" style={{ background: 'linear-gradient(135deg, rgba(1,28,97,0.08) 0%, rgba(93,135,255,0.12) 100%)', color: '#011c61' }}>
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3">
            Simple, fast, and secure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {steps.map(({ icon: Icon, number, title, desc }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full border-t-2 border-dashed border-gray-200 z-0" />
              )}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-dark" strokeWidth={1.5} />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {number}
                </span>
              </div>
              <h3 className="text-base font-bold text-dark mt-3">{title}</h3>
              <p className="text-sm text-muted mt-2 max-w-[200px]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
