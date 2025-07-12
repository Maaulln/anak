import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Search } from "lucide-react";
import Avatar from "@/assets/img/avatar.png"
import  IconSearch  from "@/assets/img/icon-search.svg";
import Header from "@/components/atoms/header-home";
import RecentSection from "../components/atoms/RecentSection-home";
import TestCard from "@/components/atoms/TestCard-home";
import CategorySection from "@/components/atoms/CategorySection-home";

export default function Home() {
  return (
    <>
    <main className="pt-20 w-[393px] h-[852px] [background:#FFF] flex flex-col justify-center mx-auto">
      {/* space ekstra agar konten tidak tertutup navbar */}
      
      {/* Header Component */}
      <Header />
      
      {/* Test Card Component */}
      <TestCard />
      
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