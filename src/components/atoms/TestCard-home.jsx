import BoyReading from "../../assets/img/dashboard/boy-reading.png";

// Komponen Test Card - Kartu biru dengan ilustrasi dan tombol "Mulai"
export default function TestCard() {
  return (
    <div className="mx-4 mb-6">
      {/* Wrapper Card dengan gradient biru */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-4 text-white relative overflow-hidden">
        {/* Ornamen bulat transparan di pojok kanan atas */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />

        {/* Konten utama card */}
        <div className="relative z-10">
          {/* Baris: Teks + Gambar Ilustrasi */}
          <div className="flex flex-row justify-between items-start">
            {/* Teks ajakan */}
            <div>
              <h2 className="font-bold mb-2 font-poppins text-2xl">
                Test Yuk!
              </h2>
              <p className="text-blue-100 text-sm font-poppins mb-4">
                Cari tahu seberapa
                <br />
                hebat kamu dengan tes
                <br />
                seru kami
              </p>
            </div>

            {/* Gambar ilustrasi anak membaca */}
            <div className="relative w-full h-full">
              <img
                src={BoyReading}
                alt="Ilustrasi anak membaca"
                className="w-30 h-30 absolute -top-8 -right-5 z-20  bg-white rounded-b-[2rem] rounded-tl-[3rem]"
              />
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center space-x-4 mt-10 ">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-2xl w-25 h-10 text-sm font-bold absolute bottom-4 right-1   shadow-md transition duration-200 hover:scale-105">
              Mulai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
