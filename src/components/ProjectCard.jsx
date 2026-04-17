import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, active }) {
  return (
    <motion.div
      layout
      className={`group relative rounded-[2rem] border border-white/10 p-6 transition ${active ? 'bg-slate-950/95' : 'bg-slate-900/80 blur-sm opacity-80'}`}
    >
      <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
      <div className="relative space-y-4">
        <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
          Featured project
        </span>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="max-w-2xl text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-2xl bg-white/5 px-3 py-1 text-sm text-slate-300">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-3xl bg-cyan-500/90 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Live Demo <ArrowRight size={16} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:bg-slate-800"
          >
            Source <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
