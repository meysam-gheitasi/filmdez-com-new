import Link from "next/link"
import Image from "next/image"

import { NAV_MENU_MOVIES_FOREIGN, NAV_MENU_IRANIAN, NAV_MENU_SERIES } from "@/app/constants"

import { NAV_ACCOUNT } from "@/app/constants"

//LOGO IMAGE
import logo from "@/public/assets/logo-filmdez.svg"

export default function Navbar() {
  return (
    <nav className="w-full flex-center fixed top-0 z-50 border border-b-2 border-black-200 bg-black-100 text-white-800">
      <div className="flex-between max-w-screen-xl w-full text-sm py-3 px-4">

        <div className="max-lg:hidden flex-between gap-x-9">

          {/* LOGIN & SINGUP */}
          <div className="max-lg:hidden flex-center gap-x-3">
            {NAV_ACCOUNT.map((item) =>
              <div className="flex-center text-md  pb-1" key={item.key}>
                <Link className="hover flex-center gap-x-2" href={item.slug}>
                  <Image className="white-svg object-contain" alt="logo website" src='/assets/icons/navbar/singup.svg' priority={false} width={22} height={18} />
                  <h4 className="text-base font-semibold text-gradient_blue-purple">
                    {item.title}
                  </h4>
                </Link>
              </div>
            )}
          </div>

          {/* Main-Menu */}
          <div className="max-md:hidden flex-center gap-x-6">

            {/* MENU 1 */}
            <div className="flex-center gap-x-3">
              <div className="flex-center" >
                <ul>
                  <li className="block relative pb-1 group">
                    {NAV_MENU_IRANIAN.slice(0, 1).map((item) => (
                      <Link className="flex-center" href={item.slug} key={item.key}>
                        <h4 className="text-base">
                          {item.title}
                        </h4>
                        <Image className="white-svg object-fill" alt="icon" src='/assets/icons/navbar/arrowdown.svg' width={15} height={18} />
                      </Link>
                    ))}
                    <ul className="sub-menu">
                      {NAV_MENU_IRANIAN.slice(1).map(item => (
                        <li className="hover">
                          <Link key={item.key} href={item.slug}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* MENU 2 */}
            <div className="flex-center gap-x-3">
              <div className="flex-center" >
                <ul>
                  <li className="block relative pb-1 group">
                    {NAV_MENU_MOVIES_FOREIGN.slice(0, 1).map(item => (
                      <Link className="flex-center" href={item.slug} key={item.key}>
                        <h4 className="text-base">
                          {item.title}
                        </h4>
                        <Image className="white-svg object-fill" alt="icon" src='/assets/icons/navbar/arrowdown.svg' width={15} height={18} />
                      </Link>
                    ))}
                    <ul className="sub-menu">
                      {NAV_MENU_MOVIES_FOREIGN.slice(1).map(item => (
                        <li className="hover">
                          <Link key={item.key} href={item.slug}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* MENU 3 */}
            <div className="flex-center gap-x-3">
              <div className="flex-center" >
                <ul>
                  <li className="block relative pb-1 group">
                    {NAV_MENU_SERIES.slice(0, 1).map(item => (
                      <Link className="flex-center" href={item.slug} key={item.key}>
                        <h4 className="text-base">
                          {item.title}
                        </h4>
                        <Image className="white-svg object-fill" alt="icon" src='/assets/icons/navbar/arrowdown.svg' width={15} height={18} />
                      </Link>
                    ))}
                    <ul className="sub-menu">
                      {NAV_MENU_SERIES.slice(1).map(item => (
                        <li className="hover">
                          <Link key={item.key} href={item.slug}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
