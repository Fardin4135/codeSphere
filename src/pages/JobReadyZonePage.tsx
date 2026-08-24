import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  Star,
  Sparkles,
  ArrowRight,
  Code2,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { jobReadyCoursesDetailed } from "../data/jobReadyCoursesDetailed";

export default function JobReadyZonePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] px-6 pb-28 pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Job Ready Zone · College & Professional"
          title="Develop skills that move your career forward."
          description="Practical technology and system engineering programs. Choose between focused foundation tracks or comprehensive career accelerators with transparent USD pricing."
        />

        {/* Feature Pills */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[#E8E5E0] bg-white px-4 py-2 text-xs font-semibold text-[#111111] shadow-xs">
  <Briefcase size={16} className="text-[#8B5CF6]" />
  <span>1:1 Senior Engineer Mentorship</span>
</div>
          <div className="flex items-center gap-2 rounded-full border border-[#E8E5E0] bg-white px-4 py-2 text-xs font-semibold text-[#111111] shadow-xs">
            <GitBranch size={16} className="text-[#8B5CF6]" />
            <span>Production GitHub Portfolio</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#E8E5E0] bg-white px-4 py-2 text-xs font-semibold text-[#111111] shadow-xs">
            <Code2 size={16} className="text-[#8B5CF6]" />
            <span>Technical Interview Drills</span>
          </div>
        </div>

        {/* Detailed Program Cards */}
        <div className="space-y-16">
          {jobReadyCoursesDetailed.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="overflow-hidden rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm lg:p-12"
            >
              {/* Program Header */}
              <div className="flex flex-col justify-between gap-4 border-b border-[#E8E5E0] pb-8 md:flex-row md:items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-bold text-[#8B5CF6]">
                    {course.level}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-[#111111] md:text-3xl">
                    {course.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#8B5CF6]">
                    {course.tagline}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] px-5 py-3 text-xs font-semibold text-white shadow-xs transition hover:bg-[#8B5CF6]"
                >
                  Book Free 1:1 Consultation
                  <ArrowRight size={14} />
                </Link>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#6B6B6B]">
                {course.overview}
              </p>

              {/* Tiers Grid (Core Foundation vs Job Ready Pro) */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* Basic / Core Tier */}
                <div className="flex flex-col justify-between rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#111111]">
                        {course.tiers.basic.name}
                      </h3>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-[#111111]">
                          ${course.tiers.basic.priceUSD}
                        </span>
                        <span className="text-[11px] text-[#6B6B6B]">
                          {" "}
                          / program
                        </span>
                      </div>
                    </div>

                    <p className="mt-1 text-xs font-medium text-[#8B5CF6]">
                      {course.tiers.basic.duration}
                    </p>

                    <div className="mt-5 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                        Core Curriculum:
                      </p>
                      {course.tiers.basic.curriculum.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-xs text-[#555555]"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-emerald-600"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-[#E8E5E0] pt-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                        Project Outcomes:
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {course.tiers.basic.projects.map((proj) => (
                          <span
                            key={proj}
                            className="rounded-md border border-[#E8E5E0] bg-white px-2.5 py-1 text-[11px] font-medium text-[#111111]"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-6 block rounded-xl border border-[#E8E5E0] bg-white py-2.5 text-center text-xs font-semibold text-[#111111] transition hover:border-[#8B5CF6] hover:bg-[#EDE9FE] hover:text-[#8B5CF6]"
                  >
                    Enroll in Core Track
                  </Link>
                </div>

                {/* Pro Tier */}
                <div className="relative flex flex-col justify-between rounded-2xl border-2 border-[#8B5CF6] bg-white p-6 shadow-md shadow-violet-100/50">
                  {course.tiers.pro.badge && (
                    <span className="absolute -top-3 right-6 flex items-center gap-1 rounded-full bg-[#8B5CF6] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                      <Sparkles size={11} />
                      {course.tiers.pro.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#111111]">
                        {course.tiers.pro.name}
                      </h3>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-[#8B5CF6]">
                          ${course.tiers.pro.priceUSD}
                        </span>
                        <span className="text-[11px] text-[#6B6B6B]">
                          {" "}
                          / full accelerator
                        </span>
                      </div>
                    </div>

                    <p className="mt-1 text-xs font-medium text-[#8B5CF6]">
                      {course.tiers.pro.duration}
                    </p>

                    <div className="mt-5 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                        Comprehensive Modules & Architecture:
                      </p>
                      {course.tiers.pro.curriculum.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-xs text-[#333333]"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-[#8B5CF6]"
                          />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-[#E8E5E0] pt-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                        Production Deployments & Case Studies:
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {course.tiers.pro.projects.map((proj) => (
                          <span
                            key={proj}
                            className="rounded-md border border-violet-200 bg-[#FAF9F7] px-2.5 py-1 text-[11px] font-medium text-[#8B5CF6]"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-6 block rounded-xl bg-[#8B5CF6] py-2.5 text-center text-xs font-semibold text-white shadow-xs transition hover:bg-[#7C3AED]"
                  >
                    Enroll in Career Accelerator
                  </Link>
                </div>
              </div>

              {/* Reviews Section */}
              {course.reviews.length > 0 && (
                <div className="mt-10 border-t border-[#E8E5E0] pt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">
                    Student & Alumni Feedback
                  </span>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {course.reviews.map((rev) => (
                      <div
                        key={rev.name}
                        className="rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-4.5 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} size={13} fill="currentColor" />
                            ))}
                          </div>
                          <span className="text-[11px] text-[#6B6B6B]">
                            {rev.location}
                          </span>
                        </div>

                        <p className="mt-2.5 leading-relaxed text-[#555555]">
                          "{rev.comment}"
                        </p>

                        <p className="mt-3 font-semibold text-[#111111]">
                          {rev.name} ·{" "}
                          <span className="font-normal text-[#6B6B6B]">
                            {rev.role}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
