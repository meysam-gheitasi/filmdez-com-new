import MenuNavbar from "@/components/navbar/MenuNavbar";
import PackSlider from "@/components/sliders/PackSlider";


//DATAS
import movies_slider from '@/app/constants/data/sliderMoviesData.json'
import irani from '@/app/constants/data/seryalIran.json'
import Upcoming from "@/components/mobile-view/Upcoming";

import moviesKhareji from '@/app/constants/data/moviesKhareji.json'
import seryalKhareji from '@/app/constants/data/seryalKhareji.json'
import animations from '@/app/constants/data/animations.json'
import AnimationShow from "@/components/AnimationShow";

export default function Home() {
  return (
    <div className="flex-center mx-auto w-full flex-col relative top-[123px] pb-12">

      <section className="w-full">
        <MenuNavbar />
      </section>

      <section className="w-full">
        <PackSlider movies={movies_slider} />
      </section>


      <div className="w-full max-w-screen-2xl px-7 pt-24 pb-72">

        <section className="w-full ">
          <div className="max-lg:hidden">
            <Upcoming mode={1} pc={true} datas={irani} />
          </div>
          <div className="hidden max-lg:block">
            <Upcoming mode={2} pc={false} datas={irani} />
          </div>
        </section>

        <section className="w-full max-lg:px-4">
        <Upcoming mode={2} pc={false} datas={moviesKhareji} />
        </section>

        <section className="w-full ">
        <Upcoming mode={2} pc={false} datas={seryalKhareji} />
        </section>

        <section className="w-full">
          <AnimationShow datas={animations} />
        </section>

      </div>

    </div>
  )
}
