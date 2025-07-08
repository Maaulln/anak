export default function ChatInputField(props) {
  return (
    <input
      type="text"
      className="flex-1 bg-[#F4F4F4] px-4 py-3 rounded-full text-sm focus:outline-none"
      placeholder="Type a message..."
      {...props}
    />
  );
}