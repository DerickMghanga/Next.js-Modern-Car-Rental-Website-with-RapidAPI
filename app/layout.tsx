import { relative } from 'path'
import './globals.css'
import { Navbar } from '@/components'
import { Footer } from '@/components'
// This file is used to specify how a main page is going to look like ie Page Layout

export const metadata = {
  title: 'Kenya CarHub',
  description: 'Discover the best and classy cars in Kenya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* This is the main page part of the website */}

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}
