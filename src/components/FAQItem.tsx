import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-semibold text-white">
          {question}
        </span>

        {isOpen ? (
          <Minus className="h-5 w-5 shrink-0 text-blue-400" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-blue-400" />
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-10 leading-7 text-slate-300">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}