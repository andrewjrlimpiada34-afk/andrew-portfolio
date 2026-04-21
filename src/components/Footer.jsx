import { Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import githubIcon from '../../img/github.png'
import linkedinIcon from '../../img/linkedin.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-12 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white">Andrew B. Limpiada Jr.</h3>
            <p className="mt-3 text-sm text-slate-400">Computer Engineer | Full-stack developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Navigation</h4>
            <ul className="mt-3 space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-slate-400 transition hover:text-cyan-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Connect</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                <img src={githubIcon} alt="GitHub" className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
              </a>
              <a
                href="mailto:andrew.limpiada@example.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sm:col-span-3 lg:col-span-1"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Built with</h4>
            <p className="mt-3 text-sm text-slate-400">React • Vite • Tailwind CSS • Framer Motion • GSAP</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-slate-400">
            © {currentYear} Andrew B. Limpiada Jr. — Building technology with impact.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
