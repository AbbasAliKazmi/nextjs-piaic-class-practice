import { useState } from 'react';
import Logo from './logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [ navbar, setNavbar] = useState(false);
    return (
        // <nav className="navbar flex flex-wrap p-3 bg-slate-300 m-5 rounded-full justify-between">
        //     <div className="navbar__logo align-middle">
        //         <img src={logo} alt="logo" />
        //     </div>
        //     <div className="navbar__menu">
        //         <ul className="flex gap-x-10  menu-item text-2xl font-bold">
        //             <button className="bg-slate-400 p-3 rounded-full">Products</button>
        //             <button className="bg-slate-400 p-3 rounded-full">Home</button>
        //             <button className="bg-slate-400 p-3 rounded-full">Services</button>
        //             <button className="bg-slate-400 p-3 rounded-full">Contact</button>
        //         </ul>
        //     </div>
        //     <div className="navbar__search flex">
        //         <input
        //             type="text"
        //             placeholder="Search Bar"
        //             className="bg-slate-400 p-3 rounded-full"
        //         />
        //     </div>
        // </nav>
        <div>
            <nav className='w-full bg-black fixed top-0 left-0 right-0 z-10'>
                <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                    <div>
                        <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                            {/*logo*/}
                            <Link href='/'>
                                <h2 className='text-2xl text-cyan-600 font-bold'>Logo</h2>
                            </Link>
                            {/* hamburger menu */}
                            <div className='md:hidden'>
                                <button type='button' className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400'>
                                    <button>
                                        {navbar ? (
                                            <Image src="./close.svg" alt='logo' width={30} height={30} />
                                        ) : (
                                            <Image
                                                src='/menu.svg'
                                                alt='logo'
                                                width={30}
                                                height={30}
                                                className='focus:border-none active:border-none'
                                            />
                                        )}
                                    </button>
                                    <>
                                        {navbar ? (
                                            <Image src="./close.svg" alt='logo' width={30} height={30} />
                                        ) : (
                                            <Image
                                                src='/menu.svg'
                                                alt='logo'
                                                width={30}
                                                height={30}
                                                className='focus:border-none active:border-none'
                                            />
                                        )}
                                    </>
                                </button>
                                {navbar ? (
                                    <Image src="./close.svg" alt='logo' width={30} height={30} />
                                ) : (
                                    <Image
                                        src='/menu.svg'
                                        alt='logo'
                                        width={30}
                                        height={30}
                                        className='focus:border-none active:border-none'
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
        </div>
    )