import Image from "next/image"


export default function Ourservicesec(){
    return(
        <div className="flex bg-slate-300 md:h-screen h-[65%]  md:p-10 p-5 w-full">
            <div className=" md:w-2/5 w-4/5 pt-6 ml-8">
                <h1 className="md:text-8xl text-4xl md:font-bold font-semibold text-start text-cyan-500">Our</h1>
                <h1 className="md:text-8xl text-4xl md:font-bold font-semibold text-start text-cyan-500">Services</h1>
                <p className="text-start mt-5 md:text-xl text-sm md:font-semibold font-medium text-slate-800 w-[90%]">The Palm specializes in curating exceptional events tailored to your needs.
                   From corporate gatherings to personal celebrations, our team delivers 
                   seamless planning, innovative concepts, and precise execution, ensuring
                   unforgettable experiences that exceed expectations, every time.
                </p>
                <div className="flex justify-start">
                  <button className="mt-5 md:px-4 px-2 md:py-2 py-1 border border-slate-800 text-slate-800 rounded">Learn More</button>
                </div>  
            </div>
            <div className=" md:w-3/5 md:relative md:flex hidden ">
                {/* First Image (Left Bottom) */}
                <Image
                    src="/g1.png"
                    width={390}
                    height={470}
                    alt="Picture setup"
                    className="absolute md:left-0 md:bottom-0  shadow-lg"
                />

                {/* Second Image (Top Right, Slightly Behind) */}
                <Image
                    src="/g2.jpg"
                    width={490}
                    height={420}
                    alt="Picture setup"
                    className="absolute md:top-0 md:right-0 md:-mt-30 md:-mr-30  shadow-lg"
                />
            </div>
        </div>
    )
}