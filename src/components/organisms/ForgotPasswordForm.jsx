import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  // Fungsi validasi email menggunakan regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Reset error ketika email berubah
  useEffect(() => {
    if (touched && email) {
      setError(validateEmail(email) ? "" : "Format email tidak valid");
    }
  }, [email, touched]);

  // Fungsi untuk simulasi API call dengan kemungkinan error
  const sendResetPasswordEmail = async (emailAddress) => {
    // Simulasi delay jaringan
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulasi random error (20% kemungkinan error)
        const shouldFail = Math.random() < 0.2;

        // Log untuk debugging
        console.log(`Attempting to send reset email to: ${emailAddress}`);

        if (shouldFail) {
          // Simulasi berbagai jenis error yang mungkin terjadi
          const errors = [
            { code: 404, message: "Email tidak terdaftar dalam sistem" },
            {
              code: 429,
              message: "Terlalu banyak permintaan, coba lagi nanti",
            },
            {
              code: 500,
              message: "Terjadi kesalahan pada server, coba lagi nanti",
            },
            { code: 503, message: "Layanan saat ini sedang tidak tersedia" },
          ];
          const randomError = errors[Math.floor(Math.random() * errors.length)];
          reject(randomError);
        } else {
          // Simulasi response sukses
          resolve({
            success: true,
            message: "Email reset password berhasil dikirim",
          });
        }
      }, 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);

    // Validasi email sebelum submit
    if (!email) {
      setError("Email tidak boleh kosong");
      return;
    }

    if (!validateEmail(email)) {
      setError("Format email tidak valid");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // Panggil fungsi API (simulasi)
      await sendResetPasswordEmail(email);
      // Jika berhasil, set submitted state
      setIsSubmitted(true);
    } catch (err) {
      // Handle error berdasarkan kode error
      console.error("Error sending reset email:", err);
      if (err.code === 404) {
        setError(err.message);
      } else if (err.code === 429) {
        setError(err.message);
      } else {
        // Default error message untuk error lainnya
        setError(err.message || "Gagal mengirim email. Silakan coba lagi.");
      }
    } finally {
      // Selalu set loading ke false setelah selesai, baik sukses atau error
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
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
            Email Terkirim!
          </h3>
          <p className="text-gray-600 text-sm">
            Kami telah mengirimkan link reset password ke email Anda. Silakan
            cek inbox atau folder spam.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            className="bg-orangePrimary hover:bg-orangeSecondary"
            onClick={() => navigate("/login")}
          >
            Kembali ke Login
          </Button>

          <button
            className="w-full py-3 text-orangePrimary border border-orangePrimary rounded-lg hover:bg-orange-50"
            onClick={() => {
              setIsSubmitted(false);
              setEmail("");
            }}
          >
            Kirim Ulang Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2 text-center">
        <h2 className="text-xl font-semibold text-gray-900">Lupa Password?</h2>
        <p className="text-gray-600 text-sm">
          Masukkan email Anda dan kami akan mengirimkan link untuk reset
          password
        </p>
      </div>

      {/* Error Message Banner */}
      {error && !touched && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex items-start">
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
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full">
        <div className="relative">
          <Input
            type="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            className={
              error && touched ? "border-red-500 focus:ring-red-200" : ""
            }
            required
          />
          {error && touched && (
            <div className="text-red-500 text-xs mt-1 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        <Button
          type="submit"
          className="bg-orangePrimary hover:bg-orangeSecondary disabled:bg-gray-300"
          disabled={!email || error || isLoading}
        >
          {isLoading ? "Mengirim..." : "Kirim Link Reset"}
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
