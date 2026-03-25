import { AlertCircle, Calendar, HeartPulse, UserSearch } from "lucide-react";
import { motion } from "motion/react";

const actions = [
  {
    icon: <Calendar className="w-7 h-7" />,
    title: "Book Appointment",
    desc: "Schedule a consultation with our specialists at your convenience.",
    href: "#appointment",
    color: "bg-primary",
  },
  {
    icon: <AlertCircle className="w-7 h-7" />,
    title: "Emergency Care",
    desc: "Round-the-clock emergency services. Call us immediately at +91 9121022077.",
    href: "tel:+919121022077",
    color: "bg-emergency",
  },
  {
    icon: <UserSearch className="w-7 h-7" />,
    title: "Find a Doctor",
    desc: "Browse our team of 100+ experienced specialists across 22 departments.",
    href: "#doctors",
    color: "bg-primary-dark",
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    title: "Health Checkups",
    desc: "Comprehensive health packages for individuals, couples, and corporates.",
    href: "#appointment",
    color: "bg-[oklch(0.48_0.12_160)]",
  },
];

export function QuickActions() {
  return (
    <section
      className="py-12 bg-gradient-to-br from-teal-50 via-cyan-50 to-slate-50"
      data-ocid="quick_actions.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((action, i) => (
            <motion.a
              key={action.title}
              href={action.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group block rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              data-ocid={`quick_actions.item.${i + 1}`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${action.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                {action.icon}
              </div>
              <h3 className="font-bold text-hospital-heading text-base mb-2">
                {action.title}
              </h3>
              <p className="text-sm text-hospital-muted leading-relaxed">
                {action.desc}
              </p>
              <div className="mt-4 text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
