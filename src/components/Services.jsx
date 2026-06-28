import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HiCode, HiChartBar, HiDeviceMobile, HiGlobe,
  HiTrendingUp, HiMail, HiSearch, HiStar,
} from 'react-icons/hi'

const SERVICES = [
  {
    icon: HiCode,
    tag: 'Development',
    title: 'Web & App Development',
    description:
      'We craft high-performance, scalable web applications tailored to your business goals — from elegant landing pages to complex SaaS platforms.',
    features: [
      { icon: HiDeviceMobile, text: 'Responsive Web Applications' },
      { icon: HiGlobe, text: 'Full-Stack Development' },
      { icon: HiCode, text: 'API Design & Integration' },
      { icon: HiStar, text: 'UI/UX Design & Prototyping' },
    ],
    gradient: 'from-ng-accent to-purple-600',
    glow: 'ng-accent',
  },
  {
    icon: HiChartBar,
    tag: 'Marketing',
    title: 'Digital Marketing',
    description:
      'Data-driven digital marketing strategies that amplify your brand presence, drive qualified traffic, and convert visitors into loyal customers.',
    features: [
      { icon: HiSearch, text: 'SEO & Content Strategy' },
      { icon: HiTrendingUp, text: 'Performance & Paid Ads' },
      { icon: HiMail, text: 'Email Marketing Campaigns' },
      { icon: HiChartBar, text: 'Analytics & Growth Reports' },
    ],
    gradient: 'from-ng-cyan to-blue-500',
    glow: 'ng-cyan',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            End-to-end digital solutions built to help your business grow faster and smarter.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="card p-8 group hover:border-ng-accent/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 50%, rgba(108,99,255,0.08) 0%, transparent 70%)` }}
                />

                {/* Icon + Tag */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-[14px] bg-ng-card flex items-center justify-center">
                      <Icon size={26} className="text-white" />
                    </div>
                  </div>
                  <span className={`text-xs font-semibold tracking-widest uppercase bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-ng-text leading-relaxed mb-8">{service.description}</p>

                {/* Feature List */}
                <ul className="space-y-3">
                  {service.features.map((feat) => {
                    const FIcon = feat.icon
                    return (
                      <li key={feat.text} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}
                          style={{ background: 'rgba(108,99,255,0.12)' }}>
                          <FIcon size={15} className="text-ng-accent" />
                        </div>
                        <span className="text-ng-text text-sm">{feat.text}</span>
                      </li>
                    )
                  })}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-8 btn-outline text-sm w-full justify-center"
                >
                  Get Started
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
