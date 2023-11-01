import AboutSection from './components/Section/AboutSection'
import PortfolioSection from './components/Section/PortfolioSection'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles['main']}>
      <AboutSection />
      <PortfolioSection />
    </main>
  )
}
