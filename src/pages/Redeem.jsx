import MainLayout from "@/components/layout/MainLayout";
import Topi from "@/assets/img/reedem/topi.jpg"
import Tas from "@/assets/img/reedem/tas.jpg"
import Rautan from "@/assets/img/reedem/rautan.png"
import Penggaris from "@/assets/img/reedem/penggaris.jpg"
import Pensil from "@/assets/img/reedem/pensil.jpg"
import Sepatu from "@/assets/img/reedem/sepatu.png"
import CartIconRedeem from "@/components/atoms/cart-icon-reedem"
import Koin from "@/assets/img/koin.png"




export default function Konsultan() {
  const point = 10000;
  const barang = [
    {
      id: 1,
      name: 'pensil',
      price: 1000,
      image: Pensil,
    },
    {
      id: 2,
      name: 'Rautan',
      price: 2000,
      image: Rautan,
    },
    {
      id: 3,
      name: 'Penggaris',
      price: 3000,
      image: Penggaris,
    },
    {
      id: 4,
      name: 'Sepatu',
      price: 1000,
      image: Sepatu,
    },
    {
      id: 5,
      name: 'Topi',
      price: 5000,
      image: Topi,
    },
    {
      id: 6,
      name: 'Tas',
      price: 6000,
      image: Tas,
    }
  ]
  return (
    <>
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full bg-[#F0F8FF]">
        <div className="tagname mt-9 flex flex-wrap gap-20 justify-end ">
          <div className="flex">
          <CartIconRedeem />
          <h2 className="font-bold text-[#46A5F5] font-poppins">tukarkan poinmu</h2>
          </div>
          <div className="ml-15">
            <h1>==</h1>
          </div>
        </div>
        <div className="flex justify-between mt-2.5">
            <h2>total poin</h2>
            <h2 className="ml-42 font-semibold not-italic flex">
              <img src={Koin} alt="koin" className="w-5 h-5 mt-0 mr-1" />
              {point}</h2>
        </div>
        <div className="barang grid grid-cols-2 gap-8  mt-9">
          {barang.map((item) => (
            <div className=" w-[150px] h-[205px] flex flex-col items-center justify-center bg-white rounded-2xl " key={item.id} >
              <img src={item.image} alt={item.name} className="w-[100px] h-[100px]" />
              <h2 className="font-semibold">{item.name}</h2>
              <h1 className="text-[10px] p-1 rounded-2xl bg-linear-to-r from-orangePrimary to-orange-400 text-white">{item.price} poin</h1>
              <button className="bg-blue-500 w-[70px] h-[30px] rounded-md mt-3 text-white not-italic font-semibold bg-[linear-gradient(90deg,#60B5FF_-48.03%,#0079DA_165.13%)]">ambil</button>
            </div>
          ))}
        </div>
        <MainLayout/>
      </div>
    </div>
    </>
  );
}