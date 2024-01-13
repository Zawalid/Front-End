export  function Button({ children,className }) {
  return (
    <button className={'bg-primary flex-1 rounded-full  px-12 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-indigo-600 ' + className}>
      {children}
    </button>
  );
}
