import BackButton from "../atoms/BackButton";
import Avatar from "../atoms/Avatar";

export default function ChatHeader({ name, avatar, onBack }) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto w-full bg-white shadow">
        <BackButton onClick={onBack} />

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <h2 className="font-semibold text-lg text-black">{name}</h2>
        </div>

        <Avatar src={avatar} alt="avatar" />
      </div>
    </div>
  );
}