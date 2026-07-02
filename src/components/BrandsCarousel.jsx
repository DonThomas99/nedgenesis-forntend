import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { apiFetch } from '../lib/api'

function BrandCard({ brand }) {
  return (
    <a href={brand.url} target="_blank" rel="noopener noreferrer"
      className="group flex-shrink-0 w-44 h-28 rounded-2xl border border-ng-border flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden mx-3"
      style={{ background: brand.bg, borderColor: brand.color + '30' }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" style={{ background: `radial-gradient(circle at center, ${brand.color}, transparent 70%)` }} />
      {brand.logo_url ? (
        <img src={brand.logo_url} alt={brand.name} className="w-12 h-12 object-contain relative z-10" />
      ) : (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg relative z-10" style={{ background: brand.color + '20', color: brand.color }}>
          {brand.name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors relative z-10">{brand.name}</span>
      <HiExternalLink size={12} className="absolute top-3 right-3 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: brand.color }} />
    </a>
  )
}

export default function BrandsCarousel() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [brands, setBrands] = useState([])

  useEffect(() => {
    apiFetch('/api/brands').then(setBrands).catch(console.error)
  }, [])

  const items = [...brands, ...brands]

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }

  return (
    <section id="portfolio" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">Brands We've <span className="gradient-text">Worked With</span></h2>
          <p className="section-subtitle mx-auto text-center">Trusted by forward-thinking businesses worldwide. Click any card to visit their site.</p>
        </motion.div>

        {brands.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="relative overflow-hidden" onMouseEnter={pause} onMouseLeave={resume}>
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, rgb(var(--ng-page-rgb)), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, rgb(var(--ng-page-rgb)), transparent)' }} />
            <div ref={trackRef} className="flex animate-marquee py-4" style={{ width: 'max-content' }}>
              {items.map((brand, i) => <BrandCard key={`${brand._id}-${i}`} brand={brand} />)}
            </div>
          </motion.div>
        )}

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="text-center text-ng-page-muted text-sm mt-6">
          Hover to pause · Click a card to visit the brand
        </motion.p>
      </div>
    </section>
  )
}
