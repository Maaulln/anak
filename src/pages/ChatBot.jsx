import ChatHeader from "@/components/organisms/ChatHeader";
import ChatWindow from "@/components/organisms/ChatWindow";
import ChatInputBar from "@/components/molecules/ChatInputBar";
import ChatLayout from "@/components/layout/ChatLayout";
import Avatar from "@/assets/img/bot.png";
import { useState, useRef } from "react";
import { sendMessageToWebhook } from "@/services/chatService";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);

  // Generate unique session ID
  const sessionId = useRef(
    `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  ).current;

  const handleSend = async (text) => {
    const userMessage = { text, sender: "Daffa", isOwn: true };
    setMessages((prev) => [...prev, userMessage]);

    console.log(`Sending message with session ID: ${sessionId}`);

    try {
      const replyText = await sendMessageToWebhook(text, sessionId);
      const botMessage = {
        text: replyText || "Maaf, belum ada balasan dari Kiki.",
        sender: "Kiki",
        isOwn: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: error.message || "Oops! Terjadi kesalahan saat menghubungi Kiki.",
          sender: "Kiki",
          isOwn: false,
        },
      ]);
    }
  };

  return (
    <ChatLayout header={<ChatHeader name="Kiki" avatar={Avatar} />}>
      <ChatWindow messages={messages} />
      <ChatInputBar onSend={handleSend} />
    </ChatLayout>
  );
}
