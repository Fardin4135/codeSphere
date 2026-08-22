import { motion } from "framer-motion";

const stats = [
  {
    value: "1:1",
    label: "Personalised Training",
  },
  {
    value: "10–17",
    label: "Kids Learning Age",
  },
  {
    value: "15+",
    label: "Technology Programs",
  },
  {
    value: "UK + India",
    label: "Online Learning",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-slate-900/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-white/10 px-4 py-4 text-center first:border-0 lg:border-l"
          >
            <div className="text-2xl font-bold text-white sm:text-3xl">
              {stat.value}
            </div>

            <div className="mt-2 text-xs text-slate-500 sm:text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}