import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(null)

const themeOptions = ['dark', 'light', 'binary']

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const persisted = localStorage.getItem('portfolio-theme')
    if (persisted && themeOptions.includes(persisted)) {
      setTheme(persisted)
    }
  }, [])

  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light', 'theme-binary')
    document.body.classList.add(`theme-${theme}`)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({ theme, setTheme, themeOptions }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return context
}
