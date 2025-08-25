"use client"
import { useEffect, useState } from "react";

export default function Activity() {
  // Data awal aktivitas
  const dailyActivities = [
    { day: "Senin", progress: 10, color: "bg-blue-400" },
    { day: "Selasa", progress: 25, color: "bg-blue-500" },
    { day: "Rabu", progress: 50, color: "bg-blue-500" },
    { day: "Kamis", progress: 80, color: "bg-blue-500" },
    { day: "Jumat", progress: 30, color: "bg-blue-500" },
  ];

  // State untuk menyimpan progress animasi
  const [animatedProgress, setAnimatedProgress] = useState(
    dailyActivities.map(() => 0) // awalnya 0 semua
  );

  useEffect(() => {
    // kasih delay dikit biar transisinya kelihatan
    const timeout = setTimeout(() => {
      setAnimatedProgress(dailyActivities.map((act) => act.progress));
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-[#14A9FF] text-xl font-semibold mb-6">Aktivitas</h2>

      {/* Daily Progress List */}
      <div className="space-y-4">
        {dailyActivities.map((activity, index) => (
          <div key={index} className="space-y-2">
            <div className="text-blue-400 text-sm font-medium">
              {activity.day}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`${activity.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${animatedProgress[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
