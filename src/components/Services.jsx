import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCode, HiChartBar, HiDeviceMobile, HiGlobe, HiTrendingUp, HiMail, HiSearch, HiStar } from 'react-icons/hi'
import { apiFetch } from '../lib/api'

const ICON_MAP = { HiCode, HiChartBar, HiDeviceMobile, HiGlobe, HiTrendingUp, HiMail, HiSearch, HiStar }
const GRADIENTS = ['from-ng-accent to-emerald-700', 'from-ng-cyan to-emerald-400']

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiFetch('/api/services')
      .then(setServices)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Services That <span className="gradient-text">Drive Results</span></h2>
          <p className="section-subtitle mx-auto text-center">End-to-end digital solutions built to help your business grow faster and smarter.</p>
        </motion.div>

        {loading ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {[0, 1].map(i => <div key={i} className="card p-8 animate-pulse h-80" />)}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const gradient = service.gradient || GRADIENTS[i % GRADIENTS.length]
              return (
                <motion.div key={service._id} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }} className="card p-8 group hover:border-ng-accent/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(108,99,255,0.08) 0%, transparent 70%)' }} />
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} p-0.5`}>
                      <div className="w-full h-full rounded-[14px] bg-ng-card flex items-center justify-center">
                        <HiCode size={26} className="text-white" />
                      </div>
                    </div>
                    <span className={`text-xs font-semibold tracking-widest uppercase bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{service.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-ng-text leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features?.map((feat, fi) => {
                      const FIcon = ICON_MAP[feat.icon] || HiCode
                      return (
                        <li key={fi} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(108,99,255,0.12)' }}>
                            <FIcon size={15} className="text-ng-accent" />
                          </div>
                          <span className="text-ng-text text-sm">{feat.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                  <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 btn-outline text-sm w-full justify-center">Get Started</button>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
