export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-bg">
      <div className="container mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/assets/images/PV-logo.png" alt="PayVol" className="h-32 w-44 brightness-0 invert mb-4" />
            <p className="text-white/70 text-sm leading-6">Smarter payments.<br />Brighter future.</p>
            <div className="flex gap-3 mt-5">
              {[
                { label: 'Facebook', file: 'facebook.png', href: '#' },
                { label: 'X', file: 'X.png', href: 'https://x.com/PayVol' },
                { label: 'Instagram', file: 'instagram.png', href: 'https://www.instagram.com/payvolhq?igsh=d2g2OGRxN29iZmZ3' },
                { label: 'LinkedIn', file: 'in.png', href: '#' },
              ].map(({ label, file, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-all">
                  <img src={`/assets/images/${file}`} alt={label} className="w-9 h-9 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Features', 'Security', 'FAQs', 'Contact'].map(l => (
                <li key={l}><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map(l => (
                <li key={l}><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                hello@payvol.com
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +233 24 123 4567
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Accra, Ghana
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/50 text-sm">© {year} PayVol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
