"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function Header() {
    const [navbar, setNavbar] = useState(false);

    const toggleNavbar = () => {
      setNavbar(!navbar);
    };
    
    return (
    <div className="bg-cover bg-center bg-no-repeat relative p-8 flex flex-col md:flex-row items-center w-full md:h-[98%] h-[65%]" style={{ backgroundImage: "url('/bg-image2.jpg')" }}>
     <div>
        <nav className="w-full  fixed top-0 left-0 right-0 z-10">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href="/logo.svg">
                  <h2 className="md:text-4xl text-lg text-cyan-600 font-bold transform transition-transform hover:scale-110">The Palm</h2>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image src="/close.svg" width={30} height={30} alt="logo" />
                    ) : (
                      <Image
                        src="/hamburger-menu.svg"
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-6 text-2xl text-black font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                      About
                    </Link>
                  </li>
                  <li className="pb-6 text-2xl text-black font-bold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                      Blogs
                    </Link>
                  </li>
                  <li className="pb-6 text-2xl text-black font-bold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                      Contact
                    </Link>
                  </li>
                  <li className="pb-6 text-2xl text-black font-bold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    {/* Text Box Section */}
    <div className="md:w-1/2 md:ml-4">
        <h1 className="md:text-6xl text-3xl mt-6 font-bold mb-4 italic  text-black">The Palm Wedding Planners</h1>
        <p className="mb-4 italic md:text-2xl text-lg text-black">Unforgettable Weddings, Designed with Love</p>
        <div className="md:flex  space-x-4 justify-center">
            <button className="bg-[#080808] text-white md:px-4 px-2 md:py-2 py-1 mx-2 rounded-md transform transition-transform hover:scale-110">
                Plan Wedding
            </button>
            <button className="bg-cyan-600 text-white  md:px-4 px-2 md:py-2 py-1 rounded-md transform transition-transform hover:scale-110">
                Check Work
            </button>
        </div>
    </div>
</div>

    );
};
