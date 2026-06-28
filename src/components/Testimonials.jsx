import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechNova Inc.',
    avatar: 'SM',
    color: '#6c63ff',
    rating: 5,
    text: 'NEDGENESIS transformed our digital presence completely. Their team delivered a stunning web application that exceeded our expectations — on time and within budget. Highly recommend!',
  },
  {
    name: 'Rahul Menon',
    role: 'Founder',
    company: 'SwiftApps',
    avatar: 'RM',
    color: '#00d4ff',
    rating: 5,
    text: 'The digital marketing strategy they built for us drove a 3x increase in organic traffic within 4 months. Their data-driven approach is unmatched.',
  },
  {
    name: 'Lisa Chen',
    role: 'Head of Product',
    company: 'CloudMesh',
    avatar: 'LC',
    color: '#34d399',
    rating: 5,
    text: 'Working with NEDGENESIS was seamless from day one. Their communication is excellent, the code quality is top-notch, and the team truly cares about delivering value.',
  },
  {
    name: 'James Okafor',
    role: 'Marketing Director',
    company: 'DigitalEdge',
    avatar: 'JO',
    color: '#f59e0b',
    rating: 5,
    text: 'Our e-commerce conversion rate went up by 40% after NEDGENESIS redesigned our platform and ran our ad campaigns. Exceptional work and great ROI.',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO',
    company: 'DataPulse',
    avatar: 'PS',
    color: '#ec4899',
    rating: 5,
    text: "They built our entire SaaS product from scratch — clean architecture, great performance. The team's technical expertise is genuinely impressive.",
  },
  {
    name: 'Tom Walters',
    role: 'COO',
    company: 'BrandForge',
    avatar: 'TW',
    color: '#a78bfa',
    rating: 5,
    text: "NEDGENESIS is our go-to partner for all digital needs. They've helped us launch 3 products and every single one has been a success. Truly a world-class team.",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ng-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real results, real relationships. Here's what the teams we've worked with have to say.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 flex flex-col gap-4 hover:border-ng-accent/30 transition-all duration-300 group"
            >
              <FaQuoteLeft size={20} className="text-ng-accent/40 group-hover:text-ng-accent/70 transition-colors" />

              <p className="text-ng-text leading-relaxed text-sm flex-1">"{t.text}"</p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <HiStar key={si} size={14} style={{ color: t.color }} />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-ng-border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: t.color + '30', border: `1px solid ${t.color}50`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-ng-text text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
