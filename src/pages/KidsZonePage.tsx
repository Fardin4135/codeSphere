import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function KidsZonePage() {
  const kidsCourses = courses.filter((course) => course.category === "kids");

  return (
    <div className="min-h-screen bg-[#FAF9F7] px-6 pb-24 pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Kids Zone · Ages 10–17"
          title="Turn curiosity into real technology skills."
          description="Fun, personalised 1:1 online coding sessions designed to help young learners understand technology, solve problems and build real projects."
        />

        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="rounded-xl bg-[#EDE9FE] p-3 text-[#8B5CF6]">
            <Gamepad2 size={24} />
          </div>

          <div>
            <p className="font-semibold text-[#111111]">Learn by doing</p>
            <p className="text-sm text-[#6B6B6B]">
              Projects, challenges and personalised guidance
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kidsCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}