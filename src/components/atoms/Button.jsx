export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`w-full py-3 text-white rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}