import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  GitBranch,
  Laptop,
  Terminal,
  Video,
  Sparkles,
  Zap,
  Globe2,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function WhyUs() {
  return (
    <section className="bg-[#FAF9F7] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why CodeSphere"
          title="More than lessons. An immersive coding environment."
          description="We focus on helping learners understand, build and deploy real software through live 1:1 mentorship and practical developer workflows."
        />

        {/* Top 3 Interactive Feature Visuals */}
        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Visual Card 1: 1:1 Live Coding Video Session */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-3xl border border-[#E8E5E0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#EDE9FE] px-3 py-1 text-xs font-semibold text-[#8B5CF6]">
                <Video size={14} />
                <span>1:1 Live Mentorship</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#111111]">
                Personalised 1:1 Attention
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                Direct screen sharing, real-time code reviews, and instant doubt clearance tailored to your learning pace.
              </p>
            </div>

            {/* Live Session Simulator */}
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#0D1117] p-4 text-white shadow-inner">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-[11px] text-slate-400">Live Code Room</span>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-semibold text-red-400">
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-red-400" />
                  LIVE
                </span>
              </div>

              <div className="mt-3 flex gap-3">
                <div className="flex-1 rounded-xl bg-white/5 p-2.5 font-mono text-[11px] text-slate-300">
                  <div className="text-violet-400">// Live trainer feedback</div>
                  <div><span className="text-pink-400">function</span> <span className="text-blue-300">binarySearch</span>(arr, x) &#123;</div>
                  <div className="pl-3 text-emerald-400">return mid; // ✓ Clean logic</div>
                  <div>&#125;</div>
                </div>

                <div className="flex w-20 flex-col items-center justify-center rounded-xl bg-violet-600/20 p-2 text-center">
                  <Laptop className="h-6 w-6 text-violet-400" />
                  <span className="mt-1 text-[9px] font-medium text-violet-200">Trainer Active</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Card 2: Real World Git & Project Deploy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-[#E8E5E0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#EDE9FE] px-3 py-1 text-xs font-semibold text-[#8B5CF6]">
                <Zap size={14} />
                <span>Hands-on Builds</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#111111]">
                Real-World Project Builds
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                Move beyond theoretical syntax by building and deploying live web apps to your GitHub portfolio.
              </p>
            </div>

            {/* Git Pipeline Simulator */}
            <div className="mt-6 rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs text-[#6B6B6B]">
                <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                  <GitBranch size={14} className="text-[#8B5CF6]" /> main branch
                </span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  Deployed
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-white p-2.5 text-xs shadow-xs">
                  <div className="flex items-center gap-2 truncate">
                    <Code2 size={15} className="shrink-0 text-violet-500" />
                    <span className="truncate font-mono font-medium text-[#111111]">feat: auth-api.ts</span>
                  </div>
                  <CheckCircle2 size={15} className="shrink-0 text-emerald-500" />
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white p-2.5 text-xs shadow-xs">
                  <div className="flex items-center gap-2 truncate">
                    <Terminal size={15} className="shrink-0 text-violet-500" />
                    <span className="truncate font-mono font-medium text-[#111111]">tests: 18 passed (100%)</span>
                  </div>
                  <CheckCircle2 size={15} className="shrink-0 text-emerald-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Card 3: Milestone & Roadmap Progress */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between rounded-3xl border border-[#E8E5E0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#EDE9FE] px-3 py-1 text-xs font-semibold text-[#8B5CF6]">
                <Sparkles size={14} />
                <span>Clear Outcomes</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#111111]">
                Goal-Oriented Roadmaps
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                Whether you are aiming for top CS grades, university entrance, or tech interviews, each curriculum adapts to you.
              </p>
            </div>

            {/* Animated Progress Tracker */}
            <div className="mt-6 rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#111111]">Skill Readiness</span>
                <span className="font-bold text-[#8B5CF6]">92%</span>
              </div>

              <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[#EDE9FE]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-[#8B5CF6]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-center text-[11px]">
                <div className="font-medium text-[#111111]">
                  <div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                    1
                  </div>
                  Basics
                </div>
                <div className="h-[1px] flex-1 bg-[#E8E5E0]" />
                <div className="font-medium text-[#111111]">
                  <div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                    2
                  </div>
                  Projects
                </div>
                <div className="h-[1px] flex-1 bg-[#E8E5E0]" />
                <div className="font-medium text-[#111111]">
                  <div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#8B5CF6] font-bold text-white shadow-sm">
                    3
                  </div>
                  Interview
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Highlights */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-2xl border border-[#E8E5E0] bg-white p-6 shadow-xs">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6]">
              <Globe2 size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#111111]">UK & India Scheduling</h4>
              <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
                Flexible online class times structured to fit seamlessly across UK (GMT/BST) and India (IST) timezones.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-[#E8E5E0] bg-white p-6 shadow-xs">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6]">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#111111]">Skills That Grow With You</h4>
              <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">
                Seamless progression from fundamental logic up to advanced algorithms, AI engineering, and cloud deployment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}