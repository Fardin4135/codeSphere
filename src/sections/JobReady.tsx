import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function JobReady() {
  const jobReadyCourses = courses.filter(
    (course) => course.category === "adult"
  );

  const marqueeItems = [...jobReadyCourses, ...jobReadyCourses];

  return (
    <section className="overflow-hidden bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Job Ready Zone"
          title="Upgrade your skills. Accelerate your career."
          description="Practical technology and professional development programs designed around real-world skills and career goals."
        />

        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="rounded-xl bg-[#EDE9FE] p-3 text-[#8B5CF6]">
            <Briefcase size={24} />
          </div>

          <div>
            <p className="font-semibold text-[#111111]">
              Career-focused learning
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Learn skills you can actually use
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-6 w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeItems.map((course, idx) => (
            <div
              key={`${course.id}-${idx}`}
              className="w-[290px] shrink-0 sm:w-[330px]"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/job-ready"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#8B5CF6] transition-colors hover:text-[#7C3AED]"
        >
          Explore Job Ready Zone
          <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}