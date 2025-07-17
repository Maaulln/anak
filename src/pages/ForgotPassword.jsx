import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import BackButton from "../components/atoms/BackButton";
import ROUTES from "../routes/index";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <AuthLayout>
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Email Terkirim!
              </h2>
              <p className="text-gray-600 mb-4">
                Kami telah mengirimkan link reset password ke email Anda:
              </p>
              <p className="text-sm font-medium text-gray-800 mb-6">{email}</p>
              <p className="text-sm text-gray-600 mb-6">
                Silakan cek inbox atau folder spam Anda dan ikuti instruksi
                untuk reset password.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-orangePrimary hover:bg-orangeSecondary w-full"
              >
                Kirim Ulang Email
              </Button>

              <Button
                onClick={() => window.history.back()}
                className="bg-gray-500 hover:bg-gray-600 w-full"
              >
                Kembali ke Login
              </Button>
            </div>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <BackButton onClick={() => window.history.back()} />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Lupa Password?
            </h1>
            <p className="text-gray-600">
              Masukkan email Anda dan kami akan mengirimkan link untuk reset
              password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div className="w-full">
              <Button
                type="submit"
                disabled={isLoading || !email}
                className="bg-orangePrimary hover:bg-orangeSecondary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Mengirim...
                  </div>
                ) : (
                  "Kirim Link Reset"
                )}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Ingat password Anda?{" "}
              <Link to={ROUTES.LOGIN} className="text-linkBlue hover:underline">
                Kembali ke Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
