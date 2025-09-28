export function Input({
    className = "",
    ...props
  }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
      <input
        className={`px-3 py-2 rounded-md border border-white/20 bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
        {...props}
      />
    );
  }
  