'use client'

import React from 'react'
import SliderCard from './SliderCard'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export default function PackSlider({ movies }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='w-full'>
            <Slider {...settings}>
                {movies.map(item => (
                    <SliderCard key={item.Id} movies={item} />
                ))}
            </Slider>
        </div>
    )
}
