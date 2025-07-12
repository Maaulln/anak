import React from 'react';
import Kognitif from '@/assets/img/Kognitif.png';
import Linguistik from '@/assets/img/Linguistik.png';
import Kepribadian from '@/assets/img/Kepribadian.png';
import Motorik from '@/assets/img/Motorik.png';
import Game from '@/assets/img/Game.png';

// Komponen Recent Section - Aktivitas terbaru dengan progress
export default function RecentSection() {
  // Data recent activities - mudah dimodifikasi
  const recentActivities = [
    {
      id: 1,
      name: "Kognitif",
      progress: 3,
      total: 10,
      icon: (
        <img src={Kognitif} alt="" />
      ),
      bgColor: "bg-blue-500",
      progressColor: "bg-blue-500",
      cardBg: "bg-blue-100",
      shadow: "blue"
    },
    {
      id: 2,
      name: "Linguistik",
      progress: 7,
      total: 10,
      icon: (
        <img src={Linguistik} alt="" />
      ),
      bgColor: "bg-orange-500",
      progressColor: "bg-orange-500",
      cardBg: "bg-orange-100",
      shadow: "orange"
    },
    {
      id: 3,
      name: "Kepribadian",
      progress: 5,
      total: 10,
      icon: (
        <img src={Kepribadian} alt="" />
      ),
      bgColor: "bg-purple-500",
      progressColor: "bg-purple-500",
      cardBg: "bg-purple-100",
      shadow: "purple"
    },
    {
      id: 4,
      name: "Motorik",
      progress: 8,
      total: 10,
      icon: (
        <img src={Motorik} alt="" />
      ),
      bgColor: "bg-green-500",
      progressColor: "bg-green-500",
      score: 100, // Motorik punya score khusus
      cardBg: "bg-green-100",
      shadow: "green"
    },
  ];

  return (
    <div className="px-4 mb-20">
      {/* Judul Section */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recently</h3>

      {/* List Recent Activities */}
      <div className="space-y-3">
        {recentActivities.map((activity) => {
          const progressPercentage = (activity.progress / activity.total) * 100;
          return (
            <div key={activity.id} className={`flex items-center space-x-3 p-3 rounded-xl shadow-lg ${activity.cardBg} shadow-${activity.shadow}`}>
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl p-2 ${activity.bgColor} flex items-center justify-center`}>
                {activity.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{activity.name}</h4>
                  <span className="text-sm text-gray-600">
                    {activity.progress}/{activity.total}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${activity.progressColor}`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Score Badge (khusus untuk Motorik) */}
              {activity.score && (
                <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {activity.score}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
