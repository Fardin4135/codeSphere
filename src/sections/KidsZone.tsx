import { motion } from "framer-motion";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function KidsZone() {
  const kidsCourses = courses.filter(
    (course) => course.category === "kids"
  );

  return (
    <section className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Kids Zone · Ages 10–17"
          title="Turn curiosity into real technology skills."
          description="Fun, personalised 1:1 online coding sessions designed to help young learners understand technology, solve problems and build real projects."
        />

        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
            <Gamepad2 size={24} />
          </div>

          <div>
            <p className="font-semibold">
              Learn by doing
            </p>
            <p className="text-sm text-slate-500">
              Projects, challenges and personalised guidance
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kidsCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/kids-zone"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-400"
          >
            Explore Kids Zone
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