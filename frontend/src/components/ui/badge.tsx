import React from "react";

export function Badge({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-xs rounded-md bg-white/10 text-white/80 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}