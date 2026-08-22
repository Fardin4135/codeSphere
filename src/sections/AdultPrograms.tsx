import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function AdultPrograms() {
  const adultCourses = courses.filter(
    (course) => course.category === "adult"
  );

  return (
    <section className="bg-slate-900/40 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Adult Programs"
          title="Upgrade your skills. Accelerate your career."
          description="Practical technology and professional development programs designed around real-world skills and career goals."
        />

        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="rounded-xl bg-purple-500/10 p-3 text-purple-400">
            <Briefcase size={24} />
          </div>

          <div>
            <p className="font-semibold">
              Career-focused learning
            </p>

            <p className="text-sm text-slate-500">
              Learn skills you can actually use
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {adultCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/adult-programs"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-400"
          >
            Explore Adult Programs
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}