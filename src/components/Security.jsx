import { Lock, ShieldCheck, Fingerprint, CloudUpload } from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: 'End-to-end Encryption',
    desc: 'Your data is encrypted and secure at all times.',
  },
  {
    icon: ShieldCheck,
    title: 'PCI DSS Compliant',
    desc: 'We follow global standards for payment card security.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Protection',
    desc: 'Secure access using fingerprint and face recognition.',
  },
  {
    icon: CloudUpload,
    title: 'Secure Cloud Backup',
    desc: 'Your data is safely backed up and always protected.',
  },
]

export default function Security() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex w-fit py-1.5 px-4 text-sm font-medium rounded-full border border-blue-200" style={{ background: 'linear-gradient(135deg, rgba(1,28,97,0.08) 0%, rgba(93,135,255,0.12) 100%)', color: '#011c61' }}>
            SECURITY YOU CAN TRUST
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3">
            Your security is our priority
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center">
                <Icon className="w-7 h-7 text-dark" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-dark">{title}</h3>
              <p className="text-sm text-muted leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
