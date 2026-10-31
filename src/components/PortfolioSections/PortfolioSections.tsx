import styles from './PortfolioSections.module.css'

export const PortfolioSections = () => (
  <section className={styles.sections} aria-label="Currently and contact">
    <article className={styles.currentlyCard} id="currently">
      <h2>Currently</h2>
      <p>Learning, experimenting, and building things that are useful.</p>
      <p>Focused on full-stack development, thoughtful interfaces, and reliable software.</p>
      <div className={styles.shapes} aria-hidden="true"><span /><span /></div>
    </article>
    <article className={styles.contactCard} id="contact">
      <h2>Get in touch</h2>
      <p className={styles.contactDescription}>
        Have a question, an idea, or want to talk about building something? I’d be glad to hear from you.
      </p>
      <a className={styles.emailButton} href="mailto:sabyrkoff@gmail.com">sabyrkoff@gmail.com</a>
    </article>
  </section>
)
