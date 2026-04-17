import { motion } from 'framer-motion'
import milestones from '../data/milestones.js'

export default function Milestones() {
  return (
    <section id="milestones" className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-glass backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">Milestones</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            A timeline of achievements, learning moments, and milestones that shape how I work today.
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        {milestones.map((item, index) => (
          <motion.article
            key={item.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-panel rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/15 backdrop-blur-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-400">{item.description}</p>
              </div>
              <span className="rounded-3xl bg-violet-500/15 px-4 py-2 text-sm text-violet-200">
                {item.year}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
