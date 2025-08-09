import HeaderParent from "@/components/atoms/Header-Parent"
import ActivitySection from "@/components/atoms/Activity-Section";
import DailyProgressParent from "@/components/atoms/DailyProgress-parent";
import MainLayoutParent from "@/components/layout/MainLayout-Parent";


export default function Dashboard() {
  return (
    <div className="w-[393px] h-[852px] bg-white mx-auto p-4 font-sans">
      
      {/* Bagian Header */}
      <HeaderParent />
      {/* Bagian Progress Harian */}
      <DailyProgressParent />
      {/* Bagian Aktivitas */}
      <ActivitySection />
      <MainLayoutParent/>
    </div>
  );
}
