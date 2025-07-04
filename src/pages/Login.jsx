import LoginForm from "@/components/organisms/LoginForm";
import logo from "@/assets/img/logo-anak.jpg";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-white">
      <img src={logo} alt="Logo ANAK" className="w-32 sm:w-24 md:w-20 lg:w-16 mb-6" />
      <LoginForm />
    </div>
  );
}