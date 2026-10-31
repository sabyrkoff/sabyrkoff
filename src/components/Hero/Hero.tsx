import { useEffect, useState } from 'react'
import portrait from '@/assets/images/sabyrzhan-portrait-blue.png'
import darkPortrait from '@/assets/images/sabyrzhan-portrait-green.png'
import cvIcon from '@/assets/icons/cv.svg'
import githubIcon from '@/assets/icons/github.svg'
import styles from './Hero.module.css'

export const Hero = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setTheme(root.dataset.theme === 'light' ? 'light' : 'dark')
    })

    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.intro}>
        <p className={styles.role}>Hey, I'm</p>

        <h1 className={styles.title} id="hero-title">
          <span className={styles.name}>Sabyrzhan<span className={styles.nameDot}>.</span></span>
          <span className={styles.tagline}>
            I care how it works.
            <br />
            And how it <span className={styles.world}>feels</span> to use.
          </span>
        </h1>

        <p className={styles.subline}>Curious by default. Picky about the details.</p>

        <div className={styles.actions}>
          <a
            className={styles.actionLink}
            href="https://github.com/sabyrkoff"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className={styles.actionIcon}
              style={{ maskImage: `url("${githubIcon}")`, WebkitMaskImage: `url("${githubIcon}")` }}
              aria-hidden="true"
            />
            GitHub
          </a>
          <a className={`${styles.actionLink} ${styles.resumeLink}`} href="/cv.pdf" target="_blank" rel="noreferrer">
            <span
              className={styles.actionIcon}
              style={{ maskImage: `url("${cvIcon}")`, WebkitMaskImage: `url("${cvIcon}")` }}
              aria-hidden="true"
            />
            CV
          </a>
        </div>
      </div>

      <figure className={styles.portraitCard}>
        <img
          className={styles.portrait}
          src={theme === 'dark' ? portrait : darkPortrait}
          alt="Portrait of Sabyrzhan"
        />
      </figure>
    </section>
  )
}
