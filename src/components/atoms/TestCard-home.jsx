import React from 'react';

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
              <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">84</div>
              <div className="flex space-x-1">
                {/* Emoji bisa diganti dengan icon jika perlu */}
                <span>😊</span>
                <span>😊</span>
                <span>😊</span>
              </div>
            </div>

            {/* Score 90 */}
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">90</div>
            <span className="text-sm">Nilai</span>
          </div>
        </div>
      </div>
    </div>
  );
}
