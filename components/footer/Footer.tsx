import Link from 'next/link'
import Image from "next/image"
import FooterMenu from './FooterMenu'

import { FOOTER_CONFIRMATION, FOOTER_SOCIAL } from '@/../constants/index'

export default function Footer() {
  return (
    <div className="flex-between w-full body-text text-white-800 border-t border-black-400 bg-black-100 pt-16 max-md:pb-20 pb-8 z-50">
      <div className="flex-center flex-col w-full gap-y-14">
        <h3 className=' font-extrabold text-4xl max-md:text-2xl'>فیلم دز</h3>

        <div className='flex !justify-start max-md:flex-col max-md:gap-y-4 gap-x-4'>
          <div className='flex-center !justify-start gap-x-1'>
            <Image className='object-fill white-svg' alt='confirmation' src={FOOTER_CONFIRMATION[0]} priority={true} width={25} height={22} />
            <span>
              منبع جدیدترین فیلم و سریال ها
            </span>
          </div>
          <div className='flex-center !justify-start gap-x-1'>
            <Image className='object-fill white-svg' alt='confirmation' src={FOOTER_CONFIRMATION[0]} priority={true} width={25} height={22} />
            <span>
              فیلم و سریال رایگان ایرانی با خرید حساب کاربری
            </span>
          </div>
          <div className='flex-center !justify-start gap-x-1'>
            <Image className='object-fill white-svg' alt='confirmation' src={FOOTER_CONFIRMATION[0]} priority={true} width={25} height={22} />
            <span>
              پشتیانی 7 روز هفته 24 ساعت روز
            </span>
          </div>
        </div>
        <div className="flex-center !flex-col w-full gap-y-2">
          <div className='flex-center gap-x-1'>
            <Link href="/*" className=''>
              <Image src={FOOTER_SOCIAL[0]} width={55} height={55} alt="instagram" className="" />
            </Link>
            <Link href="/*" className='flex-center gap-x-4'>
              <Image src={FOOTER_SOCIAL[1]} width={30} height={30} alt="telegram" className="" />
            </Link>
          </div>
          <span className='text-xs font-extrabold text-gradient_blue-purple'>صفحات رسمی فیلم دز</span>
        </div>
        <FooterMenu />
      </div>
    </div>
  )
}