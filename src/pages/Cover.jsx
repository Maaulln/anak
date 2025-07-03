import Logo from "../assets/img/Logo2.png"
import Polygon4 from "../assets/img/Componets-Cover/Polygon 4.svg"

export default function Cover() {
  return( 
    <div className="min-h-screen flex justify-center items-center bg-[#F4F4F4]">
      <div className="bg-linkBlue rounded-xl flex flex-col justify-center items-center px-6 pt-0 py-12 w-full lg:h-[50rem] max-w-md shadow-lg">
        <img src={Polygon4} alt="" className="flex" />
        <img src={Logo} alt="Logo ANAK" className="w-32 sm:w-24 md:w-20 lg:w-48 mb-6" />
        <p className="">hai</p>
      </div>
    </div>
  );
}