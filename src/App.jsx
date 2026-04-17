import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Hobbies from './components/Hobbies.jsx'
import Milestones from './components/Milestones.jsx'
import Contact from './components/Contact.jsx'
import Loader from './components/Loader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BinaryRain from './components/BinaryRain.jsx'

function AppContent() {
  const { theme } = useTheme()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), 900)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 transition-colors duration-500">
      <ScrollProgress />
      {theme === 'binary' && <BinaryRain />}
      <Navbar />
      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <AnimatePresence>{!loaded && <Loader key="loader" />}</AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 16 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={loaded ? 'space-y-24' : 'pointer-events-none opacity-0'}
        >
          <Hero />
          <section id="about" className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/50 p-6 shadow-glass backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">More About Me</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                I build modern web experiences as a Computer Engineer with a polished, minimalist aesthetic. My focus is on clean UI, smooth motion, and polished interactions that feel fast and intentional.
              </p>
            </motion.div>
          </section>
          <Skills />
          <Hobbies />
          <Milestones />
          <Projects />
          <Contact />
        </motion.div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
