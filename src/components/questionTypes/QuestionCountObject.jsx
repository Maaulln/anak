// components/questionTypes/QuestionCountObject.jsx
export default function QuestionCountObject({ data, selected, onSelect }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{data.question}</h2>
      <div className="flex justify-center mb-25 mt-10">
        <img src={data.image} alt="objek" className="w-64 h-64 border-gray-300 shadow-md border-solid border-1 rounded-xl object-contain" />
      </div>
      <div className="grid grid-cols-2 gap-4">
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