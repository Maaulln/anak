import { FcGoogle } from 'react-icons/fc';

export default function GoogleButton({ type = "masuk", onClick }) {
  const isRegister = type === "daftar";
  return (
    <button
      className={`w-80 max-w-full py-4 rounded-full text-lg font-semibold shadow-md flex items-center justify-center gap-2 ${
        isRegister ? "bg-[#FF9800] text-white" : "bg-black text-white"
      }`}
      onClick={onClick}
    >
      {!isRegister && (
        <FcGoogle className="w-6 h-6" />
      )}
      {isRegister ? "Daftar dengan Google" : "Masuk dengan Google"}
    </button>
  );
}