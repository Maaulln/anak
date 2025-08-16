import React from "react";
import cloudImg from "@/assets/img/Componets-Cover/3.png";

export default function CloudBackground({ className = "", children = null }) {
  return (
    <div className={`static inset-0 pointer-events-none ${className}`}>
      <img src={cloudImg} alt="" className="absolute left-0 right-0 top-20 w-40 opacity-40" />
      <img src={cloudImg} alt="" className="absolute right-0 bottom-90 w-50 opacity-70" />
      <img src={cloudImg} alt="" className="absolute right-0 top-0 w-50 opacity-60" />
      <img src={cloudImg} alt="" className="absolute left-0 top-120 w-70 opacity-60" />
    </div>
  );
}
