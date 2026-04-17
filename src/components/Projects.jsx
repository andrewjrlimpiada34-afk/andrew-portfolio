import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Folder, FolderOpen } from 'lucide-react'
import ProjectCard from './ProjectCard.jsx'
import projects from '../data/projects.js'

export default function Projects() {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const activeProject = projects[active]
  const total = projects.length
  const prevIndex = (active - 1 + total) % total
  const nextIndex = (active + 1) % total

  const highlightBackground = useMemo(
    () => ({
      backgroundImage: `radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 26%), radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.18), transparent 26%), linear-gradient(135deg, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.94))`,
    }),
    []
  )

  const handleNext = () => setActive((current) => (current + 1) % total)
  const handlePrev = () => setActive((current) => (current - 1 + total) % total)

  return (
    <section id="projects" className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-glass backdrop-blur-xl">
      <div className="relative overflow-hidden rounded-[2rem] p-6" style={highlightBackground}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.08),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.08),_transparent_24%)]" />
        <div className="relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Projects</h2>
              <p className="mt-2 max-w-2xl text-slate-300">
                Open the folder to explore my work. The active project is centered while neighbors stay blurred and darkened for a polished carousel feel.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="glass-panel inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-800/80 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:bg-slate-700/90"
            >
              {open ? <FolderOpen size={20} /> : <Folder size={20} />}
              {open ? 'Close folder' : 'Open projects folder'}
            </button>
          </div>

          <AnimatePresence>
            {!open ? (
              <motion.div
                key="folder-closed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="mt-12 flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-dashed border-white/15 bg-slate-950/80 p-12 text-center shadow-xl shadow-slate-950/20 backdrop-blur-2xl"
              >
                <Folder size={80} className="text-cyan-400" />
                <p className="max-w-2xl text-slate-300">
                  Click the folder to reveal all of my projects in a smooth, looping carousel.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="folder-open"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="mt-10"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-center">
                  <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
                    <motion.div
                      initial={{ opacity: 0.4, y: 20, scale: 0.95 }}
                      animate={{ opacity: 0.9, y: 0, scale: 0.96 }}
                      className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/10 backdrop-blur-2xl filter blur-sm brightness-90"
                    >
                      <ProjectCard project={projects[prevIndex]} variant="neighbor" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="glass-panel rounded-[2rem] border border-white/10 bg-slate-950/95 p-4 shadow-xl shadow-slate-950/20 backdrop-blur-2xl"
                    >
                      <ProjectCard project={activeProject} variant="active" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0.4, y: 20, scale: 0.95 }}
                      animate={{ opacity: 0.9, y: 0, scale: 0.96 }}
                      className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/10 backdrop-blur-2xl filter blur-sm brightness-90"
                    >
                      <ProjectCard project={projects[nextIndex]} variant="neighbor" />
                    </motion.div>
                  </div>

                  <aside className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/15 backdrop-blur-2xl">
                    <h3 className="text-lg font-semibold text-white">Project preview</h3>
                    <p className="mt-3 text-slate-300">Active project: {activeProject.title}</p>
                    <div className="mt-6 flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/15 text-cyan-200">
                        {active + 1}
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Progress</p>
                        <div className="mt-2 h-2 w-48 overflow-hidden rounded-full bg-slate-800">
                          <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${((active + 1) / total) * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="glass-panel rounded-3xl border border-white/10 bg-slate-800/80 px-4 py-3 text-slate-100 transition hover:bg-slate-700/90"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="glass-panel rounded-3xl border border-white/10 bg-slate-800/80 px-4 py-3 text-slate-100 transition hover:bg-slate-700/90"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {projects.map((project, index) => (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => setActive(index)}
                        className={`rounded-full px-3 py-2 text-sm transition ${index === active ? 'bg-cyan-500/95 text-slate-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
