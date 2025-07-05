import LoginForm from "@/components/organisms/LoginForm";
import logo from "@/assets/img/logo-anak.jpg";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center px-6 pt-28 bg-white">
      <div className="w-full max-w-sm">
        <img
          src={logo}
          alt="Logo ANAK"
          className="mx-auto w-[200px] h-auto mb-16"
        />
        <LoginForm />
      </div>
    </div>
  );
}