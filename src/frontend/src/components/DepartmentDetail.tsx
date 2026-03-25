import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Award,
  ChevronRight,
  Clock,
  Heart,
  Home,
  Microscope,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { depts } from "./Departments";

interface DepartmentDetailProps {
  name: string;
  onBack: () => void;
}

interface ExtendedDeptInfo {
  overview: string;
  highlights: { icon: React.ReactNode; title: string; description: string }[];
  conditions: string[];
}

const defaultHighlights = (deptName: string) => [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Specialists",
    description: `Our ${deptName} team comprises highly qualified consultants with years of clinical experience.`,
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Advanced Technology",
    description:
      "State-of-the-art diagnostic and therapeutic equipment for precise, effective treatment.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personalised Care",
    description:
      "Every patient receives a customised treatment plan designed for the best possible outcome.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Availability",
    description:
      "Round-the-clock care and emergency support to ensure you are never alone in your health journey.",
  },
];

const extendedData: Record<string, ExtendedDeptInfo> = {
  Cardiology: {
    overview:
      "The Department of Cardiology at Santhiram Hospitals is a centre of excellence for the diagnosis, treatment, and prevention of heart disease. Equipped with a 32-Slice CT Scan and a 1.5 Tesla MRI, our cardiologists deliver accurate diagnosis and advanced interventional procedures including angioplasty, stenting, and pacemaker implantation. We combine cutting-edge technology with compassionate care to give every patient the best chance of a healthy heart and a full life.",
    highlights: [
      {
        icon: <Activity className="w-6 h-6" />,
        title: "Interventional Cardiology",
        description:
          "Advanced angioplasty, stenting and catheterisation procedures performed by expert interventional cardiologists.",
      },
      {
        icon: <Microscope className="w-6 h-6" />,
        title: "32-Slice CT & 1.5T MRI",
        description:
          "High-resolution imaging for early and accurate detection of cardiac conditions.",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Preventive Cardiology",
        description:
          "Comprehensive cardiac risk assessment and lifestyle modification programmes.",
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Cardiac Rehabilitation",
        description:
          "Structured rehabilitation programmes to help patients regain strength and confidence post-procedure.",
      },
    ],
    conditions: [
      "Coronary Artery Disease",
      "Heart Failure",
      "Arrhythmia",
      "Hypertension",
      "Valvular Heart Disease",
      "Congenital Heart Defects",
      "Cardiomyopathy",
      "Chest Pain / Angina",
    ],
  },
  Neurology: {
    overview:
      "The Neurology Department at Santhiram Hospitals provides comprehensive care for disorders of the brain, spinal cord, and peripheral nervous system. Our neurologists are specialists in stroke management, epilepsy, Parkinson's disease, and complex neurological conditions. With a dedicated stroke helpline and access to advanced neuro-imaging, we ensure rapid diagnosis and timely intervention to minimise neurological damage and improve patient outcomes.",
    highlights: [
      {
        icon: <Activity className="w-6 h-6" />,
        title: "Stroke Helpline",
        description:
          "Dedicated 24/7 stroke helpline ensuring rapid triage and thrombolytic therapy within the golden hour.",
      },
      {
        icon: <Microscope className="w-6 h-6" />,
        title: "Advanced Neuro-Imaging",
        description:
          "MRI, CT, and EEG facilities for precise neurological diagnosis.",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Epilepsy Management",
        description:
          "Comprehensive epilepsy care including video-EEG monitoring and medication management.",
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Movement Disorder Clinic",
        description:
          "Specialised care for Parkinson's disease, tremors, and other movement disorders.",
      },
    ],
    conditions: [
      "Stroke",
      "Epilepsy",
      "Parkinson's Disease",
      "Migraine & Headache",
      "Multiple Sclerosis",
      "Dementia & Alzheimer's",
      "Neuropathy",
      "Vertigo & Dizziness",
    ],
  },
  Oncology: {
    overview:
      "The Oncology Department at Santhiram Hospitals is dedicated to providing hope and healing to cancer patients through a multidisciplinary approach. Our oncologists, surgeons, and radiation specialists work as a unified team to create personalised cancer care plans. From early detection and diagnosis to surgery, chemotherapy, targeted therapy, and palliative care, we offer comprehensive services designed to fight cancer with precision and compassion.",
    highlights: [
      {
        icon: <Microscope className="w-6 h-6" />,
        title: "Precision Oncology",
        description:
          "Targeted therapy and immunotherapy protocols tailored to each patient's tumour profile.",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Tumour Board",
        description:
          "Multidisciplinary tumour board reviews every case to determine the optimal treatment strategy.",
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Palliative & Support Care",
        description:
          "Dedicated palliative services to ensure comfort, dignity, and quality of life throughout treatment.",
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: "Cancer Screening",
        description:
          "Preventive cancer screening programmes for early detection and better treatment outcomes.",
      },
    ],
    conditions: [
      "Breast Cancer",
      "Lung Cancer",
      "Colorectal Cancer",
      "Cervical Cancer",
      "Head & Neck Cancers",
      "Haematological Malignancies",
      "Prostate Cancer",
      "Gastrointestinal Cancers",
    ],
  },
  "Orthopedics & Sports Medicine": {
    overview:
      "The Department of Orthopedics & Sports Medicine at Santhiram Hospitals specialises in the diagnosis and surgical treatment of musculoskeletal conditions ranging from fractures and joint diseases to sports injuries. Our orthopedic surgeons are experienced in joint replacement procedures, arthroscopy, and spinal surgery. The sports medicine team provides injury rehabilitation and performance optimisation for both professional athletes and active individuals.",
    highlights: [
      {
        icon: <Activity className="w-6 h-6" />,
        title: "Joint Replacement",
        description:
          "Total and partial knee, hip, and shoulder replacements using the latest implant technologies.",
      },
      {
        icon: <Microscope className="w-6 h-6" />,
        title: "Arthroscopic Surgery",
        description:
          "Minimally invasive arthroscopic procedures for faster recovery and reduced post-operative pain.",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Sports Rehabilitation",
        description:
          "Customised physiotherapy and rehabilitation programmes for athletes and sports enthusiasts.",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Spine Surgery",
        description:
          "Expert spinal care including disc surgery, decompression, and fusion procedures.",
      },
    ],
    conditions: [
      "Fractures & Trauma",
      "ACL / Ligament Injuries",
      "Joint Arthritis",
      "Disc Prolapse",
      "Tendon & Muscle Injuries",
      "Scoliosis",
      "Osteoporosis",
      "Shoulder Disorders",
    ],
  },
  "Obstetrics & Gynecology": {
    overview:
      "The Department of Obstetrics & Gynecology at Santhiram Hospitals provides a full spectrum of women's healthcare services, from routine antenatal care and safe deliveries to advanced gynaecological surgeries. Our experienced obstetricians and gynaecologists are committed to supporting women at every stage of their reproductive life, providing personalised, evidence-based care in a safe and compassionate environment.",
    highlights: [
      {
        icon: <Heart className="w-6 h-6" />,
        title: "High-Risk Pregnancy",
        description:
          "Specialised management of high-risk pregnancies with continuous monitoring and expert support.",
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: "Laparoscopic Surgery",
        description:
          "Minimally invasive procedures for fibroids, endometriosis, ovarian cysts, and more.",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Fetal Medicine",
        description:
          "Advanced foetal monitoring and anomaly scanning to ensure the health of mother and baby.",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Fertility Services",
        description:
          "Comprehensive fertility evaluation and assisted reproduction support for couples.",
      },
    ],
    conditions: [
      "High-Risk Pregnancy",
      "PCOS",
      "Endometriosis",
      "Uterine Fibroids",
      "Ovarian Cysts",
      "Cervical Disorders",
      "Infertility",
      "Menstrual Disorders",
    ],
  },
};

