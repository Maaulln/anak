import ChatBubble from "../atoms/ChatBubble";
export default function ChatMessage({ message }) {
  return (
    <ChatBubble
      text={message.text}
      sender={message.sender}
      isOwn={message.isOwn}
    />
  );
}