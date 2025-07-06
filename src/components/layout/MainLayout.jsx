import React, { useState } from "react";
import { Home, Users, BarChart3, User } from "lucide-react";

export default function MainLayout({ children }) {
  const [activeTab, setActiveTab] = useState("beranda");

  return (
    <>
      <div className="pb-20">{children}</div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around py-2">
          <button
            onClick={() => setActiveTab("beranda")}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "beranda" ? "text-orangePrimary" : "text-darkGray"
            }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs">Beranda</span>
          </button> 
          <button
            onClick={() => setActiveTab("Konsultas")}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "Konsultas" ? "text-orangePrimary" : "text-darkGray"
            }`}
          > 
            <Users className="w-5 h-5 mb-1" />
            <span className="text-xs">Konsultas</span>
          </button>

          {/* Tab Progress */}
        <button
        onClick={() => setActiveTab("progress")}
        className={`relative flex flex-col items-center py-2 px-4 overflow-hidden ${
          activeTab === "progress" ? "text-orangePrimary" : "text-darkGray"
        }`}
        >
          <BarChart3 />
          <span className="text-xs">Progress</span>
          </button>
          {/* Tab Profile */}
          <button
            onClick={() => setActiveTab("Profile")}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "Profile" ? "text-orangePrimary" : "text-darkGray"
            }`}
          >
            <User className="w-5 h-5 mb-1" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
}