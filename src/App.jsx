import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'
import Stats from './components/Stats'
import Footer from './components/Footer'
import FallingLeaves from './components/FallingLeaves'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { projects } from './data/content'

const defaultDescription = 'Building, architecting, and automating. ✨'

const pageMeta = {
  '/': {
    title: 'Zoe Liang, Senior Data Platform Engineer',
    description: defaultDescription,
  },
  '/experience': {
    title: 'Experience - Zoe Liang',
    description: 'Work experience across the modern data stack, from founding data hire to senior platform engineer.',
  },
  '/skills': {
    title: 'Skills - Zoe Liang',
    description: 'Technical skills in data platforms, orchestration, BI, observability, and AI/LLM engineering.',
  },
  '/projects': {
    title: 'Projects - Zoe Liang',
    description: 'Featured projects including AI data chatbot, context engineering, CI/CD pipelines, and Snowflake optimization.',
  },
}

// Build project detail meta from data
projects.forEach((p) => {
  pageMeta[`/projects/${p.slug}`] = {
    title: `${p.title} - Zoe Liang`,
    description: p.description,
  }
})

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const meta = pageMeta[pathname] || { title: 'Zoe Liang, Senior Data Platform Engineer', description: defaultDescription }
    document.title = meta.title

    // Update meta description
    const descTag = document.querySelector('meta[name="description"]')
    if (descTag) descTag.setAttribute('content', meta.description)

    // Update Open Graph tags
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)

    // Update Twitter tags
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', meta.description)
    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', meta.title)

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
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </BrowserRouter>
  )
}
