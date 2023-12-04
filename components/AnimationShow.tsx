'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

import Image from "next/image";
import Link from "next/link";
import { MOVIES_BOX_ASSETS } from '@/app/constants/index'

export default function AnimationShow({ datas }) {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }


    return (
        <div className="flex flex-col">

            {datas.map(item1 => (
                <div key={item1.Title} className='flex flex-col w-full py-10'>
                    <div className="flex-between body-text text-white-800 pb-8 px-7">
                        <h1 className="">
                            {item1.Title}
                        </h1>
                        <Link className="flex-center body-text gap-x-1 hover:text-white-400 " href={item1.Slug}>
                            <span>
                                نمایش همه
                            </span>
                            <span className="bg-black-400 rounded-full">
                                <Image className='object-contain' src={MOVIES_BOX_ASSETS[0]} alt='all movies 2023 icon' width={20} height={20} />
                            </span>
                        </Link>
                    </div>
                </div>
            ))}

            <div className="flex-center max-sm:flex-col w-full gap-x-3">
                <div className="w-96 h-96 max-md:w-72 pe-4">
                    <Image className="w-full h-full object-contain" src={'/assets/images/bg-kids.png'} alt='animaion' width={400} height={400} />
                </div>
                <div className="flex flex-col w-1/2 gap-y-9">
                    <h4 className="font-bold text-lg text-slate-200">
                        بهترین انیمیشن  های دنیای وب در فیلم دز
                    </h4>
                    <div className="">
                        <Slider {...settings}>
                            {datas[0].List.map(item => (
                                <div key={item.Id} className="w-52 h-[285px] max-lg:w-48 group">
                                    <Link href={item.Id}>
                                        <Image className="w-full h-full object-cover scale-95 group-hover:scale-100 duration-300 rounded-md" alt="image animation" src={item.Poster} width={200} height={200} />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
