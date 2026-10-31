import styles from './Footer.module.css'

export const Footer = () => (
  <footer className={styles.footer}>
    <p>Made by me © {new Date().getFullYear()}</p>
    <a href="https://t.me/sabyrka" target="_blank" rel="noreferrer">Let’s talk!</a>
  </footer>
)
