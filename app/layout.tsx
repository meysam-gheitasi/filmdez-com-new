import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'



export const metadata: Metadata = {
  title: 'Filmdez فیلم دز',
  description: 'وب سایت دانلود و تماشای آنلاین فیلم و سریال های ایرانی و خارجی جدید ، بدون سانسور و رایگان ',
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
        <main className='relative overflow-hidden min-h-screen bg-black-100'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
