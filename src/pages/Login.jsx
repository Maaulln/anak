import LoginHero from "@/components/organisms/LoginHero";
import LoginActions from "@/components/molecules/LoginActions";
import CloudBackground from "@/components/organisms/CloudBackground";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-linear-to-t from-white-900 to-[#90D7F5] relative overflow-hidden">
      <div className="absolute top-110 left-0 right-0 bottom-0 bg-white rounded-t-full opacity-80 blur-sm transform scale-x-150"></div>

      <CloudBackground className="z-0" />
      {/* Konten utama di atas awan */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <LoginHero />
        <LoginActions />
      </div>
    </div>
  );
}