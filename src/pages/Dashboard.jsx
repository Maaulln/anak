import MainLayout from "../components/layout/MainLayout";


export default function Dashboard() {
  return (
    <>
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center w-[393px] h-[852px] bg-white">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600">Selamat datang di dashboard Anda!</p>
        <MainLayout/>
      </div>
    </div>
    </>
  );
}