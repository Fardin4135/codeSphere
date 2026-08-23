import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#E8E5E0] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#EDE9FE] to-[#F3E8FF] text-6xl">
        {project.icon}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-[#111111]">
            {project.title}
          </h3>

          <ArrowUpRight
            size={18}
            className="text-[#6B6B6B] transition group-hover:text-[#8B5CF6]"
          />
        </div>

        <p className="mt-3 text-sm leading-6 text-[#6B6B6B]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-medium text-[#7C3AED]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}