import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa6'
import { apiFetch } from '../lib/api'

const PLATFORM_CONFIG = {
  'LinkedIn':    { icon: FaLinkedinIn, color: '#0A66C2', bg: '#0A66C215' },
  'Instagram':   { icon: FaInstagram,  color: '#E1306C', bg: '#E1306C15' },
  'X (Twitter)': { icon: FaXTwitter,   color: '#ffffff', bg: '#ffffff10' },
  'Facebook':    { icon: FaFacebookF,  color: '#1877F2', bg: '#1877F215' },
  'WhatsApp':    { icon: FaWhatsapp,   color: '#25D366', bg: '#25D36615' },
}

export default function Socials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [socials, setSocials] = useState([])

  useEffect(() => {
    apiFetch('/api/socials').then(setSocials).catch(console.error)
  }, [])

  return (
    <section id="socials" ref={ref} className="section-padding relative overflow-hidden border-t border-ng-border">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ng-accent/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-label">Stay Connected</span>
          <h2 className="section-title">Find Us <span className="gradient-text">Everywhere</span></h2>
          <p className="section-subtitle mx-auto text-center">Follow our journey, get updates, and reach out on your preferred platform.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {socials.map((social, i) => {
            const cfg = PLATFORM_CONFIG[social.platform] || { icon: FaLinkedinIn, color: '#0BDA51', bg: '#0BDA5115' }
            const Icon = cfg.icon
            return (
              <motion.a key={social._id} href={social.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 flex flex-col items-center text-center gap-4 group hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ borderColor: cfg.color + '25' }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: cfg.bg, border: `1px solid ${cfg.color}30` }}>
                  <Icon size={24} style={{ color: cfg.color }} />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{social.platform}</p>
                  <p className="text-ng-text text-xs mt-1 leading-relaxed">{social.description}</p>
                </div>
                <span className="text-xs font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: cfg.color }}>Follow →</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
