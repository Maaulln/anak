import { useState } from "react";
import BoyImg from "@/assets/img/boy.png";
import GirlImg from "@/assets/img/girl.png";

export default function Survey() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const questions = [
    {
      question: "Apa gender dan siapa nama anak anda..?",
      options: ["laki", "perempuan"],
      input: true,
    },
    {
      question: "Berapa umur anak anda..?",
      options: [
        "2-3 Tahun",
        "4-5 Tahun",
        "6 Tahun",
        "7 Tahun",
        "8 Tahun",
        "9-15 Tahun",
      ],
    },
    {
      question: "Kenapa mendowload aplikasi ANAK untuk anak anda..?",
      options: [
        "Membangun logika dan memori",
        "Meningkatkan kreatifitas",
        "Persiapan untuk sekolah",
        "Waktu layar yang sehat",
      ],
      input: true,
    },
    {
      question: "Apa yang menjadi tantangan terbesar bagi anak Anda saat ini?",
      options: [
        "Belajar skill baru",
        "Fokus",
        "Menyeimbangkan belajar dan bermain",
        "Berpikir kreatif",
        "Mengikuti intruksi",
      ],
      input: true,
    },
    {
      question: "Siapa yang sering menggunakan perangkat ini?",
      options: ["Anak", "Orang tua", "Kita menggunakan Bersama"],
    },
    {
      question:
        "Perangkat apa yang Anda rencanakan untuk digunakan untuk pembelajaran anak Anda?",
      options: ["perangkat ini", "Perangkat Lainya", "Banyak Perangkat"],
    },
    {
      question: "Apakah Anda menggunakan perangkat ini untuk kegiatan sekolah?",
      options: ["Ya", "Tidak"],
    },
    {
      question: "Kegiatan apa yang paling disukai anak Anda?",
      options: [
        "Menyelesaikan puzzle",
        "Menggambar",
        "Latihan matematika",
        "Menonton video",
        "Menjelajahi cerita interaktif",
        "Bermain",
        "Membaca",
      ],
    },
    {
      question: "Bagaimana anak Anda biasanya membuat keputusan",
      options: [
        "Biasanya cepat memutuskan tetapi kadang ragu-ragu",
        "Membuat keputusan dengan sangat cepat",
        "Sering membutuhkan waktu untuk memutuskan",
        "Sulit membuat keputusan atau butuh bantuan",
      ],
    },
    {
      question: "Apakah anak anda mengucapkan kata-kata dengan jelas?",
      options: [
        "Ya, sangat jelas",
        "Sebagian besar jelas, tapi kadang kesulitan dengan beberapa kata tertentu",
        "Belum, tapi sedang mengalami kemajuan",
      ],
    },
    {
      question: "Belum, tapi sedang mengalami kemajuan",
      options: [
        "Tidak, sejauh yang kami ketahui",
        "Tidak, tapi terkadang menunjukkan perilaku yang terkait",
        "Saya tidak tahu apa itu ADHD",
      ],
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-sm mx-auto">
          {/* Question Title */}
          <h1 className="text-2xl font-bold text-black mb-12 leading-tight mt-10">
            {questions[currentStep].question}
          </h1>

          {/* Content Area */}
          <div className="space-y-8">
            {currentStep === 0 ? (
              <>
                {/* Gender Selection */}
                <div className="flex justify-center gap-8 mb-16">
                  <button
                    type="button"
                    onClick={() => handleSelect("laki")}
                    className={`flex flex-col items-center p-6 transition-all ${
                      answers[0] === "laki" ? "transform scale-105" : ""
                    }`}
                  >
                    <div
                      className={`w-24 h-24 rounded-full overflow-hidden p-2 mb-4 ${
                        answers[0] === "laki"
                          ? "ring-4 ring-blue-400 bg-blue-400"
                          : "ring-2 ring-gray-200 bg-white"
                      }`}
                    >
                      <img
                        src={BoyImg}
                        alt="Laki-laki"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-lg text-black">
                      Laki-laki
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelect("perempuan")}
                    className={`flex flex-col items-center p-6 transition-all ${
                      answers[0] === "perempuan" ? "transform scale-105" : ""
                    }`}
                  >
                    <div
                      className={`w-24 h-24 rounded-full overflow-hidden p-2 mb-4 ${
                        answers[0] === "perempuan"
                          ? "ring-4 ring-blue-400 bg-blue-400"
                          : "ring-2 ring-gray-200 bg-white"
                      }`}
                    >
                      <img
                        src={GirlImg}
                        alt="Perempuan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-lg text-black">
                      Perempuan
                    </span>
                  </button>
                </div>

                {/* Name Input */}
                <div className="mt-8">
                  <input
                    type="text"
                    placeholder="Nama anak"
                    className="w-full px-6 py-4 border-2 border-orange-400 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-orange-200 placeholder-gray-400"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <div className="space-y-4">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`w-full px-6 py-4 border-2 rounded-2xl text-left text-lg transition-all ${
                      answers[currentStep] === option
                        ? "bg-bluePrimary text-white border-bluePrimary"
                        : "bg-white text-black border-gray-200 hover:border-orange-200"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {currentStep === 2 && (
              <input
                type="text"
                placeholder="Alasan lainnya..."
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 placeholder-gray-400"
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
              />
            )}

            {currentStep === 3 && (
              <input
                type="text"
                placeholder="Tantangan lainnya..."
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 placeholder-gray-400"
                value={inputValue3}
                onChange={(e) => setInputValue3(e.target.value)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="px-6 pb-8">
        <div className="max-w-sm mx-auto">
          <button
            onClick={handleNext}
            className={`w-full py-4 rounded-2xl text-lg font-semibold transition-all ${
              currentStep === totalSteps - 1 ||
              answers[currentStep] === "" ||
              (currentStep === 0 && inputValue.trim() === "")
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-400 text-white hover:bg-orange-500"
            }`}
            disabled={
              currentStep === totalSteps - 1 ||
              answers[currentStep] === "" ||
              (currentStep === 0 && inputValue.trim() === "")
            }
          >
            {currentStep === totalSteps - 1 ? "SELESAI" : "NEXT"}
          </button>

          {currentStep > 0 && (
            <button
              onClick={handlePrev}
              className="w-full mt-4 py-2 text-gray-500 hover:text-gray-700 font-medium"
            >
              Kembali
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
