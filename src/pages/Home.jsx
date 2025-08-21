import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/atoms/header-home";
import RecentSection from "@/components/atoms/RecentSection-home";
import TestCard from "@/components/atoms/TestCard-home";
import CategorySection from "@/components/atoms/CategorySection-home";

export default function Home() {
  return (
    <>
    <main className=" w-[393px]  [background:#FFF] flex flex-col justify-center mx-auto">      
      {/* Header Component */}
      <Header />
      {/* Test Card Component */}
      <TestCard/>
      {/* Category Section Component */}
      <CategorySection />
      {/* Recent Section Component */}
      <RecentSection />
      {/* Navbar Component - Fixed di bawah */}
      <MainLayout />
    </main>
    </>
  );
}