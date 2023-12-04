'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Ucard from "./Ucard";

export default function Uslider({ data }) {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 928,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 720,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
          ],
        }

    return (
        <Slider {...settings}>
            {data.map(item => (
                <Ucard key={item.Id} data={item} />
            ))}
        </Slider>
    )
}
