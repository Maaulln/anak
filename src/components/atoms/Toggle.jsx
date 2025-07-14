export default function Toggle({ checked, onChange, label, className }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className={className} />
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5" />
      </div>
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
}