import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi pengiriman email reset password
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
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

      <div className="w-full">
        <Input
          type="email"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="w-full">
        <Button
          type="submit"
          className="bg-orangePrimary hover:bg-orangeSecondary disabled:bg-gray-300"
          disabled={!email || isLoading}
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
