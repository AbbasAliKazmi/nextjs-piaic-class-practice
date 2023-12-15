import Header from "./header_navbar/page";
import Intro from "./intro/page";
import Gallery_carousal from "./gallery_carousal/page";
import Ourservicesec from "./ourservicesection/page";
import Gallery from "./completeGallery/page";
import Servicescards from "./servicescards/page";
import Clientcounter from "./clientcounter/page";
import AccordSec from "./accordion/page";

export default function Home() {
  return (
    <div className="">
      <section
        id="about"
        className="text-white h-full md:h-[75%] bg-black text-center flex ">
        
        <Header/>
      </section>
      <section
        id="blog"
        className="text-white h-screen  text-center flex">
        <Intro/>
      </section>
      <section
        id="contact"
        className="text-white h-screen text-center flex">
        <Gallery_carousal/>
      </section>
      <section
        id="projects"
        className="text-white md:h-screen h-[70%] bg-black text-center flex">
        <Ourservicesec/>
      </section>
      <section
        id="gallery"
        className="text-white md:h-screen h-full text-center flex">
        <Gallery/>
      </section>  
      <section
        id="Servicescards"
        className="text-white h-screen text-center flex md:-m-28">
        <Servicescards/>
      </section>
      <section
        id="AccordSec"
        className="text-white  h-screen text-center flex">
        <AccordSec/>
      </section> 
      <section
        id="Clientcounter"
        className="text-white h-[50%] text-center flex -m-28">
        <Clientcounter/>
      </section> 
      
      
    </div>
  )
}

