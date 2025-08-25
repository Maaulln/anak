import MainLayout from "@/components/layout/MainLayout";
import Activity from "@/components/atoms/Activity-Progres";

export default function Progres() {
  // Skills data - easy to modify
  const skills = [
    { name: "Logika", progress: 10, color: "bg-orange-500" },
    { name: "Bahasa", progress: 30, color: "bg-purple-500" },
    { name: "Memori", progress: 60, color: "bg-green-500" },
  ];
  const stats = [
      { value: 25, label: "Total Tes", color: "text-orange-500" },
      { value: 18, label: "Selesai", color: "text-purple-500" },
      { value: 75, label: "Akurasi", color: "text-green-500" },
    ];
    // bisa dibuat variabel


  return (

      <div className="w-[450px] mx-auto bg-white">
        {/* Header Section */}
        <div className="bg-[#AE58F4] px-6 py-8 rounded-b-3xl">
          <h1 className="text-white text-2xl font-bold text-center">Progres</h1>
        </div>
        {/* Main Content Container */}
        <div className="px-4 py-6 space-y-6">
          {/* Activities Section */}
          <Activity/>
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          {/* Skills Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-orange-500 text-xl font-semibold mb-6">Kemampuan</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-gray-700 text-sm font-medium">{skill.name}</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-300`}
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <MainLayout/>
      </div>
  );
}
