import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

export const depts = [
  {
    name: "Cardiology",
    description:
      "Advanced cardiac care with state-of-the-art 32 Slice CT Scan & 1.5 Tesla MRI",
    image: "/assets/generated/dept-cardiology-transparent.dim_400x400.png",
  },
  {
    name: "Dermatology",
    description:
      "Expert skin care treatments and advanced dermatological procedures",
    image: "/assets/generated/dept-dermatology-transparent.dim_400x400.png",
  },
  {
    name: "ENT",
    description:
      "Ear, Nose & Throat specialist care with modern diagnostic equipment",
    image: "/assets/generated/dept-ent-transparent.dim_400x400.png",
  },
  {
    name: "Gastroenterology",
    description:
      "Comprehensive digestive health care and endoscopic procedures",
    image:
      "/assets/generated/dept-gastroenterology-transparent.dim_400x400.png",
  },
  {
    name: "Obstetrics & Gynecology",
    description:
      "Complete women's health care from maternity to gynecological surgeries",
    image: "/assets/generated/dept-obs-gyn-transparent.dim_400x400.png",
  },
  {
    name: "Nephrology",
    description:
      "Kidney care and treatment including transplant programme & dialysis",
    image: "/assets/generated/dept-nephrology-transparent.dim_400x400.png",
  },
  {
    name: "Neurology",
    description:
      "Expert neurological care including stroke helpline and brain surgery",
    image: "/assets/generated/dept-neurology-transparent.dim_400x400.png",
  },
  {
    name: "Oncology",
    description:
      "Comprehensive cancer care with cutting-edge treatment protocols",
    image: "/assets/generated/dept-oncology-transparent.dim_400x400.png",
  },
  {
    name: "General Medicine",
    description:
      "Comprehensive primary and internal medicine care for adults of all ages",
    image:
      "/assets/generated/dept-general-medicine-transparent.dim_400x400.png",
  },
  {
    name: "General Surgery",
    description:
      "Expert surgical care covering a wide range of operative procedures",
    image: "/assets/generated/dept-general-surgery-transparent.dim_400x400.png",
  },
  {
    name: "Trichology",
    description:
      "Specialized diagnosis and treatment of hair and scalp disorders",
    image: "/assets/generated/dept-trichology-transparent.dim_400x400.png",
  },
  {
    name: "Pediatrics Surgery",
    description:
      "Skilled surgical care tailored for infants, children and adolescents",
    image:
      "/assets/generated/dept-pediatrics-surgery-transparent.dim_400x400.png",
  },
  {
    name: "Radiology",
    description:
      "Advanced diagnostic imaging including CT, MRI, ultrasound and X-ray",
    image: "/assets/generated/dept-radiology-transparent.dim_400x400.png",
  },
  {
    name: "Psychiatry",
    description:
      "Compassionate mental health care with evidence-based treatment programmes",
    image: "/assets/generated/dept-psychiatry-transparent.dim_400x400.png",
  },
  {
    name: "Neuro Surgery",
    description:
      "Precision surgical interventions for brain, spine and nervous system conditions",
    image: "/assets/generated/dept-neuro-surgery-transparent.dim_400x400.png",
  },
  {
    name: "Emergency Medicine",
    description:
      "Round-the-clock emergency care with rapid-response trauma and critical teams",
    image: "/assets/generated/dept-emergency-transparent.dim_400x400.png",
  },
  {
    name: "Critical Care Medicine",
    description:
      "Intensive care unit with advanced monitoring for critically ill patients",
    image: "/assets/generated/dept-critical-care-transparent.dim_400x400.png",
  },
  {
    name: "Plastic Surgery",
    description:
      "Reconstructive and aesthetic surgery with meticulous attention to outcomes",
    image: "/assets/generated/dept-plastic-surgery-transparent.dim_400x400.png",
  },
  {
    name: "Pulmonology",
    description:
      "Diagnosis and treatment of respiratory and lung disorders including asthma and COPD",
    image: "/assets/generated/dept-pulmonology-transparent.dim_400x400.png",
  },
  {
    name: "Urology",
    description:
      "Comprehensive urological care including minimally invasive surgical procedures",
    image: "/assets/generated/dept-urology-transparent.dim_400x400.png",
  },
  {
    name: "Ophthalmology",
    description:
      "Advanced eye care, vision correction and surgical treatment for eye conditions",
    image: "/assets/generated/dept-ophthalmology-transparent.dim_400x400.png",
  },
  {
    name: "Orthopedics & Sports Medicine",
    description:
      "Joint replacement, fracture care and sports injury rehabilitation by expert surgeons",
    image: "/assets/generated/dept-orthopedics-transparent.dim_400x400.png",
  },
  {
    name: "Cardio Thoracic & Vascular Surgery",
    description:
      "Open heart surgery, bypass and vascular procedures by experienced cardiac surgeons",
    image: "/assets/generated/dept-ctvs-transparent.dim_400x400.png",
  },
  {
    name: "General Surgery & Surgical Gastroenterology",
    description:
      "Comprehensive gastrointestinal and abdominal surgical care with laparoscopic expertise",
    image: "/assets/generated/dept-surgical-gastro-transparent.dim_400x400.png",
  },
];

const CARDS_PER_VIEW = 4;

interface DepartmentsProps {
  onSelectDept?: (name: string) => void;
}

export function Departments({ onSelectDept }: DepartmentsProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = depts.length;
  const maxIndex = total - CARDS_PER_VIEW;

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [paused, next]);

  const visible = depts.slice(current, current + CARDS_PER_VIEW);

  return (
    <section
      id="departments"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
      data-ocid="departments.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Advanced Multi-Speciality Hospital in Nandyal
          </span>
          <h2 className="font-serif text-4xl font-bold text-hospital-heading mt-2 mb-4">
            Our Departments
          </h2>
          <p className="text-hospital-muted max-w-2xl mx-auto text-base">
            World-class medical facilities with experienced specialists across
            all departments
          </p>
        </motion.div>

        {/* Slideshow */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            type="button"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                {visible.map((dept) => (
                  <div
                    key={dept.name}
                    className="bg-white rounded-2xl border border-hospital-border shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 h-44 p-4">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-serif font-bold text-hospital-heading text-base mb-2 leading-snug">
                        {dept.name}
                      </h3>
                      <p className="text-hospital-muted text-sm flex-1 mb-4 leading-relaxed">
                        {dept.description}
                      </p>
                      <div className="flex flex-col gap-2">
                        {onSelectDept && (
                          <button
                            type="button"
                            onClick={() => {
                              onSelectDept(dept.name);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm font-semibold py-2 px-4 rounded-xl transition-colors"
                            data-ocid="departments.view_details.button"
                          >
                            View Details
                          </button>
                        )}
                        <a
                          href="#appointment"
                          className="inline-block text-center w-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors"
                          data-ocid="departments.book_appointment.button"
                        >
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            type="button"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              // biome-ignore lint/suspicious/noArrayIndexKey: static dots
              key={`dot-${i}`}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-gray-300 hover:bg-primary/50"
              }`}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
