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

  // Simulasi API call untuk reset password
  const resetPasswordAPI = async (token, newPassword) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Log untuk debugging
        console.log(`Attempting to reset password with token: ${token}`);
        console.log(`New password length: ${newPassword.length}`);

        // Simulasi validasi token
        if (!token || token === "invalid-token") {
          reject({ code: 401, message: "Token tidak valid atau kedaluwarsa" });
          return;
        }

        // Simulasi validasi password
        if (newPassword.length < 8) {
          reject({ code: 400, message: "Password terlalu pendek" });
          return;
        }

        // Simulasi random error (15% kemungkinan error)
        const shouldFail = Math.random() < 0.15;

        if (shouldFail) {
          // Simulasi berbagai jenis error
          const errors = [
            { code: 400, message: "Data yang dikirim tidak valid" },
            {
              code: 500,
              message: "Terjadi kesalahan pada server, coba lagi nanti",
            },
            {
              code: 503,
              message: "Layanan reset password sedang tidak tersedia",
            },
          ];
          const randomError = errors[Math.floor(Math.random() * errors.length)];
          reject(randomError);
        } else {
          // Simulasi response sukses
          resolve({ success: true, message: "Password berhasil diperbarui" });
        }
      }, 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      return;
    }

    setIsLoading(true);

    try {
      // Panggil API reset password dengan token dan password baru
      await resetPasswordAPI(token, password);
      // Jika berhasil, tampilkan pesan sukses
      setIsSuccess(true);
    } catch (err) {
      console.error("Error resetting password:", err);
      // Update objek errors untuk menampilkan pesan error
      setErrors((prev) => ({
        ...prev,
        server: err.message || "Gagal mereset password. Silakan coba lagi.",
      }));
    } finally {
      setIsLoading(false);
    }
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

      {/* Error Message Banner untuk error server */}
      {errors.server && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{errors.server}</p>
            </div>
          </div>
        </div>
      )}

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
