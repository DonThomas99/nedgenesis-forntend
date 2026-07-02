import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { apiFetch } from '../lib/api'

const DEFAULTS = [
  { value: 50, suffix: '+', label: 'Projects Completed', description: 'Delivered across industries worldwide' },
  { value: 12, suffix: '',  label: 'Ongoing Projects',   description: 'Currently in active development' },
  { value: 30, suffix: '+', label: 'Happy Clients',      description: 'Long-term partnerships built on trust' },
  { value: 10, suffix: '+', label: 'Countries Served',   description: 'Truly global digital reach' },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / (1800 / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [active, target])
  return <span>{count}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [stats, setStats] = useState(DEFAULTS)

  useEffect(() => {
    apiFetch('/api/stats').then(data => { if (data.length) setStats(data) }).catch(console.error)
  }, [])

  return (
    <section ref={ref} className="relative py-16 border-y border-ng-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ng-accent/5 via-transparent to-ng-cyan/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-ng-border">
          {stats.map((stat, i) => (
            <motion.div key={stat._id || stat.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center lg:px-8 py-4">
              <p className="text-4xl md:text-5xl font-black gradient-text leading-none">
                <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="text-ng-page-text font-semibold mt-3">{stat.label}</p>
              <p className="text-ng-page-muted text-sm mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
