import { useEffect, useState } from 'react'
import darkModeIcon from '@/assets/icons/theme-dark.svg'
import lightModeIcon from '@/assets/icons/theme-light.svg'
import styles from './Header.module.css'

type Theme = 'dark' | 'light'
type Language = 'en' | 'ru'

export const Header = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )
  const [language, setLanguage] = useState<Language>(() =>
    document.documentElement.lang === 'ru' ? 'ru' : 'en',
  )

  useEffect(() => {
    window.localStorage.setItem('sabyrkoff-theme', theme)
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem('sabyrkoff-language', language)
  }, [language])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
  }

  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'ru' : 'en'
    document.documentElement.lang = nextLanguage
    setLanguage(nextLanguage)
  }

  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <a className={styles.logo} href="/" aria-label="SZ home">
          SZ<span className={styles.logoDot}>.</span>
        </a>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.languageSwitch}
          type="button"
          data-language={language}
          aria-label={language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
          aria-pressed={language === 'ru'}
          title={language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
          onClick={toggleLanguage}
        >
          <span className={`${styles.languageOption} ${language === 'en' ? styles.languageActive : ''}`}>
            EN
          </span>
          <span className={`${styles.languageOption} ${language === 'ru' ? styles.languageActive : ''}`}>
            RU
          </span>
        </button>

        <button
          className={`${styles.themeSwitch} ${
            theme === 'light' ? styles.lightThemeActive : styles.darkThemeActive
          }`}
          type="button"
          aria-label={language === 'en' ? 'Color theme' : 'Цветовая тема'}
          aria-pressed={theme === 'light'}
          title={
            language === 'en'
              ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`
              : `Переключить на ${theme === 'dark' ? 'светлую' : 'тёмную'} тему`
          }
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
