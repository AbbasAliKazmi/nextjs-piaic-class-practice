"use client"

import { Ribbon } from 'lucide-react';

  export default function MyPage() {
    return (
      <div className="bg-slate-600 h-screen w-screen flex flex-col">
        <div className="bg-black w-4/5 h-96 px-20 pb-20 pt-16 mx-auto">
          <Ribbon className='mx-auto w-20 h-20' />
          <h1 className="text-5xl font-bold text-white">Let’s talk about your</h1>
          <h1 className="text-5xl font-bold text-white mt-5">Dream Wedding</h1>
        </div>
      </div>
    );
  }
  
  