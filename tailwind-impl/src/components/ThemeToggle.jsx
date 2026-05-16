import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button
      className="px-3 py-1 border border-gray-500 rounded text-gray-900 dark:text-gray-100"
      data-testid="theme-toggle"
      onClick={() => setDark(prev => !prev)}
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}