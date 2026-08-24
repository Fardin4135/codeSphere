import { motion } from "framer-motion";
import {
  Award,

  CheckCircle2,
  Code2,
  Globe2,
  HeartHandshake,
  Laptop,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const pillars = [
  {
    icon: Users,
    title: "100% Dedicated 1:1 Focus",
    description:
      "We avoid crowded 50-person online classrooms. Every session is an individual, two-way dialogue paced to your exact comprehension speed.",
  },
  {
    icon: Laptop,
    title: "Engineers, Not Just Lecturers",
    description:
      "Learn from active software developers and AI practitioners who teach modern engineering patterns, not outdated textbook theories.",
  },
  {
    icon: Code2,
    title: "Production Proof-of-Work",
    description:
      "Move beyond toy tutorials. Every learner writes clean code, pushes to GitHub, deploys web applications, or designs working games.",
  },
  {
    icon: Globe2,
    title: "UK & India Timezone Harmony",
    description:
      "Flexible, reliable scheduling tailored seamlessly for school routines and working hours across GMT/BST and IST zones.",
  },
];

const values = [
  {
    title: "Empathy-Driven Teaching",
    desc: "Coding can feel overwhelming initially. Our mentors are trained to break complex logic into intuitive analogies.",
  },
  {
    title: "Continuous Feedback Loop",
    desc: "No waiting for grading periods. Real-time screen share enables live debugging and instant doubt clearance.",
  },
  {
    title: "Transparent Career & Academic Outcomes",
    desc: "Whether aiming for GCSE computer science grades or FAANG coding interviews, every milestone is measurable.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] px-6 pb-28 pt-36 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="About CodeSphere"
          title="Technology education engineered around people."
          description="We bridge the gap between abstract computer science theory and real-world software engineering through personalized, 1:1 live mentorship."
        />

        {/* Story / Mission & Vision Split */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-between rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm lg:p-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#EDE9FE] px-3.5 py-1.5 text-xs font-bold text-[#8B5CF6]">
                <Target size={15} />
                <span>Our Mission</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-[#111111]">
                Democratizing Practical Engineering
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">
                Most online coding courses leave students stranded behind pre-recorded videos with zero feedback when code fails.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                CodeSphere was founded on a simple principle: <strong className="text-[#111111]">the fastest way to master technology is through active, live mentorship with someone who builds software for a living.</strong>
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-[#E8E5E0] pt-6 text-xs font-semibold text-[#111111]">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Tailored for Kids (10+) & Career Switchers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm lg:p-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#EDE9FE] px-3.5 py-1.5 text-xs font-bold text-[#8B5CF6]">
                <Award size={15} />
                <span>Our Mentorship Standard</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-[#111111]">
                Mentors from Industry Frontlines
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">
                Our instructors aren't academic textbook readers. They are experienced full-stack developers, AI engineers, and DevOps architects who bring current industry standards into every lesson.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                Learners get direct exposure to real developer workflows—including Git branching, code reviews, API design, and system architecture.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-[#E8E5E0] pt-6 text-xs font-semibold text-[#111111]">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Rigorous Mentor Vetting & Screening</span>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars of CodeSphere */}
        <div className="mt-20">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
              How We Teach
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#111111] md:text-3xl">
              The CodeSphere Advantage
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex flex-col justify-between rounded-2xl border border-[#E8E5E0] bg-white p-6 shadow-sm transition-all duration-200 hover:border-violet-200 hover:shadow-md"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-[#111111]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#6B6B6B]">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Core Values & Philosophy */}
        <div className="mt-20 rounded-3xl border border-[#E8E5E0] bg-white p-8 lg:p-12 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
            <HeartHandshake size={16} />
            <span>Our Commitment</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#111111] md:text-3xl">
            Built on Clarity, Patience & Practical Skills
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-5">
                <span className="font-mono text-sm font-bold text-[#8B5CF6]">
                  0{i + 1}.
                </span>
                <h3 className="mt-2 font-bold text-[#111111] text-sm">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6B6B6B]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#111111] to-slate-900 p-8 text-center text-white lg:p-14 shadow-lg">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-violet-300">
            <Sparkles size={12} />
            Start Your Journey
          </span>
          <h2 className="mt-4 text-2xl font-bold md:text-4xl">
            Ready to experience 1:1 live mentorship?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            Book a complimentary 1:1 strategy session with one of our lead instructors to assess your goals and formulate a custom roadmap.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-[#8B5CF6] px-6 py-3.5 text-xs font-semibold text-white shadow-md transition hover:bg-[#7C3AED]"
            >
              Book Free Trial Session
            </Link>
            <Link
              to="/job-ready"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-white/10"
            >
              Explore Programs
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}