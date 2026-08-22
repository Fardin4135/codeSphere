import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Code2,
  Laptop,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <Sparkles size={15} className="text-blue-400" />
              Industry-led learning for the future
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Learn.
              <span className="block text-blue-400">
                Build.
              </span>
              <span className="block">
                Become Future-Ready.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Personalised 1:1 online technology training with
              industry-experienced trainers. Learn practical skills,
              build real projects and grow with confidence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/kids-zone"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Explore Programs
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Book a Free Consultation
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <span>✓ 1:1 Live Training</span>
              <span>✓ Industry Experts</span>
              <span>✓ Real Projects</span>
            </div>
          </motion.div>

          {/* Right visual */}
          <div className="relative mx-auto hidden h-[500px] w-full max-w-xl lg:block">
            <FloatingCard
              icon={<Code2 />}
              title="Coding"
              subtitle="Python • C++ • Java"
              className="left-0 top-10"
              delay={0}
            />

            <FloatingCard
              icon={<Brain />}
              title="AI & ML"
              subtitle="Learn the future"
              className="right-0 top-28"
              delay={0.3}
            />

            <FloatingCard
              icon={<Laptop />}
              title="Real Projects"
              subtitle="Build your portfolio"
              className="bottom-16 left-12"
              delay={0.6}
            />

            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-xl"
            >
              <div className="text-center">
                <div className="text-6xl">🚀</div>

                <p className="mt-5 font-semibold text-white">
                  Your Future
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Starts Here
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  icon,
  title,
  subtitle,
  className,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
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
      className={`absolute ${className} w-52 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl backdrop-blur-xl`}
    >
      <div className="mb-3 text-blue-400">
        {icon}
      </div>

      <h3 className="font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
}