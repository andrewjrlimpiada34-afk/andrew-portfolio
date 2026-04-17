import { useState } from 'react'
import { Mail, SendHorizontal } from 'lucide-react'
import githubIcon from '../../img/github.png'
import linkedinIcon from '../../img/linkedin.png'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill out every field before sending.')
      return
    }
    setStatus('Message received! I will get back to you shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-glass backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">Contact</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Get in touch for collaborations, project ideas, or just a friendly hello.
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="glass-panel rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/15 backdrop-blur-2xl">
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <p className="mt-2 text-slate-300">andrew.limpiada@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Socials</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-3xl bg-slate-800/90 px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-700">
                  <img src={githubIcon} alt="GitHub" className="h-5 w-5" />
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-3xl bg-slate-800/90 px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-700">
                  <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/15 backdrop-blur-2xl">
          <label className="block text-sm font-medium text-slate-200">
            Name
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60"
              placeholder="Andrew"
            />
          </label>
          <label className="block text-sm font-medium text-slate-200">
            Email
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60"
              placeholder="you@example.com"
            />
          </label>
          <label className="block text-sm font-medium text-slate-200">
            Message
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className="mt-3 h-32 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60"
              placeholder="Tell me about your idea..."
            />
          </label>
          {status && <p className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">{status}</p>}
          <button type="submit" className="inline-flex items-center gap-2 rounded-3xl bg-cyan-500/95 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Send Message <SendHorizontal size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}
