import Link from "next/link"
import Image from "next/image"

import { NAV_MENU_MOVIES_FOREIGN, NAV_MENU_IRANIAN, NAV_MENU_SERIES } from "@/app/constants"

export default function MenuNavbar() {
    return (
        <div className="flex items-center w-full bg-black-200 text-white-800 pt-32">
            <div className="flex-between w-full max-3xl:max-w-screen-xl body-text !text-xm py-3 px-4">
                {/* Main-Menu */}
                <div className="max-md:hidden flex-center gap-x-3">

                    {/* MENU 1 */}
                    <div className="flex-center gap-x-3">
                        <div className="flex-center" >
                            <ul>
                                <li className="block relative pb-1 group">
                                    {NAV_MENU_IRANIAN.slice(0, 1).map(item => (
                                        <Link className="flex-center" href={item.slug} key={item.key}>
                                            {item.title}
                                            <Image className="white-svg object-fill" alt="icon" src={item.icon} width={15} height={18} />
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
                                            {item.title}
                                            <Image className="white-svg object-fill" alt="icon" src={item.icon} width={15} height={18} />
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
                                            {item.title}
                                            <Image className="white-svg object-fill" alt="icon" src={item.icon} width={15} height={18} />
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
        </div>
    )
}
