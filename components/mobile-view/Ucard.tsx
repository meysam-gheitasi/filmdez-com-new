import Image from "next/image"
// ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Ucard({ data }) {

    return (
        <div className="flex flex-col text-slate-200 hover:text-slate-100 max-sm:w-72 ax-sm:h-80 w-56 h-64 border-l-4 border-transparent hover:border-indigo-800 scale-95 hover:scale-100 cursor-pointer duration-300 relative group">
            <Image className="object-cover rounded-md w-full h-full brightness-50 group-hover:brightness-90 duration-300 absolute top-0 right-0 -z-10" src={data.Poster} height={300} width={300} alt="movie image" />
            <div className="flex-start px-7 pt-16 gap-y-4 flex-col">
                <h3 className="text-2xl font-bold">{data.Title}</h3>
                <span className="text-lg font-semibold">{data.Runtime}</span>
                <button className="flex-center gap-x-1 px-4 py-1 rounded-sm bg-gradient-to-r from-indigo-900 via-purple-500 to-indigo-500">
                    <span className="font-semibold">
                        دانلود
                    </span>
                    <FontAwesomeIcon icon={faPlay} style={{ color: "#FFFFFF" }} />
                </button>
            </div>
        </div>
    )
}
