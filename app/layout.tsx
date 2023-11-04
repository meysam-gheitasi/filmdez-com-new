import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const vazirFont = localFont({
  src: '../public/fonts/Vazirmatn-Regular.woff2'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" className={vazirFont.className}>
      <body dir='rtl'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
