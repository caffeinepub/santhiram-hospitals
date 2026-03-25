import { useGetStats } from "@/hooks/useQueries";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const defaultStats = [
  {
    label: "Hospital Beds",
    value: 500,
    suffix: "+",
    sub: "Advanced ICU & general wards",
  },
  {
    label: "Specialist Doctors",
    value: 100,
    suffix: "+",
    sub: "Experienced across 22 fields",
  },
  {
    label: "Patients Treated",
    value: 50000,
    suffix: "+",
    sub: "Successful outcomes annually",
  },
  {
    label: "Years of Service",
    value: 15,
    suffix: "+",
    sub: "Trusted healthcare since 2009",
  },
  {
    label: "CT Scan",
    value: 32,
    suffix: "-Slice",
    sub: "Latest diagnostic imaging",
  },
  {
    label: "MRI Scanner",
    value: 1,
    suffix: ".5 Tesla",
    sub: "High-resolution imaging",
  },
];

function AnimatedNumber({
  target,
  suffix,
}: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / 60);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="font-serif font-bold text-3xl sm:text-4xl text-white mb-1"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function Stats() {
  const { data: statsData } = useGetStats();

  const stats = statsData
    ? [
        {
          label: "Hospital Beds",
          value: Number(statsData.beds),
          suffix: "+",
          sub: "Advanced ICU & general wards",
        },
        {
          label: "Specialist Doctors",
          value: Number(statsData.doctors),
          suffix: "+",
          sub: "Experienced across 22 fields",
        },
        {
          label: "Patients Treated",
          value: Number(statsData.patients),
          suffix: "+",
          sub: "Successful outcomes annually",
        },
        {
          label: "Years of Service",
          value: Number(statsData.years),
          suffix: "+",
          sub: "Trusted healthcare since 2009",
        },
        {
          label: "CT Scan",
          value: 32,
          suffix: "-Slice",
          sub: "Latest diagnostic imaging",
        },
        {
          label: "MRI Scanner",
          value: 1,
          suffix: ".5 Tesla",
          sub: "High-resolution imaging",
        },
      ]
    : defaultStats;

  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A4D8C 0%, #072F5A 100%)",
      }}
      data-ocid="stats.section"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-light font-semibold text-sm tracking-widest uppercase">
            Our Impact
          </span>
          <h2 className="font-serif text-4xl font-bold text-white mt-2 mb-4">
            Numbers That Speak for Themselves
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <div className="text-primary-light font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-white/60 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
