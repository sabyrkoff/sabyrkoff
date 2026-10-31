import styles from './Footer.module.css'

const skills = ['Clean code', 'Performance', 'Reliability', 'Accessibility', 'Motion', 'Details']

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bar}>
        <ul className={styles.skills} aria-label="Areas of focus">
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        <span className={styles.copyright}>© {new Date().getFullYear()}, Made by me.</span>
      </div>
    </footer>
  )
}
