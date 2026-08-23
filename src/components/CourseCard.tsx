import { ArrowUpRight } from "lucide-react";
import type { Course } from "../data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#E8E5E0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50">
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} text-xl font-bold text-white shadow-md`}
      >
        {course.icon}
      </div>

      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-[#111111]">
          {course.title}
        </h3>

        <ArrowUpRight
          size={18}
          className="text-[#6B6B6B] transition group-hover:text-[#8B5CF6]"
        />
      </div>

      <p className="min-h-[72px] text-sm leading-6 text-[#6B6B6B]">
        {course.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-[#E8E5E0] pt-4">
        <span className="text-xs font-medium text-[#6B6B6B]">
          Level
        </span>

        <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-medium text-[#7C3AED]">
          {course.level}
        </span>
      </div>
    </div>
  );
}