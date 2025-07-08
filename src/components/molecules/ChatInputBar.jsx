import ChatInputField from "../atoms/ChatInputField";
import SendButton from "../atoms/SendButton";
import { useState } from "react";

export default function ChatInputBar({ onSend }) {
  const [message, setMessage] = useState("");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className={`p-4 flex items-center bg-white shadow-[0_-4px_8px_-4px_rgba(0,0,0,0.1)] ${isMobile ? 'fixed bottom-0 inset-x-0' : 'sticky bottom-0'}`}>
      <ChatInputField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <SendButton onClick={handleSend} />
    </div>
  );
}