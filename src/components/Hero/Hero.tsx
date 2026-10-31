import { useEffect, useState } from 'react'
import portrait from '@/assets/images/sabyrzhan-portrait-blue.png'
import lightPortrait from '@/assets/images/sabyrzhan-portrait-green.png'
import avatar from '@/assets/images/sabyrzhan-avatar.jpg'
import githubIcon from '@/assets/icons/github.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
import styles from './Hero.module.css'

export const Hero = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => setTheme(root.dataset.theme === 'light' ? 'light' : 'dark'))
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <article className={styles.intro}>
        <div className={styles.profile}>
          <img src={avatar} alt="" />
          <div>
            <strong>Hi, I’m Sabyrzhan.</strong>
            <span>Full-Stack Engineer</span>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/sabyrkoff" target="_blank" rel="noreferrer" aria-label="GitHub">
              <span style={{ maskImage: `url("${githubIcon}")`, WebkitMaskImage: `url("${githubIcon}")` }} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <span style={{ maskImage: `url("${linkedinIcon}")`, WebkitMaskImage: `url("${linkedinIcon}")` }} />
            </a>
          </div>
        </div>
        <h1 id="hero-title">I care how it works.<br />And how it feels to use.</h1>
        <p className={styles.subline}>Curious by default. Picky about the details.</p>
      </article>
      <figure className={styles.portraitCard}>
        <img src={theme === 'dark' ? portrait : lightPortrait} alt="Portrait of Sabyrzhan" />
      </figure>
    </section>
  )
}
