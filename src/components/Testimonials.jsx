import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'
import { apiFetch } from '../lib/api'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiFetch('/api/testimonials')
      .then(setTestimonials)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="testimonials" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ng-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="section-subtitle mx-auto text-center">Real results, real relationships. Here's what the teams we've worked with have to say.</p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => <div key={i} className="card p-6 animate-pulse h-56" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t._id} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="card p-6 flex flex-col gap-4 hover:border-ng-accent/30 transition-all duration-300 group">
                <FaQuoteLeft size={20} className="text-ng-accent/40 group-hover:text-ng-accent/70 transition-colors" />
                <p className="text-ng-text leading-relaxed text-sm flex-1">"{t.text}"</p>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => <HiStar key={si} size={14} style={{ color: t.color }} />)}
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-ng-border">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: t.color + '30', border: `1px solid ${t.color}50`, color: t.color }}>
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
        )}
      </div>
    </section>
  )
}
