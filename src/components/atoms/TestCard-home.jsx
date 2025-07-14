import React from 'react';
import Avatar from "@/assets/img/avatar.png";
import Avatar1 from "@/assets/img/avatar1.png";
import Avatar2 from "@/assets/img/avatar2.png";

// Komponen Test Card - Card biru untuk test utama
export default function TestCard() {
  return (
    <div className="mx-4 mb-6 ">
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-4 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>

        {/* Konten Card */}
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-2">Test Yuk</h2>
          <p className="text-blue-100 text-sm mb-4">Ayo cari tahu seberapa hebat kamu..!!!</p>

          {/* Score Section */}
          <div className="flex items-center space-x-4">
            {/* Score 84 */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {/* Emoji bisa diganti dengan icon jika perlu */}
                <img src={Avatar} alt="" className='w-7 h-7 bg-amber-50 rounded-full'/>
                <img src={Avatar1} alt="" className='w-7 h-7 bg-amber-50 rounded-full'/>
                <img src={Avatar2} alt="" className='w-7 h-7 bg-amber-50 rounded-full'/>
                <span className='bg-[#FFD700] w-7 h-7 rounded-full flex items-center justify-center text-[0.8rem]'>4+</span>
              </div>
            </div>

            {/* Score 90 */}
            {/* <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">masuk</div> */}
            <button
              className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold absolute bottom-4 right-4 my-[-1rem] shadow-none drop-shadow-[0_6px_12px_rgba(251,146,60,0.5)] cursor-pointer transition duration-200 hover:scale-105"
            >
              Mulai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
