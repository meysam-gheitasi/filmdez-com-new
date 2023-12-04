import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'



export const metadata: Metadata = {
  title: 'Filmdez فیلم دز',
  description: 'وب سایت دانلود و تماشای آنلاین فیلم و سریال های ایرانی و خارجی جدید ، بدون سانسور و رایگان ',
}

const vazirFont = localFont({
  src: '../public/fonts/Yekan.woff'
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
        <main className='relative w-full overflow-hidden min-h-screen bg-black-100 pb-10'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
