import React from "react";
import Kognitif from "@/assets/img/Kognitif.png";
import Linguistik from "@/assets/img/Linguistik.png";
import Kepribadian from "@/assets/img/Kepribadian.png";
import Motorik from "@/assets/img/Motorik.png";
import Game from "@/assets/img/Game.png";

// Komponen Category Section - Grid kategori test
export default function CategorySection() {
  // Data kategori - mudah dimodifikasi
  const categories = [
    {
      id: 1,
      name: "Kognitif",
      icon: <img src={Kognitif} alt="" />,
      bgColor: "bg-blue-200",
    },
    {
      id: 2,
      name: "Linguistik",
      icon: <img src={Linguistik} alt="" />,
      bgColor: "bg-orange-200",
    },
    {
      id: 3,
      name: "Kepribadian",
      icon: <img src={Kepribadian} alt="" />,
      bgColor: "bg-purple-200",
    },
    {
      id: 4,
      name: "Motorik",
      icon: <img src={Motorik} alt="" />,
      bgColor: "bg-green-200",
    },
    {
      id: 5,
      name: "Game",
      icon: <img src={Game} alt="" />,
      bgColor: "bg-red-200",
    },
  ];

  return (
    <div className="px-4 mb-6">
      {/* Judul Section */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Kategori Test</h3>

      {/* Grid Kategori */}
      <div className="grid grid-cols-5 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div
              className={`w-16 h-16 p-1 rounded-xl ${category.bgColor} flex items-center justify-center`}
            >
              {category.icon}
            </div>
            <span className="text-xs text-gray-700 text-center font-medium">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
