

import Image from 'next/image';

export default function Gallery() {
  return (
    <div className='grid grid-cols-12  bg-blue-200 w-screen border border-solid m-1 h-screen'>
        <Image
            className="w-full rounded-md shadow-lg col-span-3 h-[75%]"
            src="/gg1.jpg"
            alt="Banner Image"
            width={200}
            height={400}
        />
        <Image
            className="w-full  rounded-md shadow-lg col-span-3 h-[75%]"
            src="/gg2.png"
            alt="Banner Image"
            width={200}
            height={400}
        />
        <Image
            className="w-full  rounded-md shadow-lg col-span-3 h-[75%]"
            src="/gg3.png"
            alt="Banner Image"
            width={200}
            height={400}
        />
        <Image
            className="w-full  rounded-md shadow-lg col-span-3 h-[75%]"
            src="/gg4.jpeg"
            alt="Banner Image"
            width={200}
            height={400}
        />
    </div>
    );  
}  