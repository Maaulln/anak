import LoginHero from "@/components/organisms/LoginHero";
import LoginActions from "@/components/molecules/LoginActions";
import cloud from "@/assets/img/Componets-Cover/3.png";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-linear-to-t from-white-500 to-[#90D7F5] relative overflow-hidden">
      <div className="absolute top-110 left-0 right-0 bottom-0 bg-white rounded-t-full opacity-80 blur-sm transform scale-x-150"></div>

      {/* Awan background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <img src={cloud} alt="" className="absolute left-0 top-80 w-40 opacity-50" />
        <img src={cloud} alt="" className="absolute left-50 bottom-70 w-80 opacity-70" />
        <img src={cloud} alt="" className="absolute left-50 bottom-160 w-60 opacity-60" />
        {/* ...awan lain jika perlu... */}
      </div>
      {/* Konten utama di atas awan */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <LoginHero />
        <LoginActions />
      </div>
    </div>
  );
}