import CloudBackground from "@/components/organisms/CloudBackground";

export default function ChatLayout({ children, header }) {
  return (
    <div className="flex flex-col h-screen bg-linear-to-t from-white-900 to-[#90D7F5] relative overflow-hidden">
      <CloudBackground className="z-0" />
      {header && <div className="relative z-10">{header}</div>}
      <main className="flex-1 overflow-y-auto relative z-10">
        <div className="max-w-md mx-auto h-full flex flex-col">
          {children}
        </div>
      </main>
    </div>
  );
}