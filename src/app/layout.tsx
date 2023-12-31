import type { Metadata } from 'next'

import Header from './components/Header'
import Footer from './components/Footer'

import './globals.css'
import './globals.scss'


export const metadata: Metadata = {
  title: 'Giulio Simone Floresta | Front-End Developer',
  description: 'Giulio Simone Floresta | Front-End Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
