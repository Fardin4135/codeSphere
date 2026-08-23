import { motion } from "framer-motion";
import {
  CalendarCheck,
  GraduationCap,
  MessageCircle,
  Rocket,
  UserRound,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Choose Your Program",
    description:
      "Tell us about your learning goals and choose a suitable program.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Meet Your Trainer",
    description:
      "We connect you with a trainer suited to your learning needs.",
    icon: UserRound,
  },
  {
    number: "03",
    title: "Learn 1:1 Online",
    description:
      "Attend personalised online sessions at a mutually convenient time.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Build Real Projects",
    description:
      "Apply your knowledge through practical exercises and projects.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Track Your Progress",
    description:
      "Review your progress and continue developing your skills.",
    icon: CalendarCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple path from learning to building."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-2xl border border-[#E8E5E0] bg-[#FAF9F7] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#8B5CF6]">
                    {step.number}
                  </span>

                  <Icon
                    size={21}
                    className="text-[#6B6B6B]"
                  />
                </div>

                <h3 className="mt-8 font-semibold text-[#111111]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6B6B6B]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}