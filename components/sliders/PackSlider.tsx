'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

import SliderCard from './SliderCard'

// ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default function PackSlider({ movies }) {

    const NextArrowSamlet = (props) => {
        const { onClick } = props
        return (
            <div className='' onClick={onClick}>
                <button className='next control-btn'>
                    <FontAwesomeIcon icon={faChevronRight} size="xs" style={{ color: "#ffffff", }} />
                </button>
            </div>
        )
    }
    const PreArrowSamlet = (props) => {
        const { onClick } = props
        return (
            <div className='' onClick={onClick}>
                <button className='prev control-btn'>
                    <FontAwesomeIcon icon={faChevronLeft} size="xs" style={{ color: "#ffffff", }} />
                </button>
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        nextArrow: <NextArrowSamlet />,
        prevArrow: <PreArrowSamlet />
    };

    return (
        <div className='w-full z-30'>
            <Slider {...settings}>
                {movies.map(item => (
                    <SliderCard key={item.Id} movies={item} />
                ))}
            </Slider>
        </div>
    )
}
