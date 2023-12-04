
import { MOVIES_BOX_ASSETS, MOVIES_CAT_TO_HOME } from '@/app/constants/index'
import film_dez_data from '@/app/constants/data/film-dez-data.json'
import Link from 'next/link'
import Image from 'next/image'
import Ucard from './Ucard'

import moviesKhareji from '@/app/constants/data/moviesKhareji.json'
import Uslider from './Uslider'
import MoviesGroup from '../MoviesGroup'

export default function Upcoming({ datas, mode, pc }) {

    return (
        <div className='w-full py-10'>
            {datas.map(item1 => (
                <div key={item1.Title} className='flex flex-col w-full'>
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

            {
                pc ?
                    <MoviesGroup mode={mode} item={datas[0].List} />
                    :
                    <Uslider data={datas[0].List} />
            }
        </div>
    )
}
