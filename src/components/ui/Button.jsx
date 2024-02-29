export function Button({ children, className }) {
  return (
    <button
      className={`rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white  transition-colors duration-300 hover:bg-indigo-600 ${className}`}
    >
      {children}
    </button>
  );
}
