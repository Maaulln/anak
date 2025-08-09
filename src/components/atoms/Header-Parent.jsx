export default function HeaderParent() {
  return (
    <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Selamat Datang</p>
          <h1 className="text-xl font-bold">Bu Yunia !</h1>
          <p className="text-gray-400 text-sm">Senang melihatmu kembali!</p>
        </div>
        {/* Avatar */}
        <img
          src="https://via.placeholder.com/50"
          alt="avatar"
          className="w-14 h-14 rounded-full"
        />
      </div>
  );
}