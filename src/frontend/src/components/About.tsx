import { Award, Building2, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    text: "NABH Accredited Facility",
  },
  { icon: <Award className="w-5 h-5" />, text: "15+ Years of Excellence" },
  { icon: <Users className="w-5 h-5" />, text: "100+ Specialist Doctors" },
  { icon: <Building2 className="w-5 h-5" />, text: "500+ Bed Capacity" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-hospital-bg"
      data-ocid="about.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Who We Are
            </span>
            <h2 className="font-serif text-4xl font-bold text-hospital-heading mt-2 mb-6 leading-tight">
              Nandyal's Most Trusted{" "}
              <span className="text-primary">Healthcare Partner</span>
            </h2>
            <p className="text-hospital-muted leading-relaxed mb-5 text-base">
              Santhiram Super Speciality Hospital (SRGH) is the leading
              multi-speciality hospital in Nandyal, Andhra Pradesh. Established
              over 15 years ago, we have been at the forefront of providing
              world-class medical care to the people of Nandyal and the
              surrounding region.
            </p>
            <p className="text-hospital-muted leading-relaxed mb-8 text-base">
              Located on NH40, our state-of-the-art 500+ bed facility is
              equipped with the latest technology including a 32-Slice CT
              Scanner and 1.5 Tesla MRI, supported by a team of 100+ experienced
              specialists across 22 departments.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.text}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-card"
                >
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {h.icon}
                  </div>
                  <span className="text-sm font-medium text-hospital-heading">
                    {h.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { label: "Beds", value: "500+", sub: "Advanced bed capacity" },
              {
                label: "Specialists",
                value: "100+",
                sub: "Experienced doctors",
              },
              {
                label: "Patients",
                value: "50,000+",
                sub: "Successfully treated",
              },
              { label: "Departments", value: "22", sub: "Speciality units" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-card text-center"
              >
                <div className="font-serif font-bold text-4xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-hospital-heading text-sm">
                  {stat.label}
                </div>
                <div className="text-xs text-hospital-muted mt-1">
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
