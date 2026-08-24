import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BarChart3,
  CloudLightning,
  Layers,
  Sparkles,
  GitBranch,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Projects() {
  return (
    <section className="bg-[#FAF9F7] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proof of Work"
          title="Real-World Systems & AI Software."
          description="Move beyond basic tutorial apps. Every student builds and ships production-grade software directly to their public GitHub and live domains."
        />

        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Card 1: Autonomous AI Agent */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-[#E8E5E0] bg-white shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50"
          >
            <div className="relative h-56 w-full border-b border-[#E8E5E0] bg-[#0A0D14] p-5 font-mono text-xs text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="ml-2 text-[11px] text-slate-400">rag_engine.py</span>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-violet-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-violet-300">
                  <Bot size={12} />
                  LLM Stream
                </span>
              </div>

              <div className="mt-4 space-y-2 text-[11px] leading-relaxed">
                <div className="text-slate-400">&gt; Query: "Synthesise Q3 market trends"</div>
                <div className="text-violet-300">&gt; Vector Cosine Match: 0.941 (Pinecone DB)</div>
                <div className="rounded-lg bg-white/5 p-2.5 text-emerald-400">
                  [AI Summary]: High demand in enterprise LLM tooling with 3.4x ARR expansion...
                </div>
              </div>
            </div>

            <div className="p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
                  AI & Data Engineering
                </span>
                <span className="flex items-center gap-1 rounded-full bg-[#EDE9FE] px-2.5 py-1 text-xs font-bold text-[#8B5CF6]">
                  <Sparkles size={12} />
                  &lt;250ms Query
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-[#111111] group-hover:text-[#8B5CF6] transition-colors flex items-center justify-between">
                Autonomous AI Research Agent
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                Full RAG pipeline combining automated web scraping, semantic embeddings, and LLM reasoning models with streaming outputs.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#E8E5E0] bg-[#FAF9F7] px-2.5 py-1 text-xs font-medium text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Marketing & Growth Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-[#E8E5E0] bg-white shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50"
          >
            <div className="relative flex h-56 w-full flex-col justify-between border-b border-[#E8E5E0] bg-gradient-to-br from-violet-950 via-slate-900 to-[#111111] p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 size={15} className="text-violet-400" />
                  <span className="text-xs font-semibold text-slate-200">Ad Campaign Analytics</span>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                  +34.2% ROAS
                </span>
              </div>

              <div className="flex h-20 items-end justify-between gap-2 px-2 pt-2">
                {[35, 55, 42, 78, 62, 90, 84, 100].map((height, i) => (
                  <div key={i} className="flex h-full w-full flex-col items-center justify-end">
                    <div
                      style={{ height: `${height}%` }}
                      className="w-full rounded-t-md bg-gradient-to-t from-violet-600 to-indigo-400 transition-all group-hover:from-violet-500 group-hover:to-pink-400"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                <span>Google & Meta Spend: $12,450</span>
                <span className="font-semibold text-emerald-400">Revenue: $48,800</span>
              </div>
            </div>

            <div className="p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
                  Growth & Digital Marketing
                </span>
                <span className="flex items-center gap-1 rounded-full bg-[#EDE9FE] px-2.5 py-1 text-xs font-bold text-[#8B5CF6]">
                  <Sparkles size={12} />
                  3.9x Attribution
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-[#111111] group-hover:text-[#8B5CF6] transition-colors flex items-center justify-between">
                Real-Time Ad Performance Dashboard
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                Omnichannel growth console tracking live conversions, CAC, automated ad spend bidding, and ROI forecasting.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "TypeScript", "Google Ads API", "Node.js", "Redis"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#E8E5E0] bg-[#FAF9F7] px-2.5 py-1 text-xs font-medium text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Multi-Tenant Enterprise SaaS Platform */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-[#E8E5E0] bg-white shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50"
          >
            <div className="relative flex h-56 w-full flex-col justify-between border-b border-[#E8E5E0] bg-[#0E131F] p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Layers size={15} className="text-violet-400" />
                  <span className="text-xs font-semibold text-slate-200">SaaS Workspace API</span>
                </div>
                <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold text-blue-400">
                  v2.4 Live
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-lg bg-white/5 p-2.5">
                  <span className="font-mono text-slate-300">GET /api/v1/workspaces</span>
                  <span className="font-semibold text-emerald-400">200 OK (14ms)</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/5 p-2.5">
                  <span className="font-mono text-slate-300">POST /api/v1/stripe/webhook</span>
                  <span className="font-semibold text-violet-300">Invoice Paid ($240)</span>
                </div>
              </div>

              <div className="flex justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                <span>Multi-Org RBAC</span>
                <span className="text-slate-300">PostgreSQL + Prisma</span>
              </div>
            </div>

            <div className="p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
                  Full Stack Architecture
                </span>
                <span className="flex items-center gap-1 rounded-full bg-[#EDE9FE] px-2.5 py-1 text-xs font-bold text-[#8B5CF6]">
                  <Sparkles size={12} />
                  Enterprise Ready
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-[#111111] group-hover:text-[#8B5CF6] transition-colors flex items-center justify-between">
                Multi-Tenant SaaS Workspace
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                Scalable subscription software featuring multi-tenant database isolation, automated Stripe recurring billing, and permissions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe API"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#E8E5E0] bg-[#FAF9F7] px-2.5 py-1 text-xs font-medium text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Cloud Kubernetes CI/CD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-[#E8E5E0] bg-white shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50"
          >
            <div className="relative flex h-56 w-full flex-col justify-between border-b border-[#E8E5E0] bg-[#0B1120] p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <CloudLightning size={15} className="text-violet-400" />
                  <span className="text-xs font-semibold text-slate-200">AWS EKS Cluster Status</span>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                  <GitBranch size={11} />
                  Continuous Deploy
                </span>
              </div>

              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex justify-between rounded-lg bg-white/5 p-2">
                  <span className="text-slate-300">k8s-pod/web-frontend-7f9</span>
                  <span className="text-emerald-400">Running (100%)</span>
                </div>
                <div className="flex justify-between rounded-lg bg-white/5 p-2">
                  <span className="text-slate-300">k8s-pod/api-gateway-3x1</span>
                  <span className="text-emerald-400">Running (100%)</span>
                </div>
              </div>

              <div className="flex justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                <span>Terraform Provisioned</span>
                <span className="text-violet-300">Zero-Downtime Rollout</span>
              </div>
            </div>

            <div className="p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
                  Cloud & Infrastructure
                </span>
                <span className="flex items-center gap-1 rounded-full bg-[#EDE9FE] px-2.5 py-1 text-xs font-bold text-[#8B5CF6]">
                  <Sparkles size={12} />
                  AWS Deployed
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-[#111111] group-hover:text-[#8B5CF6] transition-colors flex items-center justify-between">
                Kubernetes CI/CD Cloud Pipeline
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                Infrastructure-as-Code pipeline running automated container builds, Docker caching, secret management, and zero-downtime rolling updates.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "AWS EKS", "Terraform", "GitHub Actions"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#E8E5E0] bg-[#FAF9F7] px-2.5 py-1 text-xs font-medium text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}