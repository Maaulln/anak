import React from "react";
import Kognitif from "@/assets/img/Kognitif.png";
import Linguistik from "@/assets/img/Linguistik.png";
import Kepribadian from "@/assets/img/Kepribadian.png";
import Motorik from "@/assets/img/Motorik.png";
import Game from "@/assets/img/Game.png";

// Komponen Recent Section - Aktivitas terbaru dengan progress
export default function RecentSection() {
  // Data recent activities - mudah dimodifikasi
  const recentActivities = [
    {
      id: 1,
      name: "Kognitif",
      description: "deskripsi",
      icon: <img src={Kognitif} alt="" />,
      cardBg: "bg-blue-100",
      shadow: "blue",
      textcolor: "text-blue-600",
      subtextcolor: "text-blue-400",
    },
    {
      id: 2,
      name: "Linguistik",
      description: "deskripsi",
      icon: <img src={Linguistik} alt="" />,
      cardBg: "bg-orange-100",
      shadow: "orange",
      textcolor: "text-orange-600",
      subtextcolor: "text-orange-400",
    },
    {
      id: 3,
      name: "Kepribadian",
      description: "deskripsi",
      icon: <img src={Kepribadian} alt="" />,
      cardBg: "bg-purple-100",
      shadow: "purple",
      textcolor: "text-purple-600",
      subtextcolor: "text-purple-400",
    },
    {
      id: 4,
      name: "Motorik",
      description:
        "Motorik adalah proses mempelajari cara bergerak dan berinteraksi",
      icon: <img src={Motorik} alt="" />,
      cardBg: "bg-green-100",
      shadow: "green",
      textcolor: "text-green-600",
      subtextcolor: "text-green-400",
    },
  ];

  return (
    <div className="px-4 mb-20">
      {/* Judul Section */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recently</h3>

      {/* List Recent Activities */}
      <div className="space-y-3">
        {recentActivities.map((activity) => {
          return (
            <div
              key={activity.id}
              className={`flex items-center space-x-3 p-3 rounded-xl shadow-lg ${activity.cardBg} shadow-${activity.shadow}`}
            >
              {/* Icon */}
              <div
                className={`w-18 h-10 rounded-full p-0 flex items-center justify-center`}
              >
                {activity.icon}
              </div>
              <div className="flex-1">
                <div
                  className={`text-sm font-medium ${activity.textcolor} font-poppins`}
                >
                  {activity.name}
                </div>
                <div className={`text-sm ${activity.subtextcolor} mt-1`}>
                  {activity.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
