import { useEffect, useState } from 'react'
import darkModeIcon from '@/assets/icons/theme-dark.svg'
import lightModeIcon from '@/assets/icons/theme-light.svg'
import styles from './Header.module.css'

type Theme = 'dark' | 'light'

export const Header = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    window.localStorage.setItem('sabyrkoff-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
  }

  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <a className={styles.logo} href="/" aria-label="SZ home">
          SZ<span className={styles.logoDot}>.</span>
        </a>
      </div>

      <div className={styles.controls}>
        <div className={styles.language} role="group" aria-label="Language">
          <span className={styles.activeLanguage} aria-current="page">
            EN
          </span>
          <span className={styles.languageSlash} aria-hidden="true">
            /
          </span>
          <span className={styles.inactiveLanguage}>RU</span>
        </div>

        <button
          className={`${styles.themeSwitch} ${
            theme === 'light' ? styles.lightThemeActive : styles.darkThemeActive
          }`}
          type="button"
          aria-label="Color theme"
          aria-pressed={theme === 'light'}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={toggleTheme}
        >
          <span
            className={`${styles.themeIcon} ${styles.lightModeIcon}`}
            style={{
              maskImage: `url("${lightModeIcon}")`,
              WebkitMaskImage: `url("${lightModeIcon}")`,
            }}
            aria-hidden="true"
          />
          <span
            className={`${styles.themeIcon} ${styles.darkModeIcon}`}
            style={{
              maskImage: `url("${darkModeIcon}")`,
              WebkitMaskImage: `url("${darkModeIcon}")`,
            }}
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  )
}
