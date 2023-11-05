import AboutSection from './components/Section/AboutSection'
import ContactSection from './components/Section/ContactSection'
import PortfolioSection from './components/Section/PortfolioSection'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles['main']}>
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}
