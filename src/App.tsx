import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'
import { Timeline } from './sections/Timeline'
import { Achievements } from './sections/Achievements'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { useEffect } from 'react'

function DocumentMeta() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = t.meta.title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', t.meta.description)
  }, [t])

  return null
}

function Page() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <DocumentMeta />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Timeline />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Page />
      </LanguageProvider>
    </ThemeProvider>
  )
}
