import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import InputPasswordWithToggle from "../molecules/InputPasswordWithToggle";
import Button from "../atoms/Button";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const validatePassword = () => {
    const newErrors = {};

    if (password.length < 8) {
      newErrors.password = "Password minimal 8 karakter";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      return;
    }

    setIsLoading(true);

    // Simulasi reset password
    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
    }, 2000);
  };

  if (!token) {
    return (
      <div className="space-y-6 w-full max-w-md text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Link Tidak Valid
          </h3>
          <p className="text-gray-600 text-sm">
            Link reset password tidak valid atau sudah kedaluwarsa.
          </p>
        </div>

        <Button
          className="bg-orangePrimary hover:bg-orangeSecondary"
          onClick={() => navigate("/forgot-password")}
        >
          Minta Link Baru
        </Button>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="space-y-6 w-full max-w-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Password Berhasil Direset!
          </h3>
          <p className="text-gray-600 text-sm">
            Password Anda telah berhasil diperbarui. Silakan login dengan
            password baru.
          </p>
        </div>

        <Button
          className="bg-orangePrimary hover:bg-orangeSecondary"
          onClick={() => navigate("/login")}
        >
          Login Sekarang
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2 text-center">
        <h2 className="text-xl font-semibold text-gray-900">Reset Password</h2>
        <p className="text-gray-600 text-sm">Masukkan password baru Anda</p>
      </div>

      <div className="w-full">
        <InputPasswordWithToggle
          placeholder="Password baru"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      <div className="w-full">
        <InputPasswordWithToggle
          placeholder="Konfirmasi password baru"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="w-full">
        <Button
          type="submit"
          className="bg-orangePrimary hover:bg-orangeSecondary disabled:bg-gray-300"
          disabled={!password || !confirmPassword || isLoading}
        >
          {isLoading ? "Memperbarui..." : "Perbarui Password"}
        </Button>
      </div>

      <div className="text-center">
        <button
          type="button"
          className="text-linkBlue text-sm hover:underline"
          onClick={() => navigate("/login")}
        >
          Kembali ke Login
        </button>
      </div>
    </form>
  );
}
