import Navbar from "./navbar/page";

export default function Home() {
  return (
    //  <Navbar/>
    <div>
      <section
        id="about"
        className="text-white h-screen bg-black text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">Hero</h1>
      </section>
      <section
        id="blog"
        className="text-white h-screen bg-black text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">Blog</h1>
      </section>
      <section
        id="contact"
        className="text-white h-screen bg-black text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">Contact</h1>
      </section>
      <section
        id="projects"
        className="text-white h-screen bg-black text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">Projects</h1>
      </section>
    </div>
  )
}
