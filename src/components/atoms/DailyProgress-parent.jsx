import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
export default function DailyProgressParent() {
  // Data untuk diagram batang
    const barData = [
      { name: "Kognitif", value: 8 },
      { name: "Linguistik", value: 4 },
      { name: "Motorik", value: 7 },
    ];

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mt-4">
            <p className="font-semibold mb-2">Pogres Harian</p>
            <div className="flex gap-4">
              {/* Diagram Batang */}
              <div className="w-2/3 h-28">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" hide /> {/* Sembunyikan label bawah */}
                    <YAxis hide /> {/* Sembunyikan sumbu kiri */}
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
    
              {/* Lingkaran Persentase */}
              <div className="w-1/3 flex items-center justify-center">
                <div className="relative w-16 h-16">
                  {/* Lingkaran luar */}
                  <svg className="w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="25"
                      stroke="#E5E7EB"
                      strokeWidth="5"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="25"
                      stroke="#8B5CF6"
                      strokeWidth="5"
                      fill="none"
                      strokeDasharray="157"
                      strokeDashoffset="0" // ubah offset untuk persentase
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Teks persentase */}
                  <div className="absolute inset-0 flex items-center justify-center font-semibold">
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}