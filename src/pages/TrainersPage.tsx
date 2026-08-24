import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Star,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Laptop,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { trainers } from "../data/trainers";

const filterTabs = [
  { id: "all", label: "All Mentors" },
  { id: "web", label: "Full Stack & Web" },
  { id: "ai", label: "AI & Data Science" },
  { id: "cloud", label: "DevOps & Cloud" },
  { id: "dsa", label: "DSA & Algorithms" },
];

export default function TrainersPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const totalStudents = trainers.reduce(
    (acc, curr) => acc + (curr.studentsTrained || 0),
    0
  );

  const filteredTrainers = trainers.filter((t) => {
    if (activeFilter === "all") return true;
    return t.domain === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F7] px-6 pb-28 pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Mentors & Instructors"
          title="Learn from active software engineers, not lecturers."
          description="Every CodeSphere mentor is an experienced industry developer dedicated to direct 1:1 code reviews, real-time debugging, and personalized career guidance."
        />

        {/* Impact & Metric Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4 rounded-2xl border border-[#E8E5E0] bg-white p-5 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6]">
              <Users size={24} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#111111]">
                {totalStudents > 0 ? `${totalStudents}+` : "1,350+"}
              </p>
              <p className="text-xs text-[#6B6B6B]">Students Mentored 1:1</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#E8E5E0] bg-white p-5 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6]">
              <Star size={24} className="text-amber-500" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#111111]">4.9 / 5.0</p>
              <p className="text-xs text-[#6B6B6B]">Average Session Rating</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#E8E5E0] bg-white p-5 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6]">
              <Laptop size={24} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#111111]">100% Live</p>
              <p className="text-xs text-[#6B6B6B]">Two-way Screen Sharing</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#E8E5E0] bg-white p-5 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#111111]">Top 3%</p>
              <p className="text-xs text-[#6B6B6B]">Mentor Selection Rate</p>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#8B5CF6] text-white shadow-sm shadow-violet-200"
                    : "border border-[#E8E5E0] bg-white text-[#555555] hover:border-violet-300 hover:text-[#111111]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Mentor Cards */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTrainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E8E5E0] bg-white shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50"
              >
                <div>
                  {/* Image & Header Area */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    {trainer.image ? (
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#EDE9FE] font-bold text-[#8B5CF6]">
                        {trainer.name}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <div>
                        <p className="text-base font-bold leading-tight">
                          {trainer.name}
                        </p>
                        <p className="text-[11px] text-slate-300">
                          {trainer.experience}
                        </p>
                      </div>
                      <span className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-xs font-semibold backdrop-blur-md">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        {trainer.rating}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#8B5CF6]">
                        {trainer.role}
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-[#6B6B6B]">
                      {trainer.description}
                    </p>

                    {/* Skills Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {trainer.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-[#E8E5E0] bg-[#FAF9F7] px-2 py-0.5 text-[10px] font-medium text-[#111111]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Student Count & CTA */}
                <div className="border-t border-[#E8E5E0] bg-[#FAF9F7] p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#6B6B6B]">
                      <strong className="text-[#111111]">
                        {trainer.studentsTrained}+
                      </strong>{" "}
                      mentored
                    </span>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 font-bold text-[#8B5CF6] transition-colors hover:text-[#7C3AED]"
                    >
                      Book 1:1 Intro
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mentor Vetting Standards Banner */}
        <div className="mt-20 rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm lg:p-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
            <Award size={16} />
            <span>Our Quality Standard</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold text-[#111111] md:text-3xl">
            How We Vet Every CodeSphere Mentor
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-5">
              <div className="flex items-center gap-2 font-bold text-[#111111]">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <h4>Production Code Verification</h4>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#6B6B6B]">
                We review public GitHub repositories, architecture designs, and past enterprise contributions before onboarding.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-5">
              <div className="flex items-center gap-2 font-bold text-[#111111]">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <h4>Pedagogical & Empathy Evaluation</h4>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#6B6B6B]">
                Being a great coder isn't enough. Mentors undergo live simulated sessions to test patience and communication clarity.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-5">
              <div className="flex items-center gap-2 font-bold text-[#111111]">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <h4>Continuous Feedback Tracking</h4>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#6B6B6B]">
                Student and parent ratings are reviewed on an ongoing basis to ensure every 1:1 class maintains excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#8B5CF6] px-6 py-3.5 text-xs font-semibold text-white shadow-md transition hover:bg-[#7C3AED]"
          >
            <Sparkles size={14} />
            <span>Get Matched With a Mentor Today</span>
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}