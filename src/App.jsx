import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import BrandsCarousel from './components/BrandsCarousel'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Socials from './components/Socials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-ng-dark text-white font-sans overflow-x-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0d1220',
            color: '#fff',
            border: '1px solid #1a2540',
            borderRadius: '12px',
          },
          success: { iconTheme: { primary: '#6c63ff', secondary: '#fff' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <BrandsCarousel />
        <Testimonials />
        <Contact />
        <Socials />
      </main>
      <Footer />
    </div>
  )
}
