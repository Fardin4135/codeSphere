import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  UserCheck,
  Video,
  Code2,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const steps = [
  {
    id: 1,
    number: "01",
    title: "1:1 Consultation & Goal Mapping",
    shortTitle: "Goal Mapping",
    description:
      "We discuss your current coding background, school or career goals, and map a personalized syllabus tailored to your schedule.",
    icon: MessageSquare,
    badge: "Personalized Plan",
    preview: {
      heading: "Custom Learning Roadmap",
      detail: "Evaluation score: Intermediate Logic",
      tags: ["Target: Full Stack & DSA", "Timezone: GMT / IST", "Pace: 2x/Week"],
    },
  },
  {
    id: 2,
    number: "02",
    title: "Dedicated Mentor Match",
    shortTitle: "Mentor Match",
    description:
      "Get paired with a software engineer or specialist educator suited to your exact age group, skill level, and pace.",
    icon: UserCheck,
    badge: "1:1 Match",
    preview: {
      heading: "Matched Instructor",
      detail: "Senior Full Stack Engineer (8+ Yrs)",
      tags: ["1:1 Dedicated", "Screen Share Ready", "Doubt Support"],
    },
  },
  {
    id: 3,
    number: "03",
    title: "Interactive Live 1:1 Sessions",
    shortTitle: "Live Coding",
    description:
      "Join private video sessions featuring two-way screen sharing, live code debugging, and instant concept clarification.",
    icon: Video,
    badge: "Real-time Coding",
    preview: {
      heading: "Live Studio Session",
      detail: "VS Code Live Share active",
      tags: ["Instant Feedback", "Zero Pre-recorded Fluff", "Hands-on"],
    },
  },
  {
    id: 4,
    number: "04",
    title: "Build Production Projects",
    shortTitle: "Real Builds",
    description:
      "Apply knowledge by building full-stack applications, games, AI agents, or data algorithms to prove your capabilities.",
    icon: Code2,
    badge: "GitHub Portfolio",
    preview: {
      heading: "Live Project Repository",
      detail: "git commit -m 'feat: deployment'",
      tags: ["Clean Code", "Industry Tools", "Portfolio Ready"],
    },
  },
  {
    id: 5,
    number: "05",
    title: "Milestone Reviews & Certification",
    shortTitle: "Achievement",
    description:
      "Track your mastery with regular progress reports, interview drills, and certificates of completion.",
    icon: Trophy,
    badge: "Career Ready",
    preview: {
      heading: "Milestone Verified",
      detail: "100% Core Competency Achieved",
      tags: ["Verified Certificate", "Resume Review", "Interview Ready"],
    },
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const current = steps[activeStep];
  const IconComponent = current.icon;

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, proven roadmap to mastery."
          description="From your first 1:1 consultation to deploying production software, here is how we guide your journey."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Step Navigation Buttons */}
          <div className="space-y-3 lg:col-span-5">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              const StepIcon = step.icon;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-violet-200 bg-[#FAF9F7] shadow-sm"
                      : "border-transparent bg-transparent hover:border-[#E8E5E0] hover:bg-[#FAF9F7]/50"
                  }`}
                >
                  {/* Step Number Indicator */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-[#8B5CF6] text-white shadow-md shadow-violet-200"
                        : "bg-[#FAF9F7] text-[#777777] group-hover:bg-[#EDE9FE] group-hover:text-[#8B5CF6]"
                    }`}
                  >
                    <StepIcon size={20} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
                        Step {step.number}
                      </span>
                      {isActive && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-[#8B5CF6]">
                          Active Step
                          <ArrowRight size={12} />
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-base font-bold transition-colors ${
                        isActive
                          ? "text-[#111111]"
                          : "text-[#555555] group-hover:text-[#111111]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Stage Showcase */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-[#E8E5E0] bg-[#FAF9F7] p-8 shadow-sm lg:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-200/50 blur-3xl" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {/* Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-bold text-[#8B5CF6]">
                      <Sparkles size={13} />
                      {current.badge}
                    </span>
                    <span className="font-mono text-2xl font-bold text-[#8B5CF6]/30">
                      {current.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-[#111111]">
                    {current.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                    {current.description}
                  </p>

                  {/* Interactive UI Mockup Box */}
                  <div className="mt-8 overflow-hidden rounded-2xl border border-[#E8E5E0] bg-white p-6 shadow-xs">
                    <div className="flex items-center justify-between border-b border-[#E8E5E0] pb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6]">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#111111]">
                            {current.preview.heading}
                          </h4>
                          <p className="text-xs text-[#6B6B6B]">
                            {current.preview.detail}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                        <CheckCircle2 size={13} className="mr-1 inline" />
                        Verified
                      </span>
                    </div>

                    {/* Tag Row */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {current.preview.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-[#E8E5E0] bg-[#FAF9F7] px-3 py-1 text-xs font-medium text-[#111111]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-[#E8E5E0] pt-4">
                    <div className="flex gap-1.5">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeStep
                              ? "w-8 bg-[#8B5CF6]"
                              : "w-2 bg-[#E8E5E0]"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        disabled={activeStep === 0}
                        onClick={() =>
                          setActiveStep((prev) => Math.max(0, prev - 1))
                        }
                        className="rounded-xl border border-[#E8E5E0] bg-white px-3.5 py-2 text-xs font-semibold text-[#111111] transition hover:bg-[#FAF9F7] disabled:opacity-40"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        disabled={activeStep === steps.length - 1}
                        onClick={() =>
                          setActiveStep((prev) =>
                            Math.min(steps.length - 1, prev + 1)
                          )
                        }
                        className="rounded-xl bg-[#8B5CF6] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#7C3AED] disabled:opacity-40"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}