

export default function Servicescards() {
    return (
        <div className="w-4/5 bg-slate-200 mx-auto justify-center h-80">
            <div className='grid  grid-cols-4 space-x-2 '>
                <ul>
                    <svg className="w-10 h-10 mx-auto mt-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                    </svg>
                    <li className="p-4 mt-2 col-span-1 text-black ">
                        <h1 className="text-2xl font-bold ">Planning</h1>
                        <p className="text-base  mt-2">Marcem ensure a stress-free experience. Trust Marcem for seamless planning, making your event unforgettable.</p></li>
                </ul>
                <ul>
                    <li className="p-4 mt-16 col-span-1 text-black ">
                        <h1 className="text-2xl font-bold ">Decoration</h1>
                        <p className="text-base  mt-2">Marcem specializes in event decorations, blending creativity and to transform spaces into enchanting environments.</p></li>
                </ul>
                <ul>
                    <li className="p-4 mt-16 col-span-1 text-black ">
                        <h1 className="text-2xl font-bold ">Venues</h1>
                        <p className="text-base  mt-2">Marcem excels in venue selection, offering diverse options to match your event's ambiance, size, and theme.</p></li>
                </ul>
                <ul>
                    <li className="p-4 mt-16 col-span-1 text-black ">
                        <h1 className="text-2xl font-bold ">Catering</h1>
                        <p className="text-base  mt-2">Marcem offers diverse catering options, ensuring culinary delights, tailored to clients' tastes and preferences.</p></li>
                </ul>
            </div>
        </div>
    )
}