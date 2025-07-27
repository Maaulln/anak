import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { Home, Users, BarChart3, User } from "lucide-react";
import HomeIcon from "@/components/atoms/Home-icon";
import RedeemIcon from "@/components/atoms/redeem-icon";
import ProgresIcon from "@/components/atoms/progres-icon";
import ProfileIcon from "@/components/atoms/profile-icon";

export default function MainLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const getActiveTab = () => {
  if (location.pathname === "/" || location.pathname === "/home") return "home";
  if (location.pathname === "/redeem") return "redeem";
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
            onClick={() => {navigate("/home")}}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "home" ? "text-orangePrimary" : "text-line"
            }`}
          >
            <HomeIcon/>
            <span className="text-xs">Beranda</span>
          </button> 
          <button
            onClick={() => {navigate("/redeem")}}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "redeem" ? "text-orangePrimary" : "text-line"
            }`}
          > 
            <RedeemIcon/>
            <span className={`text-xs ${
              activeTab === "redeem" ? "text-orangePrimary" : "text-line"
            }`}>Redeem</span>
          </button>
        <button
        onClick={() => {navigate("/progres")}}
        className={`relative flex flex-col items-center py-2 px-4 overflow-hidden ${
          activeTab === "progres" ? "text-orangePrimary" : "text-line"
        }`}
        >
          <ProgresIcon/>
          <span className="text-xs">Progres</span>
          </button>
          <button
            onClick={() => {navigate("/profile")}}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === "profile" ? "text-orangePrimary" : "text-line"
            }`}
          >
            <ProfileIcon/>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
}