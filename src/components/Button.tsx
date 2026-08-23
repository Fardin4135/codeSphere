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
      ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-sm shadow-violet-200"
      : "border border-[#E8E5E0] bg-white text-[#111111] hover:border-violet-200 hover:bg-[#EDE9FE]/40";

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
        className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition duration-200 ${classes}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition duration-200 ${classes}`}
    >
      {content}
    </button>
  );
}