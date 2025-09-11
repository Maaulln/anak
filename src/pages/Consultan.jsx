import MainLayout from "@/components/layout/MainLayout";
import doctors from "../components/atoms/Doctors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Consultan() {
  // Data dokter bisa kamu mapping dari API / array
  const navigate = useNavigate();
  // Function handle chat
  const handleChat = (doctor) => {
    // redirect + kirim data via state
    navigate(`/infodokter/${doctor.name}`, { state: doctor });
  };
  // State filter
  const [selectedExp, setSelectedExp] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSpec, setSelectedSpec] = useState("all");

  // Logic filter
  const filteredDoctors = doctors.filter(doc => {
    // Filter pengalaman
    if (selectedExp !== "all") {
      if (selectedExp === ">=5" && doc.pengalaman < 5) return false;
      if (selectedExp === "<5" && doc.pengalaman >= 5) return false;
    }

    // Filter harga
    if (selectedPrice !== "all") {
      if (selectedPrice === "<30000" && doc.harga >= 30000) return false;
      if (selectedPrice === ">=30000" && doc.harga < 30000) return false;
    }

    // Filter spesialis
    if (selectedSpec !== "all" && doc.spesialis !== selectedSpec) {
      return false;
    }

    return true;
  });

  return (
    <div className="w-[393px] bg-[#f2f7ff] p-4 [font-family:Poppins] flex flex-col justify-center mx-auto">
      {/* === Header === */}
      <div className="bg-[#14A9FF] text-white p-4 m-0 w-[393px] ml-[-14px]">
        <h1 className="text-xl font-semibold leading-[normal]">Pilih Dokter</h1>
      </div>
        <h5 className=" text-[#0288D1] font-bold mt-3">Cari Dokter Favoritmu</h5>
      {/* === Filter === */}
      <div className="flex gap-1 mt-4  text-[#0288D1] font-bold">
        {/* Filter Pengalaman */}
        <select 
          className="border border-[#6BCCF9] h-7 w-[100px] rounded-[10px] px-0 py-1 text-[12px]"
          value={selectedExp}
          onChange={(e) => setSelectedExp(e.target.value)}
        >
          <option value="all">Pengalaman</option>
          <option value="<5">Kurang dari 5 Tahun</option>
          <option value=">=5">5 Tahun atau lebih</option>
        </select>

        {/* Filter Harga */}
        <select 
          className="border border-[#6BCCF9] h-7 w-[100px] rounded-[10px] px-0 py-1 text-[12px]"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="all">Harga</option>
          <option value="<30000">Di bawah Rp 30.000</option>
          <option value=">=30000">Rp 30.000 ke atas</option>
        </select>

        {/* Filter Spesialis */}
        <select 
          className="border border-[#6BCCF9] h-7 w-[100px] rounded-[10px] px-0 py-1 text-[12px]"
          value={selectedSpec}
          onChange={(e) => setSelectedSpec(e.target.value)}
        >
          <option value="all">Spesialis</option>
          <option value="Umum">Umum</option>
          <option value="Anak">Anak</option>
        </select>
      </div>

      {/* === List Dokter === */}
      <div className="mt-4 flex flex-col gap-4">
        {filteredDoctors.map((doc, idx) => (
          <div 
            key={idx} 
            className="bg-white shadow rounded-xl flex p-4 gap-4 items-center"
          >
            {/* Foto Dokter */}
            <img 
              src={doc.image} 
              alt={doc.name} 
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Detail Dokter */}
            <div className="flex-1">
              <h2 className="text-blue-600 text-lg font-semibold">{doc.name}</h2>
              <p className="text-gray-500 text-sm">Dokter {doc.spesialis}</p>

              {/* Info kecil */}
              <div className="flex gap-2 mt-1">
                <span className="bg-[#E1F5FE] text-[#0288D1] text-xs px-2 py-1 rounded-full">
                  {doc.pengalaman} Tahun
                </span>
                <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
                  {doc.rating}
                </span>
              </div>

              {/* Harga */}
              <p className="text-[#FFA000] font-semibold mt-2 font-family:Poppins" >
                Rp {doc.harga.toLocaleString()}
              </p>
            </div>

            {/* Tombol Chat */}
            <button onClick={() => handleChat(doc)} className="bg-[#FF9149] text-white px-3 py-1 rounded-sm shadow-lg shadow-amber-800">
              Chat
            </button>
          </div>
        ))}

        {filteredDoctors.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            Tidak ada dokter sesuai filter
          </p>
        )}
      </div>
      <MainLayout/>
    </div>
  );
}
