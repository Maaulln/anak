import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toggle from "../atoms/Toggle";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import InputPasswordWithToggle from "../molecules/InputPasswordWithToggle";
import GoogleLoginButton from "../atoms/GoogleLoginButton";
import Survey from "@/pages/Survey";

export default function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
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
          <Toggle
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            label="Ingat saya"
          />
        </label>
        <a href="#" className="text-linkBlue">Lupa password?</a>
      </div>

      <div className="w-full">
        {/* <Button className="bg-orangePrimary hover:bg-orangeSecondary"><a href="">masuk</a></Button> */}
        <Button
    className="bg-orangePrimary hover:bg-orangeSecondary"
    onClick={(e) => {
      e.preventDefault();
      navigate("/survey");
    }}
  >
    masuk
  </Button>
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