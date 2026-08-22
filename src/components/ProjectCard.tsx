import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-2 hover:bg-white/[0.06]">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-6xl">
        {project.icon}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <ArrowUpRight
            size={18}
            className="text-slate-500 transition group-hover:text-blue-400"
          />
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}