import { useState } from "react";
import ProgressBar from "../components/layout/ProgesBar";
import BoyImg from "../assets/img/boy.png";
import GirlImg from "../assets/img/girl.png";

export default function Survey() {
  const [inputValue, setInputValue] = useState("");
  const questions = [
    {
      question: "Apa gender dan siapa nama anak anda..?",
      options: ["laki", "perempuan"],
      input: true,
    },
    {
      question: "Berapa umur anak anda..?",
      options: ["2-3 Tahun", "4-5 Tahun", "6 Tahun","7 Tahun", "8 Tahun", "9-15 Tahun"],
    },
    {
      question: "Kenapa mendowload aplikasi ANAK untuk anak anda..?",
      options: ["Membangun logika dan memori", "Meningkatkan kreatifitas", "Persiapan untuk sekolah", "Waktu layar yang sehat"],
      input:true,
    },
    {
      question: "Apa yang menjadi tantangan terbesar bagi anak Anda saat ini?",
      options:["Belajar skill baru","Fokus","Menyeimbangkan belajar dan bermain", "Berpikir kreatif", "Mengikuti intruksi"],
      input:true,
    },
    {
      question: "Siapa yang sering menggunakan perangkat ini?",
      options:["Anak","Orang tua","Kita menggunakan Bersama"],
    },
    {
      question: "Perangkat apa yang Anda rencanakan untuk digunakan untuk pembelajaran anak Anda?",
      options:["perangkat ini", "Perangkat Lainya", "Banyak Perangkat"],
    },
    {
      question: "Apakah Anda menggunakan perangkat ini untuk kegiatan sekolah?",
      options:["Ya","Tidak"],
    },
    {
      question: "Kegiatan apa yang paling disukai anak Anda?",
      options:["Menyelesaikan puzzle","Menggambar","Latihan matematika", "Menonton video","Menjelajahi cerita interaktif","Bermain","Membaca",],
    },
    {
      question: "Bagaimana anak Anda biasanya membuat keputusan",
      options:["Biasanya cepat memutuskan tetapi kadang ragu-ragu","Membuat keputusan dengan sangat cepat","Sering membutuhkan waktu untuk memutuskan","Sulit membuat keputusan atau butuh bantuan"],
    },
    {
      question: "Apakah anak anda mengucapkan kata-kata dengan jelas?",
      options:["Ya, sangat jelas","Sebagian besar jelas, tapi kadang kesulitan dengan beberapa kata tertentu","Belum, tapi sedang mengalami kemajuan"],
    },
    {
      question: "Belum, tapi sedang mengalami kemajuan",
      options:["Tidak, sejauh yang kami ketahui","Tidak, tapi terkadang menunjukkan perilaku yang terkait","Saya tidak tahu apa itu ADHD"],
    },
  ];

  const totalSteps = questions.length;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(totalSteps).fill(""));

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelect = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = option;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="max-w-md mx-auto p-4 w-[393px] h-[790px] mt-7 rounded-4xl bg-secondary">
      <ProgressBar currentStep={currentStep + 1} totalSteps={totalSteps} />
      <div className="p-4 bg-[#FFFFFF] rounded-4xl shadow flex flex-col h-full">
        <h2 className="text-lg font-semibold mb-2">
          Pertanyaan {currentStep + 1} dari {totalSteps}
        </h2>
        <p className="mb-4">{questions[currentStep].question}</p>

        <div className="space-y-2 flex-1">
          {currentStep === 0 ? (
            <>
              <d iv className="flex justify-center gap-6 mb-4 mt-20">
                <button
                  type="button"
                  onClick={() => handleSelect("laki")}
                  className={`flex flex-col items-center border rounded-lg p-2 transition ${
                    answers[0] === "laki"
                      ? "border-primary bg-blue-50"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <img src={BoyImg} alt="Laki-laki" className="w-20 h-20 object-contain mb-2" />
                  <span className="font-medium">Laki-laki</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect("perempuan")}
                  className={`flex flex-col items-center border rounded-lg p-2 transition ${
                    answers[0] === "perempuan"
                      ? "border-primary bg-pink-200"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <img src={GirlImg} alt="Perempuan" className="w-20 h-20 object-contain mb-2" />
                  <span className="font-medium">Perempuan</span>
                </button>
              </d>
              <input
                type="text"
                placeholder="Nama anak"
                className="w-full px-4 py-2 bg-secondary border-1 border-primary rounded mt-18"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </>
          ) : (
            questions[currentStep].options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-2 border-2 rounded-2xl border-primary ${
                  answers[currentStep] === option
                    ? "bg-orange-400 text-white"
                    : "bg-white text-black"
                }`}
              >
                {option}
              </button>
            ))
          )}
          {currentStep === 2 && (
            <input
              type="text"
              placeholder="Lainya"
              className="w-full px-4 py-2 bg-secondary border-1 border-primary rounded mt-4"
              value={useState}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
          {currentStep === 3 && (
            <input
              type="text"
              placeholder="Lainya"
              className="w-full px-4 py-2 bg-secondary border-1 border-primary rounded mt-4"
              value={useState}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
        </div>
      </div>

      <div className="flex justify-between mt-auto pt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-darkGray text-white rounded disabled:opacity-50"
          disabled={currentStep === 0}
        >
          Kembali
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-orange-500"
          disabled={
            currentStep === totalSteps - 1 ||
            answers[currentStep] === "" ||
            (currentStep === 0 && inputValue.trim() === "")
          }
        >
          Next
        </button>
      </div>

      {/* debug answers */}
      <pre className="mt-4 text-xs bg-gray-100 p-2 rounded">
        {JSON.stringify({ ...answers, namaAnak: inputValue }, null, 2)}
      </pre>
    </div>
  );
}