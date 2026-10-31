import darkModeIcon from '@/assets/icons/theme-dark.svg'
import lightModeIcon from '@/assets/icons/theme-light.svg'
import styles from './Header.module.css'

export const Header = () => {
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

        <div className={styles.themeSwitch} aria-hidden="true">
          <img className={styles.themeIcon} src={lightModeIcon} alt="" />
          <img className={styles.themeIcon} src={darkModeIcon} alt="" />
        </div>
      </div>
    </header>
  )
}
