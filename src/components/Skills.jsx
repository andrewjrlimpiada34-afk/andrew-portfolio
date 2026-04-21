import { useState } from 'react'
import { motion } from 'framer-motion'
import skills from '../data/skills.js'
import SkillModal from './SkillModal.jsx'

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill)
    setModalOpen(true)
  }

  return (
    <>
      <section id="skills" className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-glass backdrop-blur-xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">My Skills</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Click any skill to learn more. A curated skillset focused on engineering robust experiences, modern interfaces, and developer-first performance.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <motion.button
              key={skill.name}
              onClick={() => handleSkillClick(skill)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/15 backdrop-blur-2xl text-left transition hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{skill.name}</h3>
                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">{skill.level}</p>
                </div>
                <span className="rounded-3xl bg-cyan-500/10 px-2 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200 whitespace-nowrap">
                  {skill.category}
                </span>
              </div>
              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: skill.progress }} />
              </div>
            </motion.button>
          ))}
        </div>
      </section>
      <SkillModal skill={selectedSkill} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
