import Input from "../atoms/Input";
import Button from "../atoms/Button";
import InputPasswordWithToggle from "../molecules/InputPasswordWithToggle";
import GoogleLoginButton from "../atoms/GoogleLoginButton";

export default function LoginForm() {
  return (
    <form className="space-y-5">
      <Input placeholder="Email atau nomor ponsel" />
      <InputPasswordWithToggle placeholder="Masukkan password" />
      
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-orange-500" />
          Ingat saya
        </label>
        <a href="#" className="text-blue-500">Lupa password?</a>
      </div>

      <Button className="bg-orange-500 hover:bg-orange-600">Masuk</Button>

      <div className="flex items-center gap-2">
        <hr className="flex-1 border-gray-300" />
        <span className="text-gray-400 text-sm">atau</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <GoogleLoginButton />
    </form>
  );
}