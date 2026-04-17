import { useTheme } from '../context/ThemeContext.jsx'
import { Moon, SunMedium, Cpu } from 'lucide-react'

export default function ThemeToggle({ mobile = false }) {
  const { theme, setTheme, themeOptions } = useTheme()

  const icon = {
    dark: <Moon size={18} />,
    light: <SunMedium size={18} />,
    binary: <Cpu size={18} />,
  }[theme]

  return (
    <div className={mobile ? 'flex gap-3' : 'flex items-center gap-3'}>
      <button
        type="button"
        onClick={() => {
          const nextIndex = (themeOptions.indexOf(theme) + 1) % themeOptions.length
          setTheme(themeOptions[nextIndex])
        }}
        className="glass-panel inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-slate-100 transition hover:bg-slate-800/90"
      >
        {icon}
        <span className="ml-2 text-xs uppercase tracking-[0.24em] text-slate-300">
          {theme === 'binary' ? 'Rain' : theme}
        </span>
      </button>
    </div>
  )
}
