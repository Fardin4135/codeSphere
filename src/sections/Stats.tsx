import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

interface StatItem {
  target?: number;
  suffix?: string;
  displayValue?: string;
  label: string;
}

const stats: StatItem[] = [
  {
    target: 2000,
    suffix: "+",
    label: "Students Trained",
  },
  {
    displayValue: "1:1",
    label: "Personalised Training",
  },
  {
    target: 15,
    suffix: "+",
    label: "Technology Programs",
  },
  {
    displayValue: "UK + India",
    label: "Global Reach",
  },
];

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, target]);

  return (
    <span>
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-[#E8E5E0] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-[#E8E5E0] px-4 py-4 text-center first:border-0 lg:border-l"
          >
            <div className="text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
              {stat.target !== undefined ? (
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                />
              ) : (
                stat.displayValue
              )}
            </div>

            <div className="mt-2 text-xs font-medium text-[#6B6B6B] sm:text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}