import { useNavigate } from "react-router-dom";
import ResetPasswordForm from "@/components/organisms/ResetPasswordForm";
import BackButton from "@/components/atoms/BackButton";
import logo from "@/assets/img/logo-anak.jpg";

export default function ResetPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header dengan back button */}
      <div className="absolute top-8 left-6 z-10">
        <BackButton onClick={() => navigate("/login")} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-start items-center px-6 pt-28">
        <div className="w-full max-w-sm">
          <img
            src={logo}
            alt="Logo ANAK"
            className="mx-auto w-[150px] h-auto mb-12"
          />
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
}
