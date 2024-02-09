import Image from 'next/image';

export default function OurTeam() {
    return(
     <div className="bg-slate-300 h-[78%] w-screen">
         <h1 className="text-cyan-500 text-6xl font-bold mt-6">Our Team</h1>
         <div className="md:flex md:grid-cols-4 p-4 block space-x-2 md:h-[75%] h-[50%] justify-around ">
            <div className="col-span-1  md:w-1/4 w-2/2 ">
            <Image
                        src="/manager1.jpg"
                        width={225}
                        height={220}
                        alt="image"
                        className="focus:border-none active:border-none rounded-full  mx-auto mt-3"
                      />
                <h1 className='md:text-3xl text-2xl font-bold text-black'>CEO</h1>
                <h2 className='md:text-xl text-lg font-bold text-black'>Jennifer Smith</h2>
                <p className='md:text-lg text-base font-semibold text-black p-2'>
                Jennifer Smith passionately leads, turning dreams into memories, dedicated crafting memorable, standout events.
                </p>
            </div>
            <div className="col-span-1  md:w-1/4 w-2/2">
            <Image
                        src="/manager2.jpg"
                        width={225}
                        height={220}
                        alt="image"
                        className="focus:border-none active:border-none rounded-full  mx-auto mt-3"
                      />
                <h1 className='md:text-3xl text-2xl font-bold text-black'>Director</h1>
                <h2 className='md:text-xl text-lg font-bold text-black'>Tylor Browns</h2>
                <p className='md:text-lg font-semibold text-black p-2'>
                Tylor Browns actively brings visions to life, committed to perfection in every meticulously planned event.                </p>
            </div>
            <div className="col-span-1  md:w-1/4 w-2/2">
            <Image
                        src="/manager3.jpg"
                        width={225}
                        height={220}
                        alt="image"
                        className="focus:border-none active:border-none rounded-full  mx-auto mt-3"
                      />
                <h1 className='md:text-3xl text-2xl font-bold text-black'>Manager</h1>
                <h2 className='md:text-xl text-lg font-bold text-black'>Sara Jones</h2>
                <p className='md:text-lg font-semibold text-black p-2'>
                Sara Jones ensures smooth events, a detail-lover,small arrangements, making sure that every occasion feels special and unique                </p>
            </div>
            <div className="col-span-1  md:w-1/4 w-2/2">
            <Image
                        src="/manager4.jpg"
                        width={225}
                        height={220}
                        alt="image"
                        className="focus:border-none active:border-none rounded-full  mx-auto mt-3"
                      />
                <h1 className='md:text-3xl text-2xl font-bold text-black'>Head Chef</h1>
                <h2 className='md:text-xl text-lg font-bold text-black'>Lily Davis</h2>
                <p className='md:text-lg font-semibold text-black p-2'>
                Lily Davis delectable dishes, blending tradition, innovation for unforgettable culinary experiences.                </p>
            </div>
         </div>
     </div>
    )
    }   