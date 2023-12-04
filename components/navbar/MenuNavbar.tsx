import Image from "next/image"
import { SVG_NAVBAR } from "@/app/constants"

export default function MenuNavbar() {
    return (
        <div className="flex-center w-full bg-black-400 border-b-2 py-2 border-black-200 text-white-800 z-30">
            <div className="flex-between max-w-screen-xl w-full text-sm py-3 px-4">

                {/* INPUT BOX */}
                <div className="w-80 max-md:w-72 h-12 px-4 flex-center hover:cursor-pointer !rounded-md bg-black-200 ">
                    <input className="w-full px-2 hover:cursor-pointer placeholder:text-sm bg-inherit outline-none italic" type="text" placeholder="جستجو فیلم ؟" />
                    <Image className="w-6 h-full white-svg" src={SVG_NAVBAR[0]} alt="searchbar" width={20} height={20} />
                </div>
            </div>

            <div className="flex-center py-3 px-4 rounded-md bg-black-200">
                <p className="flex text-gradient_blue-purple font-semibold">
                    این یک پیغام نمایشی از طرف مدیریت وب سایت است
                </p>
            </div>
        </div>
    )
}
