import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Code2,
  Laptop,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F7]">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:pb-24 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              <Sparkles className="h-4 w-4" />
              Industry-led learning for the future
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-7xl xl:text-[78px]">
              Learn skills.
              <br />

              <span className="text-violet-600">
                Build your future.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-[#666666] sm:text-lg">
              Personalised 1:1 online training with
              industry-experienced trainers. Learn coding,
              AI, digital marketing, development and more
              through practical, project-based learning.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/kids-zone"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl"
              >
                Explore Programs

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#DDD9D3] bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50"
              >
                Book a Free Consultation
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#666666]">
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">
                  ✓
                </span>
                1:1 Live Training
              </span>

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">
                  ✓
                </span>
                Industry Experts
              </span>

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">
                  ✓
                </span>
                Real Projects
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-2xl"
          >
            {/* Main purple visual */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-500 via-purple-500 to-violet-400 p-3 shadow-2xl shadow-violet-200/60"
            >
              {/* Inner image area */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#E9D5FF]">
                <img
                  src="/trainers/trainer-2.jpg"
                  alt="CodeSphere industry trainer"
                  className="h-full w-full object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Learn from industry experts
                  </div>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/20" />

              <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full border border-white/20" />
            </motion.div>

            {/* =================================================
                FLOATING CARD 1
            ================================================== */}
            <FloatingCard
              icon={<Code2 className="h-5 w-5" />}
              title="Programming"
              subtitle="Python • C++ • Java"
              className="-left-5 top-8 sm:-left-8"
              delay={0}
            />

            {/* =================================================
                FLOATING CARD 2
            ================================================== */}
            <FloatingCard
              icon={<Brain className="h-5 w-5" />}
              title="AI & Machine Learning"
              subtitle="Build the future"
              className="-right-5 top-24 sm:-right-8"
              delay={0.25}
            />

            {/* =================================================
                FLOATING CARD 3
            ================================================== */}
            <FloatingCard
              icon={<Laptop className="h-5 w-5" />}
              title="Real Projects"
              subtitle="Build your portfolio"
              className="bottom-8 left-4 sm:left-8"
              delay={0.5}
            />

            {/* =================================================
                SMALL STATS CARD
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              className="absolute -bottom-5 right-4 rounded-2xl border border-[#E8E5E0] bg-white p-4 shadow-xl sm:right-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-lg font-bold text-[#111111]">
                    1:1
                  </p>

                  <p className="text-xs text-[#777777]">
                    Personalised learning
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM TRUST BAR
        ====================================================== */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
          className="mt-20 border-t border-[#E8E5E0] pt-8"
        >
          <div className="grid gap-8 sm:grid-cols-3">

            <HeroStat
              number="1:1"
              label="Personalised Training"
            />

            <HeroStat
              number="10–17"
              label="Kids Learning Programs"
            />

            <HeroStat
              number="100%"
              label="Project-Based Learning"
            />

          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

/* ============================================================
   FLOATING CARD
============================================================ */

function FloatingCard({
  icon,
  title,
  subtitle,
  className,
  delay,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        scale: {
          duration: 0.6,
          delay,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`absolute ${className} z-10 w-48 rounded-2xl border border-[#E8E5E0] bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:w-52`}
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
        {icon}
      </div>

      <h3 className="text-sm font-semibold text-[#111111]">
        {title}
      </h3>

      <p className="mt-1 text-xs text-[#777777]">
        {subtitle}
      </p>
    </motion.div>
  );
}

/* ============================================================
   HERO STAT
============================================================ */

function HeroStat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 sm:justify-center">
      <p className="text-3xl font-semibold tracking-tight text-[#111111]">
        {number}
      </p>

      <p className="max-w-[130px] text-sm leading-5 text-[#777777]">
        {label}
      </p>
    </div>
  );
}