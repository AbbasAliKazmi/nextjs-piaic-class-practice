import Image from "next/image"


export default function Ourservicesec(){
    return(
        <div className="flex bg-slate-300 p-10 w-full">
            <div className=" w-2/5 pt-6">
                <h1 className="text-8xl font-bold text-start text-cyan-500">Our</h1>
                <h1 className="text-8xl font-bold text-start text-cyan-500">Services</h1>
                <p className="text-start mt-5 text-xl font-semibold text-slate-800">The Palm specializes in curating exceptional events tailored to your needs.
                   From corporate gatherings to personal celebrations, our team delivers 
                   seamless planning, innovative concepts, and precise execution, ensuring
                   unforgettable experiences that exceed expectations, every time.
                </p>
                <div className="flex justify-start">
                  <button className="mt-5 px-4 py-2 border border-slate-800 text-slate-800 rounded">Learn More</button>
                </div>  
            </div>
            <div className=" w-3/5 relative">
                {/* First Image (Left Bottom) */}
                <Image
                    src="/g1.png"
                    width={390}
                    height={470}
                    alt="Picture setup"
                    className="absolute left-0 bottom-0"
                />

                {/* Second Image (Top Right, Slightly Behind) */}
                <Image
                    src="/g2.jpg"
                    width={490}
                    height={420}
                    alt="Picture setup"
                    className="absolute top-0 right-0 -mt-30 -mr-30"
                />
            </div>
        </div>
    )
}