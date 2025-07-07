export default function ChatBubble({ sender, text, isOwn }) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={
        `max-w-[80%] px-4 py-3 rounded-2xl text-sm ${isOwn 
          ? 'bg-bluePrimary text-white rounded-br-none' 
          : 'bg-orangePrimary text-white rounded-bl-none'}`
      }>
        {sender && <p className="font-semibold mb-1">{sender}</p>}
        <p className="whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}