export default function ChatLayout({ children, header }) {
  return (
    <div className="flex flex-col h-screen bg-white">
      {header && <div>{header}</div>}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto h-full flex flex-col">
          {children}
        </div>
      </main>
    </div>
  );
}