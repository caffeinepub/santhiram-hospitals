import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplets,
  Ear,
  Eye,
  FlaskConical,
  Heart,
  Microscope,
  Pill,
  RadioTower,
  Ribbon,
  Scissors,
  SmilePlus,
  Stethoscope,
  Syringe,
  Wind,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const depts = [
  {
    name: "Cardiology",
    icon: <Heart className="w-6 h-6" />,
    color: "text-red-500 bg-red-50",
  },
  {
    name: "Dermatology",
    icon: <SmilePlus className="w-6 h-6" />,
    color: "text-pink-500 bg-pink-50",
  },
  {
    name: "ENT",
    icon: <Ear className="w-6 h-6" />,
    color: "text-purple-500 bg-purple-50",
  },
  {
    name: "General Surgery",
    icon: <Scissors className="w-6 h-6" />,
    color: "text-blue-500 bg-blue-50",
  },
  {
    name: "Obstetrics & Gynaecology",
    icon: <Baby className="w-6 h-6" />,
    color: "text-rose-500 bg-rose-50",
  },
  {
    name: "Nephrology",
    icon: <Droplets className="w-6 h-6" />,
    color: "text-cyan-500 bg-cyan-50",
  },
  {
    name: "Neurology",
    icon: <Brain className="w-6 h-6" />,
    color: "text-indigo-500 bg-indigo-50",
  },
  {
    name: "Oncology",
    icon: <Ribbon className="w-6 h-6" />,
    color: "text-orange-500 bg-orange-50",
  },
  {
    name: "Urology",
    icon: <Droplets className="w-6 h-6" />,
    color: "text-blue-600 bg-blue-50",
  },
  {
    name: "Plastic Surgery",
    icon: <Scissors className="w-6 h-6" />,
    color: "text-violet-500 bg-violet-50",
  },
  {
    name: "Ophthalmology",
    icon: <Eye className="w-6 h-6" />,
    color: "text-teal-500 bg-teal-50",
  },
  {
    name: "Psychiatry",
    icon: <Brain className="w-6 h-6" />,
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    name: "Trichology",
    icon: <FlaskConical className="w-6 h-6" />,
    color: "text-amber-500 bg-amber-50",
  },
  {
    name: "Radiology",
    icon: <RadioTower className="w-6 h-6" />,
    color: "text-gray-500 bg-gray-50",
  },
  {
    name: "Critical Care Medicine",
    icon: <Activity className="w-6 h-6" />,
    color: "text-red-600 bg-red-50",
  },
  {
    name: "Neuro Surgery",
    icon: <Zap className="w-6 h-6" />,
    color: "text-yellow-500 bg-yellow-50",
  },
  {
    name: "Pediatrics Surgery",
    icon: <Baby className="w-6 h-6" />,
    color: "text-lime-500 bg-lime-50",
  },
  {
    name: "Orthopedics & Sports Medicine",
    icon: <Bone className="w-6 h-6" />,
    color: "text-stone-500 bg-stone-50",
  },
  {
    name: "Emergency Medicine",
    icon: <Syringe className="w-6 h-6" />,
    color: "text-red-500 bg-red-50",
  },
  {
    name: "Pulmonology",
    icon: <Wind className="w-6 h-6" />,
    color: "text-sky-500 bg-sky-50",
  },
  {
    name: "General Medicine",
    icon: <Pill className="w-6 h-6" />,
    color: "text-green-500 bg-green-50",
  },
  {
    name: "Cardio Thoracic & Vascular Surgery",
    icon: <Stethoscope className="w-6 h-6" />,
    color: "text-primary bg-primary/10",
  },
];

export function Departments() {
  return (
    <section
      id="departments"
      className="py-20 bg-white"
      data-ocid="departments.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Our Specialties
          </span>
          <h2 className="font-serif text-4xl font-bold text-hospital-heading mt-2 mb-4">
            22 Departments of Excellence
          </h2>
          <p className="text-hospital-muted max-w-2xl mx-auto">
            From emergency care to complex surgeries, our comprehensive
            departments ensure you receive the best possible care under one
            roof.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          data-ocid="departments.list"
        >
          {depts.map((dept, i) => (
            <motion.a
              key={dept.name}
              href="#appointment"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (i % 6) * 0.05 }}
              className="group flex flex-col items-center text-center p-4 rounded-2xl border border-hospital-border hover:border-primary hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              data-ocid={`departments.item.${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${dept.color} group-hover:scale-110 transition-transform`}
              >
                {dept.icon}
              </div>
              <span className="text-xs font-medium text-hospital-heading group-hover:text-primary transition-colors leading-tight">
                {dept.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
