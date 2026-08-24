import { Star } from "lucide-react";
import type { Testimonial } from "../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-[#E8E5E0] bg-white p-6 shadow-sm transition duration-300 hover:border-violet-200 hover:shadow-md">
      <div>
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[#555555]">
          "{testimonial.content}"
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-[#E8E5E0] pt-4">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-10 w-10 rounded-full border border-violet-200 object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE9FE] font-bold text-[#8B5CF6]">
            {testimonial.name.charAt(0)}
          </div>
        )}

        <div>
          <h4 className="text-sm font-semibold text-[#111111]">
            {testimonial.name}
          </h4>
          <p className="text-xs text-[#777777]">
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}