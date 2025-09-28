type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;
export default function Badge({ children, className, ...props }: BadgeProps) {
    return (
      <span className={`inline-flex items-center px-2 py-1 text-xs rounded-md bg-white/10 text-white/80 ${className}`}>
        {children}
      </span>
    );
  }