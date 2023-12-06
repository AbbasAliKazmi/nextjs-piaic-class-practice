import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div className="bg-slate-300 text-white p-8 flex flex-col md:flex-row items-center w-full">
            {/* Text Box Section */}
            <div className="md:w-1/2 md:ml-4">
                <h1 className="text-4xl font-bold mb-4 italic text-black">The Palm Wedding Planners</h1>
                <p className="mb-4 italic text-black">Unforgettable Weddings, Designed with Love</p>
                <div className="flex space-x-4 justify-center">
                    <button className="bg-[#080808] text-white px-4 py-2 rounded-md transform transition-transform hover:scale-110">
                        Plan Wedding
                    </button>
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-md transform transition-transform hover:scale-110">
                        Check Work
                    </button>
                </div>
            </div>
            
            {/* Image Section */}
            <div className="md:w-1/2 mb-4 md:mb-0 shadow-lg">
                <Image
                    className="w-full h-auto rounded-md shadow-lg"
                    src="/bg-image.jpg" 
                    alt="Banner Image"
                    width={500}  // Adjust this value based on your image dimensions
                    height={300} // Adjust this value based on your image dimensions
                />
            </div>
        </div>
    );
};
