import { ArrowUpRight } from "lucide-react";
import type { Course } from "../data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]">
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} text-xl font-bold text-white shadow-lg`}
      >
        {course.icon}
      </div>

      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">
          {course.title}
        </h3>

        <ArrowUpRight
          size={18}
          className="text-slate-500 transition group-hover:text-blue-400"
        />
      </div>

      <p className="min-h-[72px] text-sm leading-6 text-slate-400">
        {course.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-xs font-medium text-slate-500">
          Level
        </span>

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
          {course.level}
        </span>
      </div>
    </div>
  );
}