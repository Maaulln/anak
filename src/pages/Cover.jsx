import Logo from "../assets/img/Logo2.png"
import G1 from "../assets/img/Componets-Cover/Group 1.svg"
import Polygon4 from "../assets/img/Componets-Cover/Polygon 4.svg"
import Polygon5 from "../assets/img/Componets-Cover/Polygon 5.svg"


export default function Cover({ fadeOut }) {
  return( 
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4 ${fadeOut ? "opacity-0 backdrop-blur-sm" : "opacity-100 backdrop-blur-none"'>
      {/* Mobile Container - Centered for Desktop */}
      <div className="relative w-full max-w-sm h-[40rem] lg:h-[800px] bg-linkBlue rounded-3xl overflow-hidden shadow-2xl">
        <img src={Polygon4} alt="" />
        {/* Top Left Triangle */}
        <div className="absolute top-8 left-6">
          {/* Placeholder for orange triangle */}
          <div className="w-8 h-8 bg-orange-500 transform rotate-45"></div>
        </div>

        {/* Top Right Triangle */}
        <div className="absolute top-12 right-8">
          {/* Placeholder for red triangle */}
          <img src={Polygon5} alt="" />
          <div className="w-6 h-6 bg-red-500 transform rotate-12"></div>
        </div>

        {/* Left Side Purple Diamond */}
        <div className="absolute top-20 left-4">
          {/* Placeholder for purple diamond */}
          <img src={G1} alt="" />
          <div className="w-10 h-10 bg-purple-600 transform rotate-45"></div>
        </div>

        {/* Right Side Blue Square */}
        <div className="absolute top-32 right-6">
          {/* Placeholder for blue square */}
          <div className="w-12 h-12 bg-blue-600 rounded-sm"></div>
        </div>

        {/* Left Bottom Pink Triangle */}
        <div className="absolute bottom-40 left-8">
          {/* Placeholder for pink triangle */}
          <div className="w-7 h-7 bg-pink-500 transform -rotate-12"></div>
        </div>

        {/* Right Bottom Orange Triangle */}
        <div className="absolute bottom-32 right-4">
          {/* Placeholder for orange triangle */}
          <div className="w-9 h-9 bg-orange-400 transform rotate-45"></div>
        </div>

        {/* Bottom Left Yellow Shape */}
        <div className="absolute bottom-20 left-6">
          {/* Placeholder for yellow shape */}
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Additional Small Triangles */}
        <div className="absolute  left-12">
          <div className="w-5  rotate-30"></div>
        </div>

        <div className="absolute top-60 right-12">
          <div className="w-4 h-4 bg-purple-400 transform -rotate-45"></div>
        </div>

        {/* Central Avatar Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          {/* Avatar Circle with Character */}
          <div className="relative w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center mb-4">
            {/* Placeholder for character logo/avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center">
              <div className="text-white text-xs font-bold"><img src={Logo} alt="" /></div>
            </div>

            {/* Decorative elements around avatar */}
            <div className="absolute  rounded-full"></div>
            <div className="absolute  rounded-full"></div>
            <div className="absolute  rounded-full"></div>
            <div className="absolute  rounded-full"></div>
            <div className="absolute top-2 -right-4  rounded-full"></div>
            <div className="absolute bottom-3 -left-4 w-3 h-3 bg-red-400 rounded-full"></div>
          </div>

          {/* ANAK Text */}
          <div className="text-white text-2xl font-bold tracking-wider shadow-lg"></div>
        </div>

        {/* Additional floating elements for more dynamic look */}
        <div className="absolute  left-20">
          <div className="w-3  rounded-full"></div>
        </div>

        <div className="absolute top-80 right-20">
          <div className="w-2  rounded-full"></div>
        </div>

        <div className="absolute bottom-60 left-16">
          <div className="w-4 h-4 bg-white opacity-60 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}