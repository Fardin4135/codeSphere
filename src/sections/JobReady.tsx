import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Terminal,
  Code2,
  Laptop,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const tracks = [
  { id: "all", label: "All Tracks" },
  { id: "dev", label: "Full Stack & Web" },
  { id: "cs", label: "DSA & Problem Solving" },
  { id: "ai", label: "AI & Data" },
  { id: "cloud", label: "DevOps & Cloud" },
];

export default function JobReady() {
  const [activeTab, setActiveTab] = useState("all");
  const jobReadyCourses = courses.filter((course) => course.category === "adult");

  // Filter courses based on active track
  const filteredCourses = jobReadyCourses.filter((course) => {
    if (activeTab === "dev") {
      return (
        course.id.includes("fullstack") ||
        course.id.includes("frontend") ||
        course.id.includes("marketing")
      );
    }
    if (activeTab === "cs") {
      return (
        course.id.includes("dsa") ||
        course.id.includes("java") ||
        course.id.includes("python")
      );
    }
    if (activeTab === "ai") {
      return course.id.includes("ai") || course.id.includes("excel");
    }
    if (activeTab === "cloud") {
      return course.id.includes("devops");
    }
    return true;
  });

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Job Ready Zone · 12th Pass & College"
          title="Upgrade your skills. Accelerate your career."
          description="Practical technology and professional development programs designed around real-world skills and career goals."
        />

        {/* Feature Pills */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-[#E8E5E0] bg-[#FAF9F7] px-4 py-2 text-xs font-medium text-[#111111]">
            <CheckCircle2 size={15} className="text-[#8B5CF6]" />
            <span>1:1 Live Mentorship</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#E8E5E0] bg-[#FAF9F7] px-4 py-2 text-xs font-medium text-[#111111]">
            <CheckCircle2 size={15} className="text-[#8B5CF6]" />
            <span>GitHub Portfolio Builds</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#E8E5E0] bg-[#FAF9F7] px-4 py-2 text-xs font-medium text-[#111111]">
            <CheckCircle2 size={15} className="text-[#8B5CF6]" />
            <span>Technical Interview Prep</span>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-10">
          {tracks.map((track) => {
            const isActive = activeTab === track.id;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveTab(track.id)}
                className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#8B5CF6] text-white shadow-md shadow-violet-200"
                    : "border border-[#E8E5E0] bg-[#FAF9F7] text-[#555555] hover:border-violet-300 hover:text-[#111111]"
                }`}
              >
                {track.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content View */}
        <AnimatePresence mode="wait">
          {activeTab === "all" ? (
            /* ================= BENTO GRID FOR "ALL TRACKS" ================= */
            <motion.div
              key="all-tracks-bento"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {/* Bento Card 1: Featured Flagship (Spans 2 columns on desktop) */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-[#FAF9F7] via-white to-violet-50/50 p-8 shadow-sm lg:col-span-2"
              >
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="max-w-md">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-bold text-[#8B5CF6]">
                      <Sparkles size={13} />
                      FLAGSHIP TRACK
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-[#111111]">
                      Full Stack & Systems Architecture
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                      Master end-to-end web engineering, APIs, database modeling, and automated cloud deployments with direct 1:1 guidance.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-[#E8E5E0] bg-white px-2.5 py-1 text-xs font-medium text-[#111111]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Simulation Visual */}
                  <div className="w-full rounded-2xl border border-slate-800 bg-[#0F172A] p-4 text-white shadow-lg lg:w-[280px] shrink-0">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[10px] text-slate-400">
                      <div className="flex gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-red-400" />
                        <div className="h-2 w-2 rounded-full bg-yellow-400" />
                        <div className="h-2 w-2 rounded-full bg-green-400" />
                      </div>
                      <span>build.sh</span>
                    </div>
                    <div className="mt-3 space-y-1 font-mono text-[11px] leading-tight">
                      <div className="text-violet-400">$ npm run deploy:prod</div>
                      <div className="text-slate-400">✓ Bundled in 1.4s</div>
                      <div className="text-emerald-400">✓ 100% Tests passing</div>
                      <div className="text-slate-500">// Ready for production</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bento Card 2: Interview & Placement Accelerator */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9FE] text-[#8B5CF6]">
                    <Code2 size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#111111]">
                    DSA & Technical Interview Prep
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                    Structured problem-solving strategies for coding rounds, whiteboard interviews, and campus placements.
                  </p>
                </div>

                <div className="mt-6 rounded-2xl bg-[#FAF9F7] p-4 border border-[#E8E5E0]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#111111]">Pattern Mastery</span>
                    <span className="font-bold text-[#8B5CF6]">40+ Problems</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#EDE9FE]">
                    <div className="h-full w-4/5 rounded-full bg-[#8B5CF6]" />
                  </div>
                </div>
              </motion.div>

              {/* Bento Card 3: AI & Applied Machine Learning */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9FE] text-[#8B5CF6]">
                  <Terminal size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#111111]">
                  AI & Machine Learning
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                  Practical model development with Python, scikit-learn, and prompt engineering pipelines.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-[#FAF9F7] border border-[#E8E5E0] px-2.5 py-1 text-xs font-medium text-[#111111]">
                    Python
                  </span>
                  <span className="rounded-lg bg-[#FAF9F7] border border-[#E8E5E0] px-2.5 py-1 text-xs font-medium text-[#111111]">
                    ML Models
                  </span>
                  <span className="rounded-lg bg-[#FAF9F7] border border-[#E8E5E0] px-2.5 py-1 text-xs font-medium text-[#111111]">
                    Data Analysis
                  </span>
                </div>
              </motion.div>

              {/* Bento Card 4: DevOps & Cloud Infrastructure */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9FE] text-[#8B5CF6]">
                  <Laptop size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#111111]">
                  Cloud & CI/CD Pipelines
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                  Containerise applications with Docker, configure AWS services, and automate workflows.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-[#FAF9F7] border border-[#E8E5E0] px-2.5 py-1 text-xs font-medium text-[#111111]">
                    Docker
                  </span>
                  <span className="rounded-lg bg-[#FAF9F7] border border-[#E8E5E0] px-2.5 py-1 text-xs font-medium text-[#111111]">
                    AWS
                  </span>
                  <span className="rounded-lg bg-[#FAF9F7] border border-[#E8E5E0] px-2.5 py-1 text-xs font-medium text-[#111111]">
                    GitHub Actions
                  </span>
                </div>
              </motion.div>

              {/* Bento Card 5: Modern Programming Foundation (Python / C++) */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9FE] text-[#8B5CF6]">
                  <Code2 size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#111111]">
                  Core Programming Languages
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                  Strengthen your foundation in C, C++, Java, or Python with object-oriented best practices.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-[#FAF9F7] border border-[#E8E5E0] px-2.5 py-1 text-xs font-medium text-[#111111]">
                    C++ / Java
                  </span>
                  <span className="rounded-lg bg-[#FAF9F7] border border-[#E8E5E0] px-2.5 py-1 text-xs font-medium text-[#111111]">
                    OOP Principles
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* ================= FILTERED CARDS VIEW ================= */
            <motion.div
              key="filtered-tracks-grid"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/job-ready"
            className="group inline-flex items-center gap-2 rounded-xl border border-[#E8E5E0] bg-[#FAF9F7] px-6 py-3.5 text-sm font-semibold text-[#111111] shadow-xs transition duration-200 hover:border-[#8B5CF6] hover:bg-[#EDE9FE] hover:text-[#8B5CF6]"
          >
            <span>View All Job Ready Programs</span>
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}