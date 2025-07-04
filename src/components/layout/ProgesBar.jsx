export default function Progress({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="w-full h-3 bg-bar rounded-full overflow-hidden mb-4">
      <div
        className="h-full bg-primary transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
