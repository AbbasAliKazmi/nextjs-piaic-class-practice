

import Image from 'next/image';

export default function Gallery() {
    return (
        <div className='grid grid-cols-4  bg-blue-200 w-screen border border-solid m-1 h-screen'>
            <div className='relative group'>
                <Image
                    className="w-full rounded-md shadow-lg col-span-1 h-[75%] object-fill hover:scale-x-110 transition duration-500 ease-in-out transform hover:-translate-y-1  hover:z-50 group-hover:brightness-50"
                    src="/gg1.jpg"
                    alt="Banner Image"
                    width={600}
                    height={400}
                />
                <h1 className="absolute text-5xl font-bold text-cyan-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                    Wedding Event
                </h1>
            </div>
            <div className='relative group'>
                <Image
                    className="w-full rounded-md shadow-lg col-span-1 h-[75%] object-fill hover:scale-x-110 transition duration-500 ease-in-out transform hover:-translate-y-1  hover:z-50 group-hover:brightness-50"
                    src="/gg2.png"
                    alt="Banner Image"
                    width={200}
                    height={400}
                />
                <h1 className="absolute text-5xl font-bold text-cyan-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                    Corporate Event
                </h1>
            </div>
            <div className='relative group'>

                <Image
                    className="w-full rounded-md shadow-lg col-span-1 h-[75%] object-fill hover:scale-x-110 transition duration-500 ease-in-out transform hover:-translate-y-1  hover:z-50 group-hover:brightness-50"
                    src="/gg3.png"
                    alt="Banner Image"
                    width={200}
                    height={400}
                />
                <h1 className="absolute text-5xl font-bold text-cyan-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                    Birthday Event
                </h1>
            </div>
            <div className='relative group'>
                <Image
                    className="w-full rounded-md shadow-lg col-span-1 h-[75%] object-fill hover:scale-x-110 transition duration-500 ease-in-out transform hover:-translate-y-1  hover:z-50 group-hover:brightness-50"
                    src="/gg4.jpeg"
                    alt="Banner Image"
                    width={200}
                    height={400}
                />
                <h1 className="absolute text-5xl font-bold text-cyan-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                    Private Event
                </h1>
            </div>
        </div>
    );
}



{/* <body class="p-10">
    
        <img class="w-full" src="https://www.slingacademy.com/wp-content/uploads/2022/10/night-sky.jpeg" />
        <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Sling Academy</h1>
        <h2 class="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>
        <h3 class="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3>
        <h3 class="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3>
    </div>
</body> */}