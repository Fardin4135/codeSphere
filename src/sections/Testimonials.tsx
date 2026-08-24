import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = testimonials[currentIndex] || testimonials[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="overflow-hidden bg-[#FAF9F7] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Learner Experiences"
          title="Loved by students. Trusted by parents."
          description="Hear directly from learners and families across the UK and India about their 1:1 learning journey."
        />

        {/* Spotlight Deck */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mt-12 overflow-hidden rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm lg:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Left: Dynamic Quote Stage */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="flex items-center gap-1 rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-semibold text-[#8B5CF6]">
                  <Sparkles size={13} />
                  Verified Learner
                </span>
              </div>

              <div className="relative mt-8 min-h-[160px]">
                {/* <Quote
                  size={52}
                  className="absolute -left-3 -top-6 text-violet-100/70"
                /> */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-xl font-medium leading-relaxed text-[#111111] md:text-2xl">
                      "{current.content}"
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      {current.avatar ? (
                        <img
                          src={current.avatar}
                          alt={current.name}
                          className="h-14 w-14 rounded-full border-2 border-violet-200 object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B5CF6] text-xl font-bold text-white shadow-sm">
                          {current.name.charAt(0)}
                        </div>
                      )}

                      <div>
                        <h4 className="text-lg font-bold text-[#111111]">
                          {current.name}
                        </h4>
                        <p className="text-sm text-[#6B6B6B]">
                          {current.role} · {current.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="mt-10 flex items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8E5E0] bg-[#FAF9F7] text-[#111111] transition-colors hover:border-[#8B5CF6] hover:bg-[#EDE9FE] hover:text-[#8B5CF6]"
                  aria-label="Previous story"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8E5E0] bg-[#FAF9F7] text-[#111111] transition-colors hover:border-[#8B5CF6] hover:bg-[#EDE9FE] hover:text-[#8B5CF6]"
                  aria-label="Next story"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="ml-2 text-xs font-semibold text-[#6B6B6B]">
                  <span className="text-[#111111]">{currentIndex + 1}</span> /{" "}
                  {testimonials.length}
                </div>
              </div>
            </div>

            {/* Right: Student Selector List */}
            <div className="space-y-3 rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-4">
              <span className="block px-2 text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">
                Select Student Story
              </span>

              {testimonials.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex w-full items-center justify-between rounded-xl p-3 text-left transition-all duration-200 ${
                      isActive
                        ? "border border-violet-200 bg-white shadow-sm"
                        : "hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                          isActive
                            ? "bg-[#8B5CF6] text-white"
                            : "bg-[#EDE9FE] text-[#8B5CF6]"
                        }`}
                      >
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#111111]">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-[#6B6B6B]">
                          {item.course}
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <CheckCircle2 size={16} className="text-[#8B5CF6]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}