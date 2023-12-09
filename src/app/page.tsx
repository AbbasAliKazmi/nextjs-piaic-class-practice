import Navbar from "./navbar/page";
import Header from "./header/page";
import Intro from "./intro/page";
import Gallery_carousal from "./gallery_carousal/page";
import Ourservicesec from "./ourservicesection/page";
import Gallery from "./completeGallery/page";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <section
        id="about"
        className="text-white h-screen bg-black text-center flex ">
        
        <Header/>
      </section>
      <section
        id="blog"
        className="text-white h-screen  text-center flex">
        <Intro/>
      </section>
      <section
        id="contact"
        className="text-white h-screen bg-black text-center flex">
        <Gallery_carousal/>
      </section>
      <section
        id="projects"
        className="text-white h-screen bg-black text-center flex">
        <Ourservicesec/>
      </section>
      <section
        id="gallery"
        className="text-white h-screen text-center flex">
        <Gallery/>
      </section>  
    </div>
  )
}
