// components/questionTypes/QuestionImageChoices.jsx
export default function QuestionImageChoices({ data, selected, onSelect }) {
  return (
    <div>
      <h2 className="text-lg font-light mb-4">{data.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.options.map((opt, i) => {
          const isSelected = selected === opt.label;
          return (
            <button
              key={i}
              onClick={() => onSelect(opt.label)}
              className={`border rounded-2xl p-4 flex h-60 flex-col items-center justify-center shadow transition 
                ${isSelected ? 'border-orangePrimary bg-orangeSecondary' : 'border-gray-300'}`}
            >
              <img src={opt.image} alt={opt.label} className="w-20 h-20 object-contain" />
              <span className="text-lg pt-10 font-bold">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}