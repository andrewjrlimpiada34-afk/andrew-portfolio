import { motion } from 'framer-motion'
import skills from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-glass backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">My Skills</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            A curated skillset focused on engineering robust experiences, modern interfaces, and developer-first performance.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <motion.article
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/15 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{skill.level}</p>
              </div>
              <span className="rounded-3xl bg-cyan-500/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
                {skill.category}
              </span>
            </div>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: skill.progress }} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
