import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      className={styles.toggle}
      data-testid="theme-toggle"
      onClick={() => setDark(prev => !prev)}
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}