import React from 'react'
import SliderCard from './SliderCard'

export default function PackSlider({ movies }) {
  return (
    <div>
        {movies.map(item =>(
            <SliderCard key={item.Id} movies={item} />
        ))}
    </div>
  )
}
