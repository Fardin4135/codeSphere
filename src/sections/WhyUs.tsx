import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Target,
  UserRoundCheck,
  Wrench,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const features = [
  {
    icon: UserRoundCheck,
    title: "1:1 Personalised Learning",
    description:
      "Every learner gets individual attention based on their current level, goals and learning pace.",
  },
  {
    icon: GraduationCap,
    title: "Industry-Experienced Trainers",
    description:
      "Learn from professionals who understand how technology is used in real-world environments.",
  },
  {
    icon: Wrench,
    title: "Real-World Projects",
    description:
      "Move beyond theory by building practical projects that demonstrate what you have learned.",
  },
  {
    icon: Target,
    title: "Goal-Focused Training",
    description:
      "Whether the goal is curiosity, school learning, career development or interview preparation.",
  },
  {
    icon: Globe2,
    title: "UK & India",
    description:
      "Flexible online learning designed to support learners across the United Kingdom and India.",
  },
  {
    icon: TrendingUp,
    title: "Skills That Grow With You",
    description:
      "Build a strong foundation and progress from beginner concepts to advanced technology skills.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why CodeSphere"
          title="More than lessons. A practical learning experience."
          description="We focus on helping learners understand, build and apply technology—not simply memorise concepts."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}