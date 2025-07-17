import ChatInputField from "../atoms/ChatInputField";
import SendButton from "../atoms/SendButton";
import { useState } from "react";

export default function ChatInputBar({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-white shadow-[0_-4px_8px_-4px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-2">
        <ChatInputField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey){
                e.preventDefault();
                handleSend();
            }}}
          placeholder="Tulis pesan di sini..."
        />
        <div className="self-end mb-1">
          <SendButton onClick={handleSend} />
        </div>
      </div>
    </div>
  );
}