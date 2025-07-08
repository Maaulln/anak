import { HiChevronLeft } from "react-icons/hi";

export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="z-10 p-2 rounded-full hover:bg-blue-100 active:bg-blue-200 transition"
      aria-label="Kembali"
    >
      <HiChevronLeft className="text-blue-500 text-3xl" />
    </button>
  );
}