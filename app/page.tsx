import MenuNavbar from "@/components/navbar/MenuNavbar";
import TopSlider from "@/components/sliders/TopSlider";

export default function Home() {
  return (
    <div className="flex-center mx-auto w-full flex-col relative top-[123px] pb-12">
      
      <section className="flex-center w-full">
        <MenuNavbar />
      </section>

      <section className="w-full">
        <TopSlider />
      </section>

    </div>
  )
}
