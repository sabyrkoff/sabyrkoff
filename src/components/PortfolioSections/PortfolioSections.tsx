import gmailIcon from '@/assets/icons/gmail.svg'
import telegramIcon from '@/assets/icons/telegram.svg'
import styles from './PortfolioSections.module.css'

export const PortfolioSections = () => {
  return (
    <section className={styles.sections} aria-label="More about Sabyrzhan">
      <article className={styles.aboutCard} id="about">
        <svg className={styles.aboutArtwork} viewBox="0 0 600 560" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="aboutBlueSweep" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#315cff" />
              <stop offset="0.58" stopColor="#4775ff" />
              <stop offset="1" stopColor="#2147df" />
            </linearGradient>
            <linearGradient id="aboutBlueFold" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#315cff" />
              <stop offset="1" stopColor="#153bd0" />
            </linearGradient>
          </defs>
          <path
            d="M510-24C452 20 385 56 374 119c-13 72 38 120 78 176 39 54 49 105 17 161h155V-24H510Z"
            fill="url(#aboutBlueSweep)"
          />
          <path
            d="M261 584c19-89 77-143 154-194 57-38 123-68 209-100v294H261Z"
            fill="url(#aboutBlueFold)"
          />
        </svg>
        <div className={styles.aboutContent}>
          <p className={styles.eyebrow}>About</p>
          <h2 className={styles.aboutTitle}>
            Somewhere
            <br />
            between <span>design</span>
            <br />
            and engineering.
          </h2>
          <p className={styles.aboutDescription}>
            I’m Sabyrzhan — a software engineer, UI designer and curious mind. I love turning ideas
            into beautiful and functional products.
          </p>
          <a className={styles.learnMore} href="#about">
            Learn more <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>

      <article className={styles.currentlyCard}>
        <p className={styles.eyebrow}>Currently</p>
        <p className={styles.currentlyText}>
          <span>Learning.</span>
          <span>Experimenting.</span>
          <span className={styles.building}>Building.</span>
        </p>
        <span className={styles.sparkle} aria-hidden="true">✧</span>
        <svg className={styles.globe} viewBox="0 0 260 150" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="1">
            <ellipse cx="130" cy="75" rx="112" ry="63" />
            <ellipse cx="130" cy="75" rx="78" ry="63" />
            <ellipse cx="130" cy="75" rx="38" ry="63" />
            <path d="M20 75h220M32 48c53 24 143 24 196 0M32 102c53-24 143-24 196 0M56 29c40 20 108 20 148 0M56 121c40-20 108-20 148 0" />
          </g>
        </svg>
      </article>

      <article className={styles.elsewhereCard}>
        <p className={styles.eyebrow}>Elsewhere</p>
        <a
          className={styles.githubLink}
          href="https://github.com/sabyrkoff"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
        <p className={styles.elsewhereDescription}>Check out my code, projects and contributions.</p>
        <div className={styles.pixels} aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
        </div>
      </article>

      <article className={styles.contactCard} id="contact">
        <p className={styles.eyebrow}>Contact</p>
        <h2 className={styles.contactTitle}>
          Say hello.<span className={styles.contactArrow} aria-hidden="true">↗</span>
        </h2>
        <div className={styles.contactIcons} aria-label="Contact links">
          <span role="img" aria-label="Telegram">
            <img src={telegramIcon} alt="" />
          </span>
          <span role="img" aria-label="Gmail">
            <img src={gmailIcon} alt="" />
          </span>
        </div>
      </article>
    </section>
  )
}
