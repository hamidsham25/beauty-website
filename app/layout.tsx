import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beauty Linden - Ihr Beauty-Salon in Bochum',
  description: 'Professionelle Beauty-Behandlungen in Bochum. Hair, Nails, Make-Up und mehr. Jetzt Termin buchen!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
