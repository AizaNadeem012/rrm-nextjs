import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'
import { ClientProviders } from './client-providers'

export const metadata: Metadata = {
  title: 'R.R.M External Cleaning Specialist',
  description: 'Professional exterior cleaning services in Newton-le-Willows, Warrington, and Greater Manchester',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}