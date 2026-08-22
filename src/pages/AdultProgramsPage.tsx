import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function AdultProgramsPage() {
  const adultCourses = courses.filter(
    (course) => course.category === "adult"
  );

  return (
    <div className="min-h-screen px-6 pb-24 pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Adult Programs"
          title="Develop skills that move your career forward."
          description="Practical technology programs for learners looking to develop professional and technical capabilities."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {adultCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}