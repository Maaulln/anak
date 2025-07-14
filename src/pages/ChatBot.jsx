import ChatHeader from "@/components/organisms/ChatHeader";
import ChatWindow from "@/components/organisms/ChatWindow";
import ChatInputBar from "@/components/molecules/ChatInputBar";
import ChatLayout from "@/components/layout/ChatLayout";
import Avatar from "@/assets/img/bot.png";
import { useState, useRef } from "react";

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
      const response = await fetch(
        "https://maaulln.app.n8n.cloud/webhook/anak",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: text,
            sender: "Daffa",
            sessionId: sessionId,
          }),
        }
      );

      if (!response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            text: `Server error: ${response.status} ${response.statusText}`,
            sender: "Kiki",
            isOwn: false,
          },
        ]);
        return;
      }

      const textResponse = await response.text();
      if (!textResponse) {
        setMessages((prev) => [
          ...prev,
          {
            text: "Maaf, server tidak mengirim balasan.",
            sender: "Kiki",
            isOwn: false,
          },
        ]);
        return;
      }

      // Treat response as plain text
      const replyText =
        textResponse.trim() || "Maaf, belum ada balasan dari Kiki.";
      const botMessage = {
        text: replyText,
        sender: "Kiki",
        isOwn: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Gagal mengambil balasan:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Oops! Terjadi kesalahan saat menghubungi Kiki.",
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
