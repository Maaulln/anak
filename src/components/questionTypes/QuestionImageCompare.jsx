// components/questionTypes/QuestionImageCompare.jsx
export default function QuestionImageCompare({ data, selected, onSelect }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-10 text-center">{data.question}</h2>
      <div className="flex gap-17 justify-center mt-10 mb-20 ">
        <div className="flex flex-col items-center gap-2">
          <img src={data.leftImage} alt="Kiri" className="w-28 h-40 object-contain shadow-md border border-gray-300" />
          <span className="text-sm">Kiri</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={data.rightImage} alt="Kanan" className="w-28 h-40 object-contain shadow-md border border-gray-300" />
          <span className="text-sm">Kanan</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {data.options.map((opt, i) => {
          const isSelected = selected === opt;
          return (
            <button
              key={i}
              onClick={() => onSelect(opt)}
              className={`border rounded-xl py-3 font-medium transition 
                ${isSelected ? 'border-orangePrimary bg-orangeSecondary' : 'border-gray-300'}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}