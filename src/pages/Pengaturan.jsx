import React from "react";
import CartIconRedeem from "@/components/atoms/cart-icon-reedem"
import AddChilParent from "@/components/atoms/AddChil-Parent";
import LockIcon from "@/components/atoms/LockIcon";
import ContactIcon from "@/components/atoms/Contact-Icon";
import DeleteIcon1 from "@/components/atoms/Delete-Icon"
import Logout from "@/components/atoms/Logout-profile";
import MainLayoutParent from "@/components/layout/MainLayout-Parent";


export default function Pengaturan() {
  return (
    <div className="w-[393px] h-[852px] bg-white mx-auto p-4 font-sans">
      
      {/* === Judul Halaman === */}
      <h1 className="text-lg font-semibold mb-4">Pengaturan</h1>

      {/* === Card Premium Features === */}
      <div 
        className="rounded-xl p-4 mb-4 h-32 flex items-center justify-center text-white font-semibold"
        style={{ background: "linear-gradient(135deg, #7F00FF, #00BFFF)" }} // Ganti warna gradient sesuai desain
      >
        Unlock PREMIUM features
      </div>

      {/* === Card ID User === */}
      <div className="rounded-xl border-2 border-blue-500 flex items-center gap-3 p-3 mb-4">
        {/* Icon ID (ganti src sesuai asset) */}
        <h1 className="text-blue-500 font-medium rounded-4xl bg-blue-200 p-2 w-9 ">ID</h1>
        <span className="text-blue-500 font-medium">21568989</span>
      </div>

      {/* === Card Tambahkan Anak === */}
      <div className="rounded-xl border-2 border-orange-500 bg-orange-50 flex items-center gap-3 p-3 mb-4">
        <AddChilParent />
        <span className="text-orange-500 font-medium">Tambahkan anak</span>
      </div>

      {/* === Card Opsi Lain === */}
      <div className="rounded-xl border-4 border-purple-500 bg-purple-100 p-3 mb-4">
        {/* Opsi Restore Purchases */}
        <div className="flex items-center gap-3 py-2 border-b border-purple-200">
          <CartIconRedeem fill="#8D66A6" />
          <span className="text-purple-700">Restore purchases</span>
        </div>

        {/* Opsi Change Password */}
        <div className="flex items-center gap-3 py-2 border-b border-purple-200">
          <LockIcon />
          <span className="text-purple-700">Change password</span>
        </div>

        {/* Opsi Contact Us */}
        <div className="flex items-center gap-3 py-2">
          <ContactIcon />
          <span className="text-purple-700">Contact us</span>
        </div>
      </div>

      {/* === Tombol Delete Account === */}
      <div className="flex items-center gap-3 py-3">
        <DeleteIcon1 />
        <span className="text-red-600 font-medium">Delete account</span>
      </div>

      {/* === Tombol Logout === */}
      <div className="flex items-center gap-3 py-3">
        <Logout stroke="red" />
        <span className="text-red-600 font-medium">Log out</span>
      </div>
      <MainLayoutParent />
    </div>
  );
}
