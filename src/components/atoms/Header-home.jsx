import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconSearch from "@/assets/img/icon-search.svg";
import Avatar from "@/assets/img/avatar.png";
import Profile from '@/pages/Profile';

// Komponen Header - Bagian atas dengan greeting dan profile
export default function Header() {
  const Nama = "Daffa"; // Nama pengguna, bisa diambil dari state atau props
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div>
        <p className="text-sm text-gray-600">Selamat Datang</p>
        <h1 className="text-lg font-bold text-gray-900">{Nama}</h1>
      </div>
      <div className="flex items-center space-x-3">
        <button className="mx-0 rounded-full ">
          <img src={IconSearch} alt="" className='pt-4 cursor-pointer' />
        </button>
        {/* Profile Avatar */}
        <div
          className="w-10 h-10 rounded-full overflow-hidden bg-grayLabel cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <img
            src={Avatar}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
