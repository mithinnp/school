function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-800 te text-slate-50 px-5 font-mono"
    >
      {children}
    </button>
  );
}

export default Button;
