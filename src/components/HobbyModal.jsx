import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function HobbyModal({ hobby, isOpen, onClose }) {
  if (!hobby) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', damping: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-slate-950/98 p-8 shadow-2xl shadow-black/50 backdrop-blur-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              <div>
                <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
                  {hobby.tag}
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white">{hobby.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{hobby.short}</p>
              </div>

              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-slate-300">{hobby.description}</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-3xl bg-cyan-500/95 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
