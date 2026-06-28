import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const INFO_ITEMS = [
  {
    icon: HiMail,
    label: 'Email Us',
    value: 'donthomas20399@gmail.com',
    href: 'mailto:donthomas20399@gmail.com',
  },
  {
    icon: HiPhone,
    label: 'Call Us',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'India · Serving Globally',
    href: null,
  },
]

const QUERY_TYPES = [
  'Web Application Development',
  'Digital Marketing',
  'UI/UX Design',
  'SEO & Content',
  'Paid Advertising',
  'General Enquiry',
]

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    query_type: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.from_name || !form.from_email || !form.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error('Email service not configured yet. Please contact us directly.')
      return
    }

    setLoading(true)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      toast.success('Message sent! We\'ll get back to you soon.')
      setForm({ from_name: '', from_email: '', phone: '', query_type: '', message: '' })
    } catch {
      toast.error('Failed to send. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ng-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Tell us about your project and we'll get back to you with a tailored proposal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="card p-8">
              <h3 className="text-xl font-bold text-white mb-2">We'd love to hear from you</h3>
              <p className="text-ng-text text-sm leading-relaxed">
                Whether you need a new product built from scratch or want to supercharge your digital marketing — we're here to help. Fill out the form and our team will reach out within 24 hours.
              </p>

              <div className="mt-8 space-y-5">
                {INFO_ITEMS.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-ng-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-ng-accent" />
                      </div>
                      <div>
                        <p className="text-ng-text text-xs">{item.label}</p>
                        <p className="text-white text-sm font-medium mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>
            </div>

            <div className="card p-6 border-ng-accent/30">
              <p className="text-sm font-semibold text-white mb-1">Response time</p>
              <p className="text-ng-text text-sm">We typically respond within <span className="text-ng-accent font-semibold">24 hours</span> on business days.</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-ng-text mb-2 block">
                    Full Name <span className="text-ng-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-ng-dark border border-ng-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-ng-text/50 focus:outline-none focus:border-ng-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-ng-text mb-2 block">
                    Email Address <span className="text-ng-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full bg-ng-dark border border-ng-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-ng-text/50 focus:outline-none focus:border-ng-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-ng-text mb-2 block">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-ng-dark border border-ng-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-ng-text/50 focus:outline-none focus:border-ng-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-ng-text mb-2 block">Type of Query</label>
                  <select
                    name="query_type"
                    value={form.query_type}
                    onChange={handleChange}
                    className="w-full bg-ng-dark border border-ng-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-ng-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="text-ng-text">Select a service...</option>
                    {QUERY_TYPES.map((q) => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-ng-text mb-2 block">
                  Your Message <span className="text-ng-accent">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                  className="w-full bg-ng-dark border border-ng-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-ng-text/50 focus:outline-none focus:border-ng-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Send Message <HiArrowRight size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
