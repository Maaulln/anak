import { useLocation, useNavigate } from "react-router-dom";
export default function InfoDokter(){
  const { state } = useLocation(); // data dokter dikirim lewat navigate
  const navigate = useNavigate();

  if (!state) {
    return <p className="p-4">Data dokter tidak ditemukan</p>;
  }

  return (
    <div className="w-[393px] bg-white p-4 [font-family:Poppins] flex flex-col justify-center mx-auto">
      {/* Header */}
      <div className="bg-[#14A9FF] text-white p-4 m-0 w-[393px] ml-[-14px] flex">
      <button onClick={() => navigate(-1)} className="">
        ← 
      </button>
      <h6 className="ml-2">Kenalan Sama Dokter</h6>
      </div>

      {/* Foto */}
      <div className="flex flex-col items-center mt-3">
        <img src={state.image} alt={state.name} className="w-28 h-28 rounded-full object-cover" />
        <h1 className="text-blue-600 text-xl font-semibold mt-2">{state.name}</h1>
        <p className="text-gray-500">{state.spesialis}</p>
        <div className="flex">
          <p className="text-gray-500 mr-4">Pengalaman: {state.pengalaman} Tahun</p>
          <p className="text-gray-500">Rating: {state.rating}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <p className="text-orange-500 font-bold border border-orange-300 rounded-lg px-3 py-2 inline-block">
          Biaya Konsultasi : Rp {state.harga.toLocaleString()}
        </p>
      </div>

      {/* Detail lain bisa ditambah */}
      <div className="mt-6 flex flex-col gap-3">
        <div className="bg-green-100 p-3 rounded-lg">
          <p className="font-semibold">Lulusan Dari</p>
          <p>Universitas Veteran Jawa Timur</p>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="font-semibold">Tempat Praktik</p>
          <p>RS Muhammadiyah Surabaya</p>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="font-semibold">Nomor Izin Praktik</p>
          <p>NIP-DR-2025-06-0023</p>
        </div>
      </div>

      {/* Tombol Mulai Ngobrol */}
      <button className="bg-orange-500 text-white w-full py-3 rounded-lg mt-6">
        MULAI NGOBROL!
      </button>
    </div>
  );
}