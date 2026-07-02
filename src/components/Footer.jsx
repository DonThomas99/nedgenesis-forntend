import { FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF } from 'react-icons/fa6'
import { HiArrowUp } from 'react-icons/hi'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const SERVICE_LINKS = [
  'Web App Development',
  'Digital Marketing',
  'UI/UX Design',
  'SEO & Content',
  'Paid Advertising',
]

const SOCIAL_LINKS = [
  { icon: FaLinkedinIn, href: 'https://linkedin.com/company/nedgenesis', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com/nedgenesis', label: 'Instagram' },
  { icon: FaXTwitter, href: 'https://x.com/nedgenesis', label: 'X' },
  { icon: FaFacebookF, href: 'https://facebook.com/nedgenesis', label: 'Facebook' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-ng-border bg-ng-footer transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ng-accent to-ng-cyan flex items-center justify-center">
                <span className="font-black text-white text-sm">N</span>
              </div>
              <span className="font-black text-lg tracking-tight">
                NED<span className="gradient-text">GENESIS</span>
              </span>
            </div>
            <p className="text-ng-page-muted text-sm leading-relaxed max-w-sm">
              NEDGENESIS LLP is a global digital agency specializing in web-app development
              and digital marketing services that help businesses grow and thrive online.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-ng-border hover:bg-ng-accent/20 flex items-center justify-center transition-colors group"
                  >
                    <Icon size={15} className="text-ng-text group-hover:text-ng-accent transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ng-page-text font-semibold text-sm mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-ng-page-muted hover:text-ng-page-text text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-ng-page-text font-semibold text-sm mb-4 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-ng-page-muted hover:text-ng-page-text text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-ng-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ng-page-muted text-sm">
            © {new Date().getFullYear()} NEDGENESIS LLP. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-ng-page-muted hover:text-ng-page-text text-sm transition-colors group"
          >
            Back to top
            <div className="w-7 h-7 rounded-lg border border-ng-border group-hover:border-ng-accent flex items-center justify-center transition-colors">
              <HiArrowUp size={13} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
