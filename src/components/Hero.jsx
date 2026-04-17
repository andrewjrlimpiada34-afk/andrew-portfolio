import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const buttonVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.4 } }),
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 shadow-glass backdrop-blur-xl sm:p-12">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/70 to-transparent opacity-80" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium tracking-wide text-cyan-200 shadow-[0_0_0_1px_rgba(56,189,248,0.12)]">
            <Sparkles size={16} /> Modern minimalist developer portfolio
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Hello World! I am Andrew B. Limpiada Jr. <span className="text-cyan-300">- a Computer Engineer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="mt-6 max-w-2xl text-slate-300 sm:text-lg"
        >
          I design polished web applications with motion, thoughtful detail, and performant experiences. Explore my work, interact with the hobby game, and let’s connect.
        </motion.p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {[
            { label: 'View My Projects', href: '#projects' },
            { label: 'Play Guess My Hobby', href: '#hobbies' },
            { label: "Let's Connect", href: '#contact' },
          ].map((button, index) => (
            <motion.a
              key={button.label}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              href={button.href}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-3xl bg-slate-800/90 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:bg-cyan-500/95 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <span>{button.label}</span>
              <ArrowRight className="ml-3 h-4 w-4" />
              <span className="pulse-ring" aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
