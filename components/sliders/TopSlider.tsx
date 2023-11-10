'use client'

import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

export default function TopSlider() {
    return (
        <>
            <Swiper
                lazy={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <Image className='!object-cover h-[700px] w-full'
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                        loading="lazy"
                        alt='slieder image'
                        width={1700}
                        height={600}
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>

                <SwiperSlide>
                    <Image className='!object-cover h-[600px] w-full'
                        src="https://swiperjs.com/demos/images/nature-3.jpg"
                        loading="lazy"
                        alt='slieder image'
                        width={1700}
                        height={600}
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>

                <SwiperSlide>
                    <Image className='!object-cover h-[600px] w-full'
                        src="https://swiperjs.com/demos/images/nature-2.jpg"
                        loading="lazy"
                        alt='slieder image'
                        width={1700}
                        height={600}
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>

            </Swiper >
        </>
    );
}
