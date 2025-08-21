import MainLayout from "@/components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import Avatar from "@/assets/img/avatar.png"
import Level from "@/assets/img/level.png"
import EyesProfile from "@/components/atoms/Eyesprofile";
import ParentIcon from "@/components/atoms/Parent-icon";
import Logout from "@/components/atoms/Logout-profile";
import Koin from "@/assets/img/koin.png"
import SettingProfile from "@/components/atoms/Setting-profile";
import RedeemIcon from "@/components/atoms/redeem-icon";
export default function Profile() {
  const navigate = useNavigate();
  const Points = 4500;
  const Teman = 10;
  return (
    <div className="w-full h-[852px] bg-[#FF8810] mx-auto flex items-center justify-center flex-col lg:w-[425px]">

      <p className="mt-[3rem] text-amber-50 font-poppins font-bold">Profile</p>
      {/* Container putih dalam dengan radius atas */}
      <div className="bg-white w-full h-full rounded-t-[2rem] pt-6 px-6 flex flex-col items-center mt-[1rem]">
        
        {/* Judul Profile */}

        {/* Foto Avatar (gunakan asset-mu sendiri) */}
        <img
          src={Avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-orangePrimary mb-2"
        />

        {/* Nama Pengguna */}
        <h3 className="text-orangePrimary font-bold text-xl mb-4 font-display">Daffa</h3>

        {/* Kartu Level + Point + Teman */}
        <div className="bg-orange-100 w-full rounded-[2rem] p-3 mb-4 flex justify-between items-center border-orangePrimary border-2">
          {/* Gambar Level (ikon/label) */}
          <img src={Level} alt="Level" className="w-16" />

          {/* Total Poin */}
          <div className="text-center">
            <p className="text-orange-500 font-bold font-display">
              <img src={Koin} alt="koin" className="w-4 h-4 mr-1 inline-block"/>
              {Points}
            </p>
            <p className="text-sm text-gray-600 font-display ">Total Points</p>
          </div>

          {/* Jumlah Teman */}
          <div className="text-center">
            <p className="text-orange-500 font-bold">{Teman}</p>
            <p className="text-sm text-gray-600">Teman</p>
          </div>
        </div>

        {/* Gaya Belajar */}
        <div className="bg-blue-400 w-full rounded-xl p-4 mb-4 text-white flex items-center gap-3">
          {/* Ikon mata atau gaya belajar */}
          <EyesProfile className="w-12 h-10 bg-amber-50 p-3 rounded-2xl"/>
          <div>
            <p className="font-display">Gaya Belajar</p>
            <p className="text-sm">Visual</p>
          </div>
        </div>

        <div className="w-full bg-[#F1DDF6] rounded-2xl">
          {/* Tombol Orang Tua */}
        <div className="bg-[#F1DDF6] w-full rounded-xl p-4 mb-3 flex items-center gap-3 shadow-md hover:scale-105 cursor-pointer">
          <ParentIcon className="w-9 h-9 p-1 bg-orange-100 rounded-full" fill="#AE58F4"/>
          <p className="font-bold text-[#AE58F4]">Orang Tua</p>
        </div>

        {/* Tombol Setting */}
        <div className="bg-[#F1DDF6] w-full rounded-xl p-4 flex items-center gap-3 shadow-md hover:scale-105 cursor-pointer">
          <SettingProfile className="w-9 h-9 p-1 bg-orange-100 rounded-full"/>
          <p className="font-bold text-[#AE58F4]">Setting</p>
        </div>
        {/* tombol redeem */}
        <div className="bg-[#F1DDF6] w-full rounded-xl p-4 flex items-center gap-3 shadow-md hover:scale-105 cursor-pointer">
          <RedeemIcon className="w-9 h-9 p-1 bg-orange-100 rounded-full"/>
          <p className="font-bold text-[#AE58F4]">Redeem</p>
        </div>

        {/* Tombol Keluar */}
        <div className="bg-[#F1DDF6] w-full rounded-xl p-4 flex items-center gap-3 shadow-md hover:scale-105 cursor-pointer">
          <Logout className="w-9 h-9 p-1 bg-orange-100  rounded-full" stroke="#AE58F4"/> 
          <p className="font-bold text-[#AE58F4]" onClick={() => navigate("/login")}>Keluar</p>
        </div>
        </div>
      <MainLayout />
      </div>
    </div>
  );
}
