import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-400"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        size={17}
        className="transition-transform group-hover:translate-x-1"
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${classes}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${classes}`}
    >
      {content}
    </button>
  );
}