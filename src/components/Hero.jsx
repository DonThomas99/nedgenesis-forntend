import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiPlay } from 'react-icons/hi'
import { apiFetch } from '../lib/api'

const DEFAULTS = {
  line1: 'Building', line1_accent: 'Digital',
  line2: 'Futures That', line2_accent: 'Perform',
  subtitle: 'NEDGENESIS LLP delivers world-class web-app development and digital marketing solutions that help businesses scale, convert, and lead globally.',
  cta_primary: 'Start Your Project', cta_secondary: 'View Our Work',
  trust_text: '50+ clients trust us globally',
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const [hero, setHero] = useState(DEFAULTS)

  useEffect(() => {
    apiFetch('/api/hero').then(setHero).catch(console.error)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ng-accent/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ng-cyan/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ng-accent/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0BDA51 1px, transparent 1px), linear-gradient(90deg, #0BDA51 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto section-padding w-full pt-32 md:pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="section-label">Global Digital Agency</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight mt-2">
              {hero.line1}{' '}
              <span className="gradient-text">{hero.line1_accent}</span>
              <br />
              {hero.line2}{' '}
              <span className="gradient-text">{hero.line2_accent}</span>
            </motion.h1>

            <motion.p {...fadeUp(0.35)} className="section-subtitle mt-6">{hero.subtitle}</motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mt-10">
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                {hero.cta_primary} <HiArrowRight size={18} />
              </button>
              <button onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                <HiPlay size={18} /> {hero.cta_secondary}
              </button>
            </motion.div>

            <motion.div {...fadeUp(0.65)} className="flex items-center gap-6 mt-12 flex-wrap">
              <div className="flex -space-x-3">
                {['#0BDA51', '#4ade80', '#86efac', '#34d399'].map((color, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-ng-dark flex items-center justify-center text-xs font-bold" style={{ background: color }}>
                    {['A', 'B', 'C', 'D'][i]}
                  </div>
                ))}
              </div>
              <p className="text-ng-text text-sm">
                <span className="text-white font-semibold">{hero.trust_text}</span>
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block">
            <div className="relative">
              <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="card p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-ng-text text-xs ml-2">nedgenesis.com</span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-ng-border rounded-full w-3/4" /><div className="h-3 bg-ng-border rounded-full w-1/2" />
                  <div className="h-3 bg-gradient-to-r from-ng-accent to-ng-cyan rounded-full w-5/6" /><div className="h-3 bg-ng-border rounded-full w-2/3" />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-ng-border/50 rounded-xl p-4"><p className="text-2xl font-black text-white">50+</p><p className="text-ng-text text-xs mt-1">Projects Done</p></div>
                  <div className="bg-ng-border/50 rounded-xl p-4"><p className="text-2xl font-black gradient-text">98%</p><p className="text-ng-text text-xs mt-1">Client Satisfaction</p></div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute -top-6 -right-6 card px-4 py-3 z-20">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /><span className="text-xs font-semibold text-white">Live Projects</span></div>
                <p className="text-2xl font-black gradient-text mt-1">12</p>
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute -bottom-4 -left-6 card px-4 py-3 z-20">
                <p className="text-xs text-ng-text">Countries Served</p><p className="text-2xl font-black text-white mt-1">10+</p>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-ng-accent/10 to-ng-cyan/10 rounded-2xl blur-2xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-ng-text text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-0.5 h-8 bg-gradient-to-b from-ng-accent to-transparent" />
      </motion.div>
    </section>
  )
}
