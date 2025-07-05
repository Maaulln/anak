import Input from "../atoms/Input";
import Button from "../atoms/Button";
import InputPasswordWithToggle from "../molecules/InputPasswordWithToggle";
import GoogleLoginButton from "../atoms/GoogleLoginButton";

export default function LoginForm() {
  return (
    <form className="space-y-5 w-full max-w-md">
      <div className="w-full">
        <Input placeholder="Email atau nomor ponsel" />
      </div>
      <div className="w-full">
        <InputPasswordWithToggle placeholder="Masukkan password" />
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orangePrimary transition" />
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5" />
          </div>
          <span className="text-sm text-gray-700">Ingat saya</span>
        </label>
        <a href="#" className="text-linkBlue">Lupa password?</a>
      </div>

      <div className="w-full">
        <Button className="bg-orangePrimary hover:bg-orangeSecondary">Masuk</Button>
      </div>

      <div className="flex items-center gap-2">
        <hr className="flex-1 border-gray-300" />
        <span className="text-gray-400 text-sm">atau</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <div className="w-full">
        <GoogleLoginButton />
      </div>
    </form>
  );
}