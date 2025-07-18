// src/pages/TestPage.jsx
import { useState } from "react";
import { questions } from "../../mockQuestions";
import QuestionImageChoices from "../components/questionTypes/QuestionImageChoices";
import QuestionCountObject from "../components/questionTypes/QuestionCountObject";
import QuestionImageCompare from "../components/questionTypes/QuestionImageCompare";
import Button from "../components/atoms/Button";

const componentMap = {
  "image-choice": QuestionImageChoices,
  "count-object": QuestionCountObject,
  "compare-image": QuestionImageCompare,
};

export default function TestPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questions[currentIndex];
  const QuestionComponent = componentMap[currentQuestion.type];

  const handleNext = () => {
    setAnswers([...answers, { questionId: currentQuestion.id, answer: selectedOption }]);
    setSelectedOption(null);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  if (currentIndex >= questions.length) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Tes selesai!</h2>
        <p>Terima kasih telah menyelesaikan tes ini.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between p-4">
      <div>
        {/* Progress Bar */}
        <div className="w-full mb-4">
          <div className="flex items-center justify-between text-sm text-orange-500 font-semibold mb-1">
            <span>{currentIndex + 1}/{questions.length}</span>
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full">
            <div
              className="relative h-4 bg-orangePrimary rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            >
              <div className="absolute top-[3px] left-1 right-1 h-1 rounded-full bg-white/30"></div>
            </div>
          </div>
        </div>
        <QuestionComponent data={currentQuestion} onSelect={handleSelect} selected={selectedOption} />
      </div>

      <div className="mt-6 flex">
        <Button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`w-[70%] justify-center mx-auto py-3 rounded-3xl h-16 text-white font-bold shadow-md 
  transition-transform duration-100 
  ${selectedOption 
    ? 'bg-orange-500 hover:bg-orangePrimary active:scale-95' 
    : 'bg-gray-400 cursor-not-allowed'}`}
        >
          LANJUT
        </Button>
      </div>
    </div>
  );
}