import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BarChart3, User } from "lucide-react";

export default function MainLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const getActiveTab = () => {
  if (location.pathname === "/" || location.pathname === "/home") return "home";
  if (location.pathname === "/konsultan") return "konsultan";
  if (location.pathname === "/progres") return "progres";
  if (location.pathname === "/profile") return "profile";
  return "";
};
  const activeTab = getActiveTab();

  return (
    <>
      <div className="pb-20">{children}</div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around py-2">
          <button
            // onClick={() => setActiveTab("beranda") && {handleTabClick}}
            onClick={() => {navigate("/home")}}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "home" ? "text-orangePrimary" : "text-darkGray"
            }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs">Beranda</span>
          </button> 
          <button
            // onClick={() => setActiveTab("Konsultas") && navigate("/konsultan")}
            onClick={() => {navigate("/konsultan")}}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "konsultan" ? "text-orangePrimary" : "text-darkGray"
            }`}
          > 
            <Users className="w-5 h-5 mb-1" />
            <span className="text-xs">Konsultan</span>
          </button>

          {/* Tab Progress */}
        <button
        // onClick={() => setActiveTab("progress")}
        onClick={() => {navigate("/progres")}}
        className={`relative flex flex-col items-center py-2 px-4 overflow-hidden ${
          activeTab === "progres" ? "text-orangePrimary" : "text-darkGray"
        }`}
        >
          <BarChart3 />
          <span className="text-xs">Progress</span>
          </button>
          {/* Tab Profile */}
          <button
            // onClick={() => setActiveTab("Profile")}
            onClick={() => {navigate("/profile")}}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "profile" ? "text-orangePrimary" : "text-darkGray"
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