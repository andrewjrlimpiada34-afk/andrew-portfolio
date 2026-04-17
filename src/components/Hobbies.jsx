import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import hobbies from '../data/hobbies.js'

export default function Hobbies() {
  const [selectedId, setSelectedId] = useState(null)
  const [guess, setGuess] = useState('')
  const [result, setResult] = useState('')

  const selectedHobby = useMemo(() => hobbies.find((item) => item.id === selectedId), [selectedId])

  const handleGuess = (hobby) => {
    setGuess(hobby)
    if (hobby === 'Coding') {
      setResult('Correct! Coding is definitely one of my favorite hobbies.')
    } else {
      setResult("Nice try — I love exploring that too! Guess again or reveal the answer.")
    }
  }

  return (
    <section id="hobbies" className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-glass backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">My Hobbies</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Enjoy the interactive guessing game and learn the hobbies that inspire my creative engineering work.
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {hobbies.map((hobby) => (
            <motion.button
              key={hobby.id}
              onClick={() => setSelectedId(hobby.id)}
              whileHover={{ y: -4 }}
              className="glass-panel rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 text-left shadow-xl shadow-slate-950/15 backdrop-blur-2xl transition hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{hobby.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{hobby.short}</p>
                </div>
                <span className="rounded-3xl bg-cyan-500/15 px-3 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
                  {hobby.tag}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
        <div className="glass-panel rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/15 backdrop-blur-2xl">
          <h3 className="text-xl font-semibold text-white">Guess My Hobby</h3>
          <p className="mt-3 text-slate-300">Select a card, then choose a guess below to see if you can uncover my favorite.</p>
          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-900/80 px-5 py-5 text-slate-200">
            {selectedHobby ? (
              <>
                <p className="text-sm text-slate-400">You selected:</p>
                <h4 className="mt-3 text-2xl font-semibold text-white">{selectedHobby.title}</h4>
                <p className="mt-2 text-slate-300">{selectedHobby.description}</p>
              </>
            ) : (
              <p className="text-slate-300">Tap any hobby card to reveal more details here.</p>
            )}
          </div>

          <div className="mt-6 space-y-3">
            {['Coding', 'Photography', 'Gaming', 'Cooking'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleGuess(option)}
                className="w-full rounded-3xl border border-white/10 bg-slate-800/90 px-4 py-3 text-left text-sm text-slate-100 transition hover:border-cyan-400/50 hover:bg-slate-700"
              >
                {option}
              </button>
            ))}
          </div>
          {result && <p className="mt-4 rounded-3xl bg-white/5 p-4 text-slate-200">{result}</p>}
        </div>
      </div>
    </section>
  )
}
