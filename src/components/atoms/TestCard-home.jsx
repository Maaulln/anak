import BoyReading from "@/assets/img/dashboard/boy-reading.png";
import CardTest from "@/atoms/CardTest";

// Komponen Test Card - Kartu biru dengan ilustrasi dan tombol "Mulai"
export default function TestCard() {
  return (
    <div className="mt-9">
      <div>
        <img src={BoyReading} alt="Ilustrasi Anak Membaca" className="absolute w-50 ml-55 mt-[-4rem]" />
        <p className="absolute text-5xl ml-10 mt-6 font-bold text-white ">Tes Yuk!</p>
        <p className="absolute text-white ml-10 mt-25 text-1xl">Cari tahu seberapa <br /> hebat kamu dengan tes <br /> seru kami</p>
        <button className="absolute w-24 ml-67 mt-30 bg-[#FF8810] text-white py-2 px-4 rounded-2xl">Mulai</button>
      <CardTest/>
      </div>
    </div>
  );
}
