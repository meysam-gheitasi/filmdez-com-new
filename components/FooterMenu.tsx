import Image from "next/image"

import { FOOTER_MENU } from "../../../../constants"
import Link from "next/link"

export default function FooterMenu() {
    return (
        <div className='hidden max-lg:grid grid-cols-3 fixed bottom-0 gap-x-2 0 left-0 right-0 w-full bg-black-400 h-16 z-50'>
            {
                FOOTER_MENU.map(item => (
                    <div className='flex-center'>
                        <Link className="flex-center !flex-col text-[10px] gap-y-1" key={item.key} href={item.slug}>
                            <Image className="white-svg object-fill" alt='icon' src={item.icon} width={35} height={32} />
                            <span className="text-xs">
                                {item.title}
                            </span>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}