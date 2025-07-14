export default function Progress({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="w-[340px] h-3 bg-bar rounded-full overflow-hidden">
        <div
          className="h-full bg-orangePrimary transition-all duration-500"
          style={{ width: `${progress}%` }}
        >
        </div>
      </div>
      <span className="mb-2 text-sm text-black font-medium">
        {currentStep} dari {totalSteps} pertanyaan
      </span>
    </div>
  );
}
