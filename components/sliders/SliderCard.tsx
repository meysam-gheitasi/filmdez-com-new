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
                    <Image className="object-fill max-md:max-h-[300px] max-h-[650px]" alt="movie poster" src={movies.Poster}
                        sizes="100vw"
                        width={1200}
                        height={400}
                    />
                    <div className="flex-center">
                        <h1>{movies.Title}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
