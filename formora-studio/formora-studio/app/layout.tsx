import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FORMORA STUDIO | Weboldalak, amik dolgoznak helyetted',
  description: 'Prémium webdesign ügynökség. Modern, gyors és konverzióorientált weboldalak vállalkozásoknak.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
