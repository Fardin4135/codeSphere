import type { ReactNode } from "react";
import { Bot, BarChart3, CloudLightning, Layers } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: "AI & Data" | "Full Stack" | "Growth & Ads" | "DevOps & Cloud";
  icon: ReactNode;
  accentColor: string;
  metric: string;
}

export const projects: Project[] = [
  {
    id: "ai-agent-engine",
    title: "Autonomous AI Research Agent",
    subtitle: "RAG & LLM Pipeline",
    description:
      "A multi-source AI agent that performs web scraping, semantic vector search, and document summarization with real-time streaming output.",
    technologies: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI"],
    category: "AI & Data",
    icon: <Bot className="h-6 w-6 text-[#8B5CF6]" />,
    accentColor: "from-violet-500/10 to-purple-500/5",
    metric: "<250ms Vector Query",
  },
  {
    id: "saas-commerce",
    title: "Multi-Tenant SaaS Workspace",
    subtitle: "Enterprise Web Application",
    description:
      "Full-stack subscription platform featuring role-based access control, Stripe billing automation, webhooks, and analytics charts.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    icon: <Layers className="h-6 w-6 text-[#8B5CF6]" />,
    accentColor: "from-blue-500/10 to-violet-500/5",
    metric: "100% Type-Safe CRUD",
  },
  {
    id: "marketing-analytics",
    title: "Real-Time Ad Performance Dashboard",
    subtitle: "Marketing & Growth Engine",
    description:
      "Omnichannel marketing dashboard tracking live Google & Meta Ad spend, ROAS attribution, automated conversion alerts, and ROI forecasting.",
    technologies: ["React", "Chart.js", "Google Ads API", "Node.js", "Redis"],
    category: "Growth & Ads",
    icon: <BarChart3 className="h-6 w-6 text-[#8B5CF6]" />,
    accentColor: "from-emerald-500/10 to-teal-500/5",
    metric: "3.8x ROAS Tracking",
  },
  {
    id: "cloud-devops-pipeline",
    title: "Automated Kubernetes CI/CD Pipeline",
    subtitle: "Cloud Infrastructure",
    description:
      "Zero-downtime deployment pipeline with automated testing, container orchestration, Docker multi-stage builds, and AWS monitoring.",
    technologies: ["Docker", "Kubernetes", "AWS EKS", "GitHub Actions", "Terraform"],
    category: "DevOps & Cloud",
    icon: <CloudLightning className="h-6 w-6 text-[#8B5CF6]" />,
    accentColor: "from-sky-500/10 to-indigo-500/5",
    metric: "Zero Downtime Deploy",
  },
];