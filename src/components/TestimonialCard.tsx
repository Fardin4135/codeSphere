import { Quote } from "lucide-react";
import type { Testimonial } from "../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-[#E8E5E0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50">
      
      {/* Quote */}
      <div className="mb-5">
        <Quote className="h-8 w-8 text-[#8B5CF6]" />
      </div>

      {/* Testimonial */}
      <p className="leading-7 text-[#6B6B6B]">
        "{testimonial.content}"
      </p>

      {/* Person */}
      <div className="mt-6 border-t border-[#E8E5E0] pt-5">
        <h3 className="font-semibold text-[#111111]">
          {testimonial.name}
        </h3>

        <p className="mt-1 text-sm text-[#6B6B6B]">
          {testimonial.role}
        </p>

        <p className="mt-1 text-sm font-medium text-[#8B5CF6]">
          {testimonial.country}
        </p>
      </div>
    </div>
  );
}