export function DepartmentDetail({ name, onBack }: DepartmentDetailProps) {
  const dept = depts.find((d) => d.name === name);
  const extended = extendedData[name];

  const overview =
    extended?.overview ??
    `The ${name} department at Santhiram Hospitals delivers world-class care through a team of experienced specialists supported by advanced diagnostic and therapeutic infrastructure. We are committed to delivering accurate diagnoses, evidence-based treatments, and compassionate support to every patient. Whether you require routine evaluation, complex intervention, or long-term management, our team provides comprehensive, patient-centric care tailored to your individual needs.`;

  const highlights = extended?.highlights ?? defaultHighlights(name);

  const conditions = extended?.conditions ?? [
    "Routine Evaluation & Diagnosis",
    "Acute & Emergency Conditions",
    "Chronic Disease Management",
    "Post-Operative Care",
    "Preventive Screenings",
    "Specialist Consultations",
  ];

  const handleBookAppointment = () => {
    onBack();
    setTimeout(() => {
      document
        .getElementById("appointment")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main
      className="pt-[140px] min-h-screen bg-white"
      data-ocid="dept_detail.page"
    >
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-50 border-b border-gray-200 px-4 py-3"
      >
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-sm text-gray-500">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1 hover:text-primary transition-colors font-medium"
            data-ocid="dept_detail.breadcrumb.link"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button
            type="button"
            onClick={onBack}
            className="hover:text-primary transition-colors"
            data-ocid="dept_detail.breadcrumb.link"
          >
            Departments
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">{name}</span>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #0A4D8C 0%, #1a6bb5 50%, #4DA8DA 100%)",
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
                Department of {name}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {name}
              </h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                {dept?.description ??
                  `Expert specialised care delivered by our experienced ${name} team.`}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleBookAppointment}
                  className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-md"
                  data-ocid="dept_detail.book_appointment.button"
                >
                  Book Appointment
                </button>
                <a
                  href="tel:+919121022077"
                  className="border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                  data-ocid="dept_detail.enquiry.button"
                >
                  Enquiry Now
                </a>
              </div>
            </motion.div>
            {dept && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-center"
              >
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-white/10 backdrop-blur flex items-center justify-center p-6 border border-white/20">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Overview text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                  Department Overview
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-5 leading-tight">
                World-Class {name} Care in Nandyal
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {overview}
              </p>
            </motion.div>

            {/* Right: Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="bg-blue-50 rounded-2xl p-5 border border-blue-100 hover:border-blue-300 transition-colors"
                  data-ocid={`dept_detail.highlight.item.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                    {h.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {h.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {h.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              What We Treat
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-2">
              Conditions Treated
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
            data-ocid="dept_detail.conditions.list"
          >
            {conditions.map((condition, i) => (
              <Badge
                key={condition}
                variant="outline"
                className="text-sm px-4 py-2 border-primary/30 text-primary bg-white hover:bg-primary hover:text-white transition-colors cursor-default rounded-full font-medium"
                data-ocid={`dept_detail.conditions.item.${i + 1}`}
              >
                {condition}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Santhiram */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Our Promise
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-2">
              Why Choose Santhiram Hospitals
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Expert Medical Team",
                description:
                  "Our doctors are highly qualified specialists with years of experience in their fields, committed to delivering the highest standard of clinical care.",
              },
              {
                icon: <Microscope className="w-8 h-8" />,
                title: "Advanced Technology",
                description:
                  "We invest in state-of-the-art equipment including 32-Slice CT Scan, 1.5 Tesla MRI, and digital imaging to ensure precise and timely diagnoses.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Patient-Centric Care",
                description:
                  "Every patient is treated as an individual. We listen, we explain, and we partner with you throughout your healthcare journey.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                data-ocid={`dept_detail.why_choose.item.${i + 1}`}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #0A4D8C, #4DA8DA)",
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #0A4D8C 0%, #4DA8DA 100%)",
        }}
        data-ocid="dept_detail.cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Book an Appointment Today
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Our {name} specialists are ready to help you. Schedule a
              consultation and take the first step towards better health.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={handleBookAppointment}
                className="bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors shadow-md text-base"
                data-ocid="dept_detail.cta.primary_button"
              >
                Book Appointment
              </button>
              <a
                href="tel:+919121022077"
                className="border-2 border-white/70 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base"
                data-ocid="dept_detail.cta.secondary_button"
              >
                Call +91 91210 22077
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
