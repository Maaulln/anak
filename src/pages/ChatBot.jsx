import ChatHeader from "../components/organisms/ChatHeader";
import ChatWindow from "../components/organisms/ChatWindow";
import ChatInputBar from "../components/molecules/ChatInputBar";
import ChatLayout from "../components/layout/ChatLayout";
import Avatar from "../assets/img/bot.png";
import { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "Hai, Kiki. Anak saya akhir-akhir ini susah fokus saat belajar...", sender: "Daffa", isOwn: true },
    { text: "Hai Ayah/Bunda! 😊 Saya paham...", sender: "Kiki", isOwn: false }
  ]);

  const handleSend = (text) => {
    setMessages([...messages, { text, sender: "Daffa", isOwn: true }]);
    // TODO: Integrasi chatbot AI response
  };

  return (
    <ChatLayout header={<ChatHeader name="Kiki" avatar={Avatar} />}> 
      <ChatWindow messages={messages} />
      <ChatInputBar onSend={handleSend} />
    </ChatLayout>
  );
}
