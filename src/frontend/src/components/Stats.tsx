import { useGetStats } from "@/hooks/useQueries";
import { motion } from "motion/react";

const defaultStats = [
  {
    label: "Hospital Beds",
    value: "500+",
    sub: "Advanced ICU & general wards",
  },
  {
    label: "Specialist Doctors",
    value: "100+",
    sub: "Experienced across 22 fields",
  },
  {
    label: "Patients Treated",
    value: "50,000+",
    sub: "Successful outcomes annually",
  },
  {
    label: "Years of Service",
    value: "15+",
    sub: "Trusted healthcare since 2009",
  },
  { label: "CT Scan", value: "32-Slice", sub: "Latest diagnostic imaging" },
  { label: "MRI Scanner", value: "1.5 Tesla", sub: "High-resolution imaging" },
];

export function Stats() {
  const { data: statsData } = useGetStats();

  const stats = statsData
    ? [
        {
          label: "Hospital Beds",
          value: `${statsData.beds}+`,
          sub: "Advanced ICU & general wards",
        },
        {
          label: "Specialist Doctors",
          value: `${statsData.doctors}+`,
          sub: "Experienced across 22 fields",
        },
        {
          label: "Patients Treated",
          value: `${statsData.patients}+`,
          sub: "Successful outcomes annually",
        },
        {
          label: "Years of Service",
          value: `${statsData.years}+`,
          sub: "Trusted healthcare since 2009",
        },
        {
          label: "CT Scan",
          value: "32-Slice",
          sub: "Latest diagnostic imaging",
        },
        {
          label: "MRI Scanner",
          value: "1.5 Tesla",
          sub: "High-resolution imaging",
        },
      ]
    : defaultStats;

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-primary-dark to-[oklch(0.28_0.08_215)]"
      data-ocid="stats.section"
    >
      <div className="max-w-7xl mx-auto px-4">
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
              <div className="font-serif font-bold text-3xl sm:text-4xl text-white mb-1">
                {stat.value}
              </div>
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
