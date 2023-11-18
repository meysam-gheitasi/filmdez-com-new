import Image from "next/image"
import StarRating from "../helper/StarRating"

import { Slider_Card } from '@/app/constants/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link"

interface MoviesItems {
    Id: number,
    imdbID: number,
    Title: string,
    Year: number,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    imdbRating: number,
    Type: string,
    Response: boolean
}
interface MoviesProp {
    movies: MoviesItems[]
}

export default function SliderCard({ movies }: MoviesProp) {
    return (
        <div className="flex w-full px-28 max-lg:px-0 relative text-slate-100 slider-card-responsive group">

            <div className="w-full absolute top-0 right-0 slider-card-responsive">
                <Image className="object-fill w-full slider-card-responsive" alt="movie poster" src={movies.Poster}
                    sizes="100vw"
                    width={1200}
                    height={400}
                />
                 <div className="absolute top-0 right-0 fade-in-up w-full !h-full z-10 group-hover:opacity-0 duration-300"></div>
            </div>

            <div className="flex-center max-lg:flex-col px-20 max-lg:px-2 ">
                <div className="flex flex-col max-lg:py-10 w-full z-20">
                    <div className="flex-start flex-col  gap-y-2 w-3/4 max-lg:w-full ">
                        <h1 className="bg-texure-title-slider font-extrabold text-5xl max-lg:text-3xl  shadow shadow-black-100 py-2 px-3">
                            {movies.Title}
                        </h1>
                        <br />
                        <div className="flex-center gap-x-8 text-md ">
                            <StarRating rating={movies.imdbRating} />
                            <h4>
                                {movies.Year}
                            </h4>
                            <span>
                                {movies.Runtime}
                            </span>
                        </div>
                        <br />
                        <p className="text-base max-lg:hidden">
                            {movies.Plot}
                        </p>
                        <br />
                        <div className="flex-center">
                            <h4 className="flex-center gap-x-2 text-sm ">
                                <span>
                                    بازیگران
                                </span>
                                <span>
                                    {movies.Actors}
                                </span>
                            </h4>
                        </div>
                        <div className="flex-center max-lg:py-3 max-lg:gap-y-2">
                            <h4 className="flex-center gap-x-2 text-sm ">
                                <span>
                                    ژانر
                                </span>
                                <span>
                                    {movies.Genre}
                                </span>
                            </h4>
                        </div>
                        <br />
                        <span className="flex-center gap-x-1 w-24 max-lg:hidden bg-red-netflex px-6 py-1 rounded-sm">
                            <FontAwesomeIcon icon={faPlay} style={{ color: "#FFFFFF"}} />
                            <span className="font-bold text-sm py-1">
                                پخش
                            </span>
                        </span>
                    </div>
                </div>
                
                <div className="flex-center z-10 w-1/4 max-lg:w-full">
                    <Link href={`movies/${movies.Id}`}>
                        <button className="flex-center gap-4 cursor-pointer duration-300">
                            <span className="group-hover:text-red-netflex text-xl">
                                دانلود
                            </span>
                            <span className="relative max-lg:w-10">
                            <Image alt="play movie" src={Slider_Card[0]} width={120} height={120} />
                            <Image className="absolute top-0 right-0 opacity-0 group-hover:opacity-100" alt="play movie" src={Slider_Card[1]} width={120} height={120} />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
