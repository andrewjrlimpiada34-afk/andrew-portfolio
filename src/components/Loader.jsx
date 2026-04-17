import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
        className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-cyan-400/50 border-t-cyan-300"
      />
      <p className="absolute bottom-12 text-sm uppercase tracking-[0.3em] text-slate-300">Loading portfolio</p>
    </motion.div>
  )
}
