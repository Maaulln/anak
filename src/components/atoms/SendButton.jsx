import { IoSend } from "react-icons/io5";
export default function SendButton({ onClick }) {
  return (
    <button onClick={onClick} className="ml-2 text-primary text-xl">
      <IoSend />
    </button>
  );
}