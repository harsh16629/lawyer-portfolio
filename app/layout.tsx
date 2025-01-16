import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devina Jain, Esq. - Corporate Lawyer',
  description: 'Experienced legal counsel for businesses of all sizes. Specializing in corporate law, contract negotiation, mergers & acquisitions, and intellectual property.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

