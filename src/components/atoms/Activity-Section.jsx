import Kognitif from '@/assets/img/Kognitif.png';
import Linguistik from '@/assets/img/Linguistik.png';
import Kepribadian from '@/assets/img/Kepribadian.png';
import Motorik from '@/assets/img/Motorik.png';
export default function ActivitySection() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
            {/* Kognitif */}
            <div className="border-2 border-blue-300 rounded-xl p-4 text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-2">
                <img src={Kognitif} alt="Kognitif" className="w-24 h-24" />
              </div>
              <p className="font-semibold">Kognitif</p>
              <p className="text-gray-500 text-sm">20 min</p>
            </div>
    
            {/* Linguistik */}
            <div className="border-2 border-orange-300 rounded-xl p-4 text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-2">
                <img src={Linguistik} alt="Linguistik" className="w-24 h-24" />
              </div>
              <p className="font-semibold">Linguistik</p>
              <p className="text-gray-500 text-sm">30 min</p>
            </div>
    
            {/* Personality */}
            <div className="border-2 border-purple-300 rounded-xl p-4 text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-2">
                <img src={Kepribadian} alt="Kepribadian" className="w-24 h-24" />
              </div>
              <p className="font-semibold">Personality</p>
              <p className="text-gray-500 text-sm">10 min</p>
            </div>
    
            {/* Motorik */}
            <div className="border-2 border-green-300 rounded-xl p-4 text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-2">
                <img src={Motorik} alt="Motorik" className="w-24 h-24" />
              </div>
              <p className="font-semibold">Motorik</p>
              <p className="text-gray-500 text-sm">30 min</p>
            </div>
          </div>
  );
}