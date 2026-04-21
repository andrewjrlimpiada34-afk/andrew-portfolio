import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import hobbies from '../data/hobbies.js'
import HobbyModal from './HobbyModal.jsx'

export default function Hobbies() {
  const [selectedHobby, setSelectedHobby] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleHobbyClick = (hobby) => {
    setSelectedHobby(hobby)
    setModalOpen(true)
  }

  return (
    <>
      <section id="hobbies" className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-glass backdrop-blur-xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">My Hobbies</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Click any hobby to learn more. Activities that shape my creativity, discipline, and personal growth.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby) => (
            <motion.button
              key={hobby.id}
              onClick={() => handleHobbyClick(hobby)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-xl shadow-slate-950/15 backdrop-blur-2xl text-left transition hover:border-cyan-400/40"
            >
              <div className="space-y-3">
                <span className="inline-flex rounded-full bg-cyan-500/15 px-2 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
                  {hobby.tag}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">{hobby.title}</h3>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">{hobby.short}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>
      <HobbyModal hobby={selectedHobby} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}