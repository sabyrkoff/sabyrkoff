import styles from './Header.module.css'

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.identity}>
      <span className={styles.identityName}>Sabyrzhan</span>
      <span className={styles.profession}>, Full-Stack Engineer</span>
    </div>

  </header>
)
