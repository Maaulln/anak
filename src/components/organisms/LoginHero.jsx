import Logo from "@/assets/img/Logo.png"
export default function LoginHero() {
  return (
    <div className="flex flex-col items-center mt-24">
      <img src={Logo} alt="Logo ANAK" className="w-[300px] h-auto mb-8" />
    </div>
  );
}