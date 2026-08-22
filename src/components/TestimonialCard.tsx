import { Quote } from "lucide-react";
import type { Testimonial } from "../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/10">
      
      {/* Quote */}
      <div className="mb-5">
        <Quote className="h-8 w-8 text-blue-400" />
      </div>

      {/* Testimonial */}
      <p className="leading-7 text-slate-300">
        "{testimonial.content}"
      </p>

      {/* Person */}
      <div className="mt-6 border-t border-white/10 pt-5">
        <h3 className="font-semibold text-white">
          {testimonial.name}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {testimonial.role}
        </p>

        <p className="mt-1 text-sm text-blue-400">
          {testimonial.country}
        </p>
      </div>
    </div>
  );
}