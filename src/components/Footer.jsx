import { Link } from 'react-router-dom'
import { FaTiktok, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-[#050B17] border-t border-black/[0.06] dark:border-borderDark text-textLight dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Left: Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img src="/assets/images/PV-logo.png" alt="PayVol" className="h-10 w-auto dark:brightness-0 dark:invert transition-all duration-300" />
            </div>
            <p className="text-textLightMuted dark:text-textMuted text-sm leading-relaxed max-w-[280px] transition-colors duration-300">
              One App. Endless Possibilities.
            </p>
          </div>

          {/* Center: Contact */}
          <div className="md:col-span-4 flex md:justify-center">
            <div>
              <h4 className="text-textLight dark:text-white font-bold mb-6 text-sm tracking-wide transition-colors duration-300">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-textLightMuted dark:text-textMuted text-sm transition-colors duration-300">
                  <svg className="w-4 h-4 text-textLightMuted dark:text-textMuted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <a href="mailto:hello@payvol.app" className="hover:text-textLight dark:hover:text-white transition-colors duration-200">hello@payvol.app</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Links & Socials */}
          <div className="md:col-span-4 flex flex-col md:items-end">
            <div className="mb-8">
              <h4 className="text-textLight dark:text-white font-bold mb-6 text-sm tracking-wide md:text-right transition-colors duration-300">Links</h4>
              <ul className="space-y-3 md:text-right">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Features', href: '#features' },
                  { label: 'FAQ', href: '#faqs' },
                ].map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-textLightMuted dark:text-textMuted text-sm hover:text-textLight dark:hover:text-white transition-colors duration-200">{l.label}</a>
                  </li>
                ))}
                <li>
                  <Link to="/legal/privacy" className="text-textLightMuted dark:text-textMuted text-sm hover:text-textLight dark:hover:text-white transition-colors duration-200">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="text-textLightMuted dark:text-textMuted text-sm hover:text-textLight dark:hover:text-white transition-colors duration-200">Terms of Service</Link>
                </li>
              </ul>
            </div>

            <div className="flex gap-5 mt-4">
              {[
                { label: 'TikTok', Icon: FaTiktok, href: 'https://tiktok.com/@payvolhq' },
                { label: 'Instagram', Icon: FaInstagram, href: 'https://instagram.com/payvolhq' },
                { label: 'LinkedIn', Icon: FaLinkedin, href: 'https://linkedin.com/company/payvolhq' },
                { label: 'X', Icon: FaXTwitter, href: 'https://x.com/payvolhq' },
              ].map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-textLightMuted dark:text-textMuted hover:text-textLight dark:hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-black/[0.06] dark:border-borderDark mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300">
          <p className="text-textLightMuted dark:text-textMuted text-sm transition-colors duration-300">© {year} PayVol. All rights reserved.</p>
          <p className="text-textLightMuted dark:text-textMuted text-sm transition-colors duration-300">Designed with ♥ in Accra</p>
        </div>
      </div>
    </footer>
  )
}
