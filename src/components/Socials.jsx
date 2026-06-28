import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa6'

// Update these URLs with actual social profile links
const SOCIALS = [
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    url: 'https://linkedin.com/company/nedgenesis',
    color: '#0A66C2',
    bg: '#0A66C215',
    description: 'Follow us for industry insights and updates',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/nedgenesis',
    color: '#E1306C',
    bg: '#E1306C15',
    description: 'Behind the scenes & creative showcases',
  },
  {
    name: 'X (Twitter)',
    icon: FaXTwitter,
    url: 'https://x.com/nedgenesis',
    color: '#ffffff',
    bg: '#ffffff10',
    description: 'Quick updates, thoughts & announcements',
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: 'https://facebook.com/nedgenesis',
    color: '#1877F2',
    bg: '#1877F215',
    description: 'Community, stories and project launches',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/91XXXXXXXXXX',
    color: '#25D366',
    bg: '#25D36615',
    description: 'Quick chat for fast project queries',
  },
]

export default function Socials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="socials" ref={ref} className="section-padding relative overflow-hidden border-t border-ng-border">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ng-accent/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Stay Connected</span>
          <h2 className="section-title">
            Find Us <span className="gradient-text">Everywhere</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Follow our journey, get updates, and reach out on your preferred platform.
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SOCIALS.map((social, i) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 flex flex-col items-center text-center gap-4 group hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ borderColor: social.color + '25' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: social.bg, border: `1px solid ${social.color}30` }}
                >
                  <Icon size={24} style={{ color: social.color }} />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{social.name}</p>
                  <p className="text-ng-text text-xs mt-1 leading-relaxed">{social.description}</p>
                </div>
                <span
                  className="text-xs font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: social.color }}
                >
                  Follow →
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
