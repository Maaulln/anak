import { useEffect, useRef } from "react";

export default function ChatInputField({ value, onChange, onKeyDown, placeholder }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, window.innerHeight * 0.5) + "px";
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      rows={1}
      className="flex-1 resize-none overflow-y-auto bg-[#F4F4F4] max-h-[50vh] px-4 py-3 rounded-2xl text-sm focus:outline-none"
    />
  );
}