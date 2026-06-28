import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'

// Replace these with real brand data when ready
const BRANDS = [
  { name: 'TechNova', url: 'https://example.com', bg: '#1a1f35', color: '#6c63ff' },
  { name: 'Pixelwave', url: 'https://example.com', bg: '#0d1f1a', color: '#00d4ff' },
  { name: 'CloudMesh', url: 'https://example.com', bg: '#1f1a0d', color: '#f59e0b' },
  { name: 'BrandForge', url: 'https://example.com', bg: '#1f0d1a', color: '#ec4899' },
  { name: 'DataPulse', url: 'https://example.com', bg: '#0d1a1f', color: '#34d399' },
  { name: 'SwiftApps', url: 'https://example.com', bg: '#1a0d0d', color: '#f87171' },
  { name: 'DigitalEdge', url: 'https://example.com', bg: '#1a1a0d', color: '#a78bfa' },
  { name: 'NextGenSys', url: 'https://example.com', bg: '#0d0d1f', color: '#60a5fa' },
]

// Duplicate for seamless infinite loop
const CAROUSEL_ITEMS = [...BRANDS, ...BRANDS]

function BrandCard({ brand }) {
  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-44 h-28 rounded-2xl border border-ng-border flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:border-opacity-80 hover:scale-105 hover:shadow-xl relative overflow-hidden mx-3"
      style={{ background: brand.bg, borderColor: brand.color + '30' }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"
        style={{ background: `radial-gradient(circle at center, ${brand.color}, transparent 70%)` }}
      />

      {/* Logo placeholder — replace with <img> when you have real logos */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg relative z-10"
        style={{ background: brand.color + '20', color: brand.color }}
      >
        {brand.name.slice(0, 2).toUpperCase()}
      </div>

      <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors relative z-10">
        {brand.name}
      </span>

      <HiExternalLink
        size={12}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-60 transition-opacity"
        style={{ color: brand.color }}
      />
    </a>
  )
}

export default function BrandsCarousel() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const trackRef = useRef(null)

  const pauseCarousel = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
  }
  const resumeCarousel = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
  }

  return (
    <section id="portfolio" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">
            Brands We've <span className="gradient-text">Worked With</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Trusted by forward-thinking businesses worldwide. Click any card to visit their site.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
          onMouseEnter={pauseCarousel}
          onMouseLeave={resumeCarousel}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #07090f, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #07090f, transparent)' }} />

          <div
            ref={trackRef}
            className="flex animate-marquee py-4"
            style={{ width: 'max-content' }}
          >
            {CAROUSEL_ITEMS.map((brand, i) => (
              <BrandCard key={`${brand.name}-${i}`} brand={brand} />
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-ng-text text-sm mt-6"
        >
          Hover to pause · Click a card to visit the brand
        </motion.p>
      </div>
    </section>
  )
}
