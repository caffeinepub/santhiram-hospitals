import { Button } from "@/components/ui/button";
import { useGetDoctors } from "@/hooks/useQueries";
import { GraduationCap, Stethoscope } from "lucide-react";
import { motion } from "motion/react";

const sampleDoctors = [
  {
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiology",
    qualification: "MD, DM Cardiology",
    experience: "18 years",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Neurology",
    qualification: "MD, DM Neurology",
    experience: "14 years",
  },
  {
    name: "Dr. Suresh Reddy",
    specialty: "Orthopedics",
    qualification: "MS Ortho, FRCS",
    experience: "20 years",
  },
  {
    name: "Dr. Anitha Devi",
    specialty: "Obstetrics & Gynaecology",
    qualification: "MD, DGO",
    experience: "16 years",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(1, 3)
    .map((n) => n[0])
    .join("");
}

const avatarGradients = [
  "linear-gradient(135deg, #0B2E59, #0E7490)",
  "linear-gradient(135deg, #0E7490, #0B2E59)",
  "linear-gradient(135deg, #0A3D6B, #0E7490)",
  "linear-gradient(135deg, #0B2E59, #1a5276)",
];

export function Doctors() {
  const { data: backendDoctors } = useGetDoctors();
  const doctors =
    backendDoctors && backendDoctors.length > 0
      ? backendDoctors
      : sampleDoctors;

  return (
    <section
      id="doctors"
      className="py-20 bg-white"
      data-ocid="doctors.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-teal font-semibold text-sm tracking-widest uppercase">
            Medical Team
          </span>
          <h2 className="font-serif text-4xl font-bold text-navy mt-2 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-hospital-muted max-w-2xl mx-auto">
            Our team of 100+ specialists is dedicated to providing personalised,
            evidence-based care.
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="doctors.list"
        >
          {doctors.slice(0, 4).map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group border border-hospital-border"
              data-ocid={`doctors.item.${i + 1}`}
            >
              {/* Avatar */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: avatarGradients[i % avatarGradients.length],
                }}
              >
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-3xl">
                    {getInitials(doc.name)}
                  </span>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {doc.experience}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-navy text-base mb-1 tracking-tight">
                  {doc.name}
                </h3>
                <div className="flex items-center gap-1.5 text-teal text-sm font-medium mb-2">
                  <Stethoscope className="w-4 h-4" />
                  {doc.specialty}
                </div>
                <div className="flex items-center gap-1.5 text-hospital-muted text-xs mb-4">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {doc.qualification}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-navy text-navy hover:bg-navy hover:text-white rounded-full"
                  onClick={() =>
                    document
                      .getElementById("appointment")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  data-ocid={`doctors.book_button.${i + 1}`}
                >
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-navy text-navy hover:bg-navy hover:text-white rounded-full px-8"
            data-ocid="doctors.view_all.button"
          >
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
}
