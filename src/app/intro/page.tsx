

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex justify-center items-center md:h-screen">
      <div className="text-center text-black bg-slate-300 mx-10 md:mx-48 w-[80%] md:w-[65%] md:h-[65%] h-[75%]  md:p-6 p-5  shadow-xl">
        <h1 className="font-bold text-2xl md:text-4xl text-cyan-600 md:mb-4 mb-2">Your Dream Starts Here</h1>
        <p className="text-sm md:text-lg">
        Looking for a wedding event planner in Karachi or a dedicated birthday event 
        planner in Karachi? Your search ends with Marcem Event Planner. We specialize in bringing your event
        dreams to life, infusing each occasion with a natural charm that’s truly enchanting. Whether it’s the 
        grandeur of a wedding or the joy of a birthday celebration, our professional team pays meticulous 
        attention to every detail, making your journey to an extraordinary event effortless and absolutely perfect.
        </p>
        <p className="text-sm md:text-lg">
        At Palm Event Planner, we offer more than just event planning services; we bring enchantment to 
        your celebrations. Experience the magic of professionally executed events with a warm and inviting 
        touch. It’s time to make your next event extraordinary. Contact us now, and let’s start crafting
        unforgettable moments together.
        </p>
      </div>
    </div>
  );
}