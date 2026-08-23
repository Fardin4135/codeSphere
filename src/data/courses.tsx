import type { ReactNode } from "react";
import {
  Binary,
  Bot,
  Cloud,
  CodeXml,
  FileSpreadsheet,
  Globe,
  Layers,
  Megaphone,
  Palette,
  Terminal,
} from "lucide-react";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: "kids" | "adult";
  level: string;
  icon: ReactNode;
  color: string;
}

export const courses: Course[] = [
  // ================= KIDS =================
  {
    id: "kids-c",
    title: "C Programming",
    description:
      "Build strong programming fundamentals through practical exercises and projects.",
    category: "kids",
    level: "Beginner",
    icon: <span className="font-mono text-2xl font-bold tracking-tight">C</span>,
    color: "from-violet-600 to-indigo-600",
  },
  {
    id: "kids-cpp",
    title: "C++ Programming",
    description:
      "Learn programming logic, problem solving and object-oriented concepts.",
    category: "kids",
    level: "Beginner",
    icon: <span className="font-mono text-xl font-bold tracking-tight">C++</span>,
    color: "from-purple-600 to-violet-700",
  },
  {
    id: "kids-python",
    title: "Python",
    description:
      "Learn Python through fun examples, coding challenges and practical projects.",
    category: "kids",
    level: "Beginner",
    icon: <Terminal className="h-7 w-7" />,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "kids-java",
    title: "Java",
    description:
      "Understand Java programming and develop strong object-oriented thinking.",
    category: "kids",
    level: "Beginner",
    icon: <CodeXml className="h-7 w-7" />,
    color: "from-purple-500 to-violet-600",
  },
  {
    id: "kids-html",
    title: "HTML",
    description:
      "Create your first websites and understand how the web works.",
    category: "kids",
    level: "Beginner",
    icon: <Globe className="h-7 w-7" />,
    color: "from-violet-600 to-purple-500",
  },
  {
    id: "kids-css",
    title: "CSS",
    description:
      "Learn how to style beautiful, responsive and interactive websites.",
    category: "kids",
    level: "Beginner",
    icon: <Palette className="h-7 w-7" />,
    color: "from-purple-600 to-violet-500",
  },
  {
    id: "kids-javascript",
    title: "JavaScript",
    description:
      "Make websites interactive and learn modern web programming.",
    category: "kids",
    level: "Beginner",
    icon: <span className="font-mono text-xl font-bold tracking-tight">JS</span>,
    color: "from-violet-500 to-indigo-600",
  },
  {
    id: "kids-ai",
    title: "Basic AI",
    description:
      "Discover artificial intelligence through simple concepts and fun projects.",
    category: "kids",
    level: "Beginner",
    icon: <Bot className="h-7 w-7" />,
    color: "from-purple-600 to-indigo-600",
  },

  // ================= ADULTS =================
  {
    id: "adult-dsa",
    title: "DSA & LeetCode",
    description:
      "Master data structures and algorithms with interview-focused problem solving.",
    category: "adult",
    level: "Intermediate",
    icon: <Binary className="h-7 w-7" />,
    color: "from-violet-600 to-indigo-700",
  },
  {
    id: "adult-fullstack",
    title: "Full Stack Development",
    description:
      "Build complete web applications using modern frontend and backend technologies.",
    category: "adult",
    level: "Intermediate",
    icon: <Layers className="h-7 w-7" />,
    color: "from-purple-600 to-violet-600",
  },
  {
    id: "adult-digital-marketing",
    title: "Digital Marketing",
    description:
      "Learn modern digital marketing strategies, advertising and analytics.",
    category: "adult",
    level: "Beginner",
    icon: <Megaphone className="h-7 w-7" />,
    color: "from-violet-500 to-purple-700",
  },
  {
    id: "adult-excel",
    title: "Excel Expert",
    description:
      "Master formulas, dashboards, data analysis, PivotTables and automation.",
    category: "adult",
    level: "Beginner to Advanced",
    icon: <FileSpreadsheet className="h-7 w-7" />,
    color: "from-purple-600 to-violet-800",
  },
  {
    id: "adult-java",
    title: "Java Development",
    description:
      "Learn Java development with object-oriented programming and practical applications.",
    category: "adult",
    level: "Intermediate",
    icon: <CodeXml className="h-7 w-7" />,
    color: "from-violet-700 to-purple-600",
  },
  {
    id: "adult-python",
    title: "Python Development",
    description:
      "Build real-world Python applications and strengthen your programming skills.",
    category: "adult",
    level: "Beginner to Advanced",
    icon: <Terminal className="h-7 w-7" />,
    color: "from-purple-500 to-violet-700",
  },
  {
    id: "adult-ai-ml",
    title: "AI & Machine Learning",
    description:
      "Learn machine learning concepts and build practical AI-powered projects.",
    category: "adult",
    level: "Intermediate",
    icon: <Bot className="h-7 w-7" />,
    color: "from-violet-600 to-indigo-600",
  },
  {
    id: "adult-frontend",
    title: "Frontend Development",
    description:
      "Build modern responsive websites using HTML, CSS, JavaScript and React.",
    category: "adult",
    level: "Beginner to Advanced",
    icon: <Globe className="h-7 w-7" />,
    color: "from-purple-600 to-violet-600",
  },
  {
    id: "adult-devops",
    title: "DevOps",
    description:
      "Learn Docker, AWS, CI/CD, Kubernetes and modern DevOps practices.",
    category: "adult",
    level: "Intermediate",
    icon: <Cloud className="h-7 w-7" />,
    color: "from-violet-500 to-indigo-700",
  },
];