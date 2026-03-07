import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Stats from './components/Stats'
import Footer from './components/Footer'
import FallingLeaves from './components/FallingLeaves'
import { Analytics } from '@vercel/analytics/react'

const pageTitles = {
  '/': 'Zoe Liang - Data Platform Engineer',
  '/experience': 'Experience - Zoe Liang',
  '/skills': 'Skills - Zoe Liang',
  '/projects': 'Projects - Zoe Liang',
  '/contact': 'Contact - Zoe Liang',
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = pageTitles[pathname] || 'Zoe Liang - Data Platform Engineer'
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function NotFound() {
  return (
    <div className="pt-28 pb-24 text-center">
      <h1 className="font-hand text-6xl font-medium text-gray-900 mb-4">404</h1>
      <p className="text-gray-500 text-lg mb-8">Ooops! Nothing to see here.</p>
      <a href="/" className="hover-squiggly text-gray-900 font-medium">
        Back to Home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <FallingLeaves />
        <Navbar />
        <ScrollManager />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<><Hero /><Stats /><About /></>} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  )
}
