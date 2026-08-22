import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import TrainerCard from "../components/TrainerCard";
import { trainers } from "../data/trainers";

export default function TrainersPage() {
  return (
    <div className="min-h-screen px-6 pb-24 pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Trainers"
          title="Learn from industry-experienced professionals."
          description="Our trainers bring practical knowledge and real-world technology experience into the learning environment."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <TrainerCard trainer={trainer} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}