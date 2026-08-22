import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function KidsZonePage() {
  const coursesForKids = courses.filter(
    (course) => course.category === "kids"
  );

  return (
    <div className="min-h-screen px-6 pb-24 pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Kids Zone · Ages 10–17"
          title="Build technology skills from an early age."
          description="Personalised online coding sessions designed to make technology practical, exciting and approachable."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coursesForKids.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
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