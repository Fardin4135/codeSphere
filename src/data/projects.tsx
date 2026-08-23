import type { ReactNode } from "react";
import { Bot, CloudSun, Laptop, Rocket } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
}

export const projects: Project[] = [
  {
    id: "weather-app",
    title: "Weather Application",
    description:
      "Build a responsive weather application using APIs and modern frontend development.",
    technologies: ["React", "TypeScript", "API"],
    icon: <CloudSun className="h-16 w-16 text-violet-600" />,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "Create a professional portfolio website to showcase skills and projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: <Laptop className="h-16 w-16 text-violet-600" />,
  },
  {
    id: "ai-model",
    title: "AI Prediction Model",
    description:
      "Build and evaluate a machine learning model using real-world datasets.",
    technologies: ["Python", "pandas", "Scikit-learn"],
    icon: <Bot className="h-16 w-16 text-violet-600" />,
  },
  {
    id: "fullstack",
    title: "Full Stack Application",
    description:
      "Develop a complete application with frontend, backend and database.",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: <Rocket className="h-16 w-16 text-violet-600" />,
  },
];