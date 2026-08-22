import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import TrainerCard from "../components/TrainerCard";
import { trainers } from "../data/trainers";

export default function Trainers() {
  return (
    <section className="bg-slate-900/40 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Meet the Trainers"
          title="Learn from people who build, not just teach."
          description="Our trainers bring practical industry knowledge into every learning session."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <TrainerCard trainer={trainer} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/trainers"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-400"
          >
            Meet all trainers
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