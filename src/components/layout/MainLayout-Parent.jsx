import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { Home, Users, BarChart3, User } from "lucide-react";
import HomeIcon from "@/components/atoms/Home-icon";
import RedeemIcon from "@/components/atoms/redeem-icon";
import SettingIcon from "@/components/atoms/Setting-Icon.jsx";


export default function MainLayoutParent({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const getActiveTab = () => {
  if (location.pathname === "/" || location.pathname === "/Home-Parent") return "Home-Parent";
  if (location.pathname === "/Anak") return "Anak";
  if (location.pathname === "/pengaturan") return "pengaturan";
  return "";
};
  const activeTab = getActiveTab();

  return (
    <>
      <div className="pb-20">{children}</div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full lg:max-w-sm sm:w-full bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around py-2">
          <button
            onClick={() => {navigate("/Home-Parent")}}
            className={`flex flex-col items-center py-2 px-4 hover:scale-110 cursor-pointer ${
              activeTab === "Home-Parent" ? "text-orangePrimary" : "text-line"
            }`}
          >
            <HomeIcon/>
            <span className="text-xs">home</span>
          </button> 
          <button
            onClick={() => {navigate("/Anak")}}
            className={`flex flex-col items-center  py-2 px-4 hover:scale-110 cursor-pointer ${
              activeTab === "Anak" ? "text-orangePrimary" : "text-line"
            }`}
          > 
            <RedeemIcon/>
            <span className={`text-xs ${
              activeTab === "Anak" ? "text-orangePrimary" : "text-line"
            }`}>Anak</span>
          </button>
          <button
            onClick={() => {navigate("/pengaturan")}}
            className={`flex flex-col items-center  py-2 px-4 hover:scale-110 cursor-pointer ${
              activeTab === "pengaturan" ? "text-orangePrimary" : "text-line"
            }`}
          > 
            <SettingIcon/>
            <span className={`text-xs ${
              activeTab === "pengaturan" ? "text-orangePrimary" : "text-line"
            }`}>Pengaturan</span>
          </button>
        </div>
      </div>
    </>
  );
}