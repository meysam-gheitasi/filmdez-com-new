import Image from "next/image"

interface MoviesProp {
    movie: MoviesItems[]
}

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

export default function SliderCard({ movies }: MoviesProp) {
    return (
        <>
            <div className="flex-center flex-col">
                <div className="flex-center w-full">
                    <Image className="object-cover w-full max-lg:max-w-lg max-lg:max-h-[450px] max-h-[740px]" alt="movie poster" src={movies.Poster}
                        sizes="100vw"
                        width={1200}
                        height={400}
                    />
                    <div className="flex-center">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
