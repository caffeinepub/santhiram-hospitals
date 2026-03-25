import { AlertCircle, Cpu, GraduationCap, IndianRupee } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Advanced Technology",
    desc: "32-Slice CT, 1.5 Tesla MRI, digital OTs, ICUs and the latest diagnostic equipment for precise diagnosis and treatment.",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Expert Specialists",
    desc: "100+ highly qualified and experienced specialists with national and international training across 22 departments.",
  },
  {
    icon: <AlertCircle className="w-7 h-7" />,
    title: "24/7 Emergency Care",
    desc: "Round-the-clock emergency services with dedicated trauma team, ambulance service, and rapid response protocols.",
  },
  {
    icon: <IndianRupee className="w-7 h-7" />,
    title: "Affordable Care",
    desc: "World-class healthcare at affordable prices. We accept all major insurance plans and offer cashless treatment facilities.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-hospital-bg" data-ocid="why_choose.section">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Why Us
          </span>
          <h2 className="font-serif text-4xl font-bold text-hospital-heading mt-2 mb-4">
            Why Choose Santhiram Hospital?
          </h2>
          <p className="text-hospital-muted max-w-2xl mx-auto">
            We combine clinical expertise with compassionate care to deliver the
            best outcomes for our patients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 group border border-hospital-border"
              data-ocid={`why_choose.item.${i + 1}`}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #0A4D8C, #4DA8DA)",
                }}
              >
                {r.icon}
              </div>
              <h3 className="font-bold text-hospital-heading text-lg mb-3 tracking-tight">
                {r.title}
              </h3>
              <p className="text-hospital-muted text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
