import Link from "next/link"
import Image from "next/image"

import { NAV_ACCOUNT, SVG_NAVBAR } from "@/app/constants"

//LOGO IMAGE
import logo from "@/public/assets/logo-filmdez.svg"

export default function Navbar() {
  return (
    <nav className="w-full flex-center fixed top-0 z-50 border border-b-2 border-black-200 bg-black-100 text-white-800">
      <div className="flex-between max-w-screen-xl w-full text-sm py-3 px-4">

        {/* LOGIN & SINGUP */}
        <div className="max-lg:hidden flex-center gap-x-3">
          {NAV_ACCOUNT.map(item =>
            <div className="flex-center text-xs font-bold pb-1" key={item.key}>
              <Link className="hover flex-center gap-x-2" href={item.slug}>
                <Image className="white-svg object-contain" alt="logo website" src={item.icon} priority={false} width={22} height={18} />
                {item.title}
              </Link>
            </div>
          )}
        </div>
        
        {/* <div>
          
          <div className="w-80 max-md:w-72 relative hover:cursor-pointer  ">
            <input className="w-full py-3 px-2 mt-2 hover:cursor-pointer placeholder:text-sm rounded-md bg-black-200 border border-input  outline-5C469C focus:outline-indigo-900 italic mb-4" type="text" placeholder="جستجو فیلم ؟" />
            <Image className="w-6 h-6 white-svg absolute top-4 left-1" src={SVG_NAVBAR[0]} alt="searchbar" width={15} height={15} />
          </div>
        </div> */}

        {/* LOGO */}
        <div>
          <Link href="/" className="flex-center">
            <Image alt="logo" src={logo} width={90} height={80} className="rounded-full object-contain" />
          </Link>
        </div>

      </div>
    </nav>
  )
}
