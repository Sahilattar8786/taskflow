export function Card({
    children,
    className = "",
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={`rounded-xl border border-white/10 bg-neutral-900 p-4 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  export function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="mb-2">{children}</div>;
  }
  
  export function CardTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-lg font-semibold text-white">{children}</h3>;
  }
  
  export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="text-sm text-neutral-300">{children}</div>;
  }