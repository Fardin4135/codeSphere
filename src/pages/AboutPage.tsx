import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 pb-24 pt-36 lg:px-8">
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
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h2 className="text-2xl font-bold">
              Our Mission
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Our mission is to make high-quality technology
              education more accessible through personalised online
              learning and practical project-based training.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h2 className="text-2xl font-bold">
              Our Approach
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
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