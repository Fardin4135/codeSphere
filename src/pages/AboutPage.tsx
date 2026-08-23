import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] px-6 pb-24 pt-36 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About Us"
          title="Technology education designed around people."
          description="We believe learning technology should be practical, personalised and connected to real-world applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50"
          >
            <h2 className="text-2xl font-bold text-[#111111]">
              Our Mission
            </h2>

            <p className="mt-5 leading-8 text-[#6B6B6B]">
              Our mission is to make high-quality technology
              education more accessible through personalised online
              learning and practical project-based training.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl border border-[#E8E5E0] bg-white p-8 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50"
          >
            <h2 className="text-2xl font-bold text-[#111111]">
              Our Approach
            </h2>

            <p className="mt-5 leading-8 text-[#6B6B6B]">
              Instead of focusing only on theory, we help learners
              understand concepts, apply them and build practical
              projects with guidance from experienced trainers.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}