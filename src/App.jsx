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
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="bg-ng-page text-ng-page-text font-sans overflow-x-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0d1220',
            color: '#fff',
            border: '1px solid #1a2540',
            borderRadius: '12px',
          },
          success: { iconTheme: { primary: '#0BDA51', secondary: '#fff' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
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
