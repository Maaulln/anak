export default function ChatBubble({ sender, text, isOwn }) {
  // Fungsi untuk memproses markdown sederhana (bold, italic, newlines, lists)
  const processMarkdown = (text) => {
    if (!text) return "";

    // Escape karakter HTML yang berbahaya untuk mencegah XSS
    const escapeHtml = (unsafe) => {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    // Escape dulu, baru proses markdown
    let processedText = escapeHtml(text);
    

    // Process baris-baris teks satu per satu
    const lines = processedText.split("\n");
    const processedLines = lines.map((line) => {
      // Check jika line adalah list item
      if (line.trim().match(/^-\s+(.+)$/)) {
        return line.replace(/^-\s+(.+)$/, "• $1");
        
      }
      return line;
    });

    // Gabung kembali teks dengan line breaks
    processedText = processedLines.join("<br>");

    // Mengganti **text** dengan <strong>text</strong> (bold)
    processedText = processedText.replace(
      /\*\*(.*?)\*\*/g,
      "<strong>$1</strong>"
    );

    // Mengganti *text* dengan <em>text</em> (italic)
    processedText = processedText.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Mengganti _text_ dengan <em>text</em> (italic alternative)
    processedText = processedText.replace(/_(.*?)_/g, "<em>$1</em>");

    return processedText;
  };

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={
        `max-w-[80%] px-4 py-3 rounded-2xl text-sm ${isOwn 
          ? 'bg-bluePrimary text-white rounded-br-none' 
          : 'bg-orangePrimary text-white rounded-bl-none'} shadow-xl`
      }>
        {sender && <p className="font-semibold mb-1">{sender}</p>}
        <p
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: processMarkdown(text) }}
        ></p>
      </div>
    </div>
  );
}
