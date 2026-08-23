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
    <div className="border-b border-[#E8E5E0]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-semibold text-[#111111] transition-colors hover:text-[#8B5CF6]">
          {question}
        </span>

        {isOpen ? (
          <Minus className="h-5 w-5 shrink-0 text-[#8B5CF6]" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-[#8B5CF6]" />
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
          <p className="pb-6 pr-10 leading-7 text-[#6B6B6B]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}