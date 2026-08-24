export interface Trainer {
  id: number;
  name: string;
  role: string;
  experience: string;
  image: string;
  skills: string[];
  description: string;
  studentsTrained: number;
  rating: number;
  domain: "web" | "ai" | "cloud" | "dsa";
  previousAt?: string;
}

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Full Stack & System Architect",
    experience: "8+ Years Experience",
    image: "/trainers/trainer-1.jpg",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Next.js"],
    description:
      "Specializes in end-to-end web apps, clean API architecture, and mentoring students to build production-grade SaaS portfolios.",
    studentsTrained: 380,
    rating: 4.9,
    domain: "web",
    previousAt: "Ex-Senior Engineer",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "AI & Machine Learning Specialist",
    experience: "7+ Years Experience",
    image: "/trainers/trainer-2.jpg",
    skills: ["Python", "PyTorch", "LangChain", "Vector DBs", "FastAPI"],
    description:
      "Passionate about demystifying machine learning, data visualization, and building autonomous LLM agents with practical Python.",
    studentsTrained: 310,
    rating: 5.0,
    domain: "ai",
    previousAt: "AI Research Practitioner",
  },
  {
    id: 3,
    name: "David Smith",
    role: "DevOps & Cloud Architect",
    experience: "9+ Years Experience",
    image: "/trainers/trainer-3.jpg",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    description:
      "Guides developers through cloud automation, container orchestration, zero-downtime deployments, and backend infrastructure.",
    studentsTrained: 260,
    rating: 4.9,
    domain: "cloud",
    previousAt: "Cloud Solutions Lead",
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "DSA & Algorithmic Problem Solving",
    experience: "6+ Years Experience",
    image: "/trainers/trainer-4.jpg",
    skills: ["C++", "Algorithms", "System Design", "Dynamic Programming"],
    description:
      "Focuses on interview problem-solving intuition, time complexity optimization, and mastering FAANG/Tier-1 coding rounds.",
    studentsTrained: 420,
    rating: 5.0,
    domain: "dsa",
    previousAt: "Competitive Programmer",
  },
];