import MenuNavbar from "@/components/navbar/MenuNavbar";
import SecondSlider from "@/components/sliders/SecondSlider";
import PackSlider from "@/components/sliders/PackSlider";
import TopSlider from "@/components/sliders/TopSlider";

//DATAS
import movies from '@/app/constants/data/sliderMoviesData.json'




export default function Home() {
  return (
    <div className="flex-center mx-auto w-full flex-col relative top-[123px] pb-12">
      
      <section className="flex-center w-full">
        <MenuNavbar />
      </section>

      <section className="w-full">
        <PackSlider movies={movies} />
      </section>

    </div>
  )
}
