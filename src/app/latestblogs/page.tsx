import Image from 'next/image'
import { ArrowRight } from 'lucide-react';
export default function Blogs() {
    return (
        <div className="bg-slate-300 h-[78%] w-screen">
            <h1 className="text-cyan-500 md:text-6xl text-3xl md:font-bold font-semibold mt-6">Latest Blogs</h1>
            <div className="md:flex md:grid-cols-12 p-4 block space-x-2 md:h-[75%] h-[50%] justify-around ">
                <div className="col-span-4  md:w-1/3 w-2/2 ">
                    <Image
                        src="/blog1.jpg"
                        width={350}
                        height={150}
                        alt="image"
                        className="focus:border-none active:border-none  mx-auto mt-3"
                    />
                    <h1 className='md:text-2xl text-xl font-bold text-black p-6'>Top Wedding Dress Trend in 2024</h1>
                    <p className='md:text-lg text-base font-semibold text-black mx-10 mt-2'>
                    Top Wedding Dress Trend in 2024 promise a delightful blend of tradition, innovation, and sustainability, offering brides a myriad of choices to make their special day even more memorable and fashion-forward.
                    </p>
                </div>
                <div className="col-span-4  md:w-1/3 w-2/2">
                    <Image
                        src="/blog2.jpg"
                        width={350}
                        height={150}
                        alt="image"
                        className="focus:border-none active:border-none   mx-auto mt-3"
                    />
                    <h1 className='md:text-2xl text-xl font-bold text-black p-6'>10 Unique Wedding 25th Anniversary Celebration Ideas</h1>
                    <p className='md:text-lg font-semibold text-black mx-10 mt-2'>
                    10 Unique Wedding 25th Anniversary Celebration Ideas. From intimate gatherings to adventurous escapades, explore creative ideas to make this milestone unforgettable. Get inspired with unique suggestions tailored to create cherished memories for this significant occasion, ensuring your celebration reflects the love and joy of 25 years together.
                    </p>                
                    </div>
                <div className="col-span-4  md:w-1/3 w-2/2">
                    <Image
                        src="/blog3.jpg"
                        width={350}
                        height={150}
                        alt="image"
                        className="focus:border-none active:border-none   mx-auto mt-3"
                    />
                    <h1 className='md:text-2xl text-xl font-bold text-black p-6'>10 Best Ways To lovely Decor a Wedding Car</h1>                   
                    <p className='md:text-lg font-semibold text-black mx-10 mt-2'>Discover the ultimate guide to adorning a wedding car with elegance and charm! Explore the 10 Best Ways To lovely Decor a Wedding Car for expert insights on choosing flowers, color coordination, DIY tips, and professional decor services. Elevate the special day with stunning floral arrangements and creative designs for an unforgettable celebration. </p>
                </div>
                </div>

            <button className='text-cyan-500 md:text-3xl text-xl md:border-2 border-2 border-cyan-500 font-semibold rounded-lg md:p-2 p-1 md:mt-6 mt-3 flex mx-auto'>
            Latest Blogs
            <ArrowRight className='my-auto align-middle'/>
            </button>
            </div>
            
    )
}