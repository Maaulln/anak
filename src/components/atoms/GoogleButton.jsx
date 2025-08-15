import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

export default function GoogleButton({ type = "masuk", onClick }) {
  const isRegister = type === "daftar";

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Selamat datang, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during authentication:", error);
      alert("Autentikasi gagal. Silakan coba lagi.");
    }
  };

  return (
    <button
      className={`w-80 max-w-full py-4 rounded-full text-lg font-semibold shadow-md flex items-center justify-center gap-2 ${
        isRegister ? "bg-[#FF9800] text-white" : "bg-black text-white"
      }`}
      onClick={handleGoogleAuth}
    >
      {!isRegister && <FcGoogle className="w-6 h-6" />}
      {isRegister ? "Daftar dengan Google" : "Masuk dengan Google"}
    </button>
  );
}