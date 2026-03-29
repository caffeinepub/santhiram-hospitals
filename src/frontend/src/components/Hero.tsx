import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBookAppointment } from "@/hooks/useQueries";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Activity,
  CheckCircle,
  Clock,
  Loader2,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { depts } from "./Departments";

const departments = [
  "Cardiology",
  "Dermatology",
  "ENT",
  "General Surgery",
  "Obstetrics & Gynaecology",
  "Nephrology",
  "Neurology",
  "Oncology",
  "Urology",
  "Plastic Surgery",
  "Ophthalmology",
  "Psychiatry",
  "Orthopedics & Sports Medicine",
  "Emergency Medicine",
  "Pulmonology",
  "General Medicine",
];

export function Hero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
    time: "",
  });
  const mutation = useBookAppointment();
  const { t } = useLanguage();

  const heroStats = [
    {
      icon: <Activity className="w-5 h-5" />,
      value: "500+",
      labelKey: "statBeds",
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      value: "100+",
      labelKey: "statSpecialists",
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: "50,000+",
      labelKey: "statPatients",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      value: "24/7",
      labelKey: "statEmergency",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.department) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      const preferredDate = form.date ? new Date(form.date) : new Date();
      await mutation.mutateAsync({
        name: form.name,
        phone: form.phone,
        email: "",
        department: form.department,
        preferredDate,
        message: form.time ? `Preferred time: ${form.time}` : "",
      });
      toast.success("Appointment request sent! We'll call you shortly.");
      setForm({ name: "", phone: "", department: "", date: "", time: "" });
    } catch {
      toast.error("Failed to book appointment. Please call us directly.");
    }
  };

  // Duplicate for seamless infinite scroll
  const scrollDepts = [...depts, ...depts];

  const scrollToSpecialties = () => {
    document
      .getElementById("specialties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#0B2E59" }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 hero-dot-grid opacity-[0.07]" />

      {/* Decorative medical cross — top left */}
      <div className="absolute top-32 left-8 text-white/10 pointer-events-none select-none hidden lg:block">
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="currentColor"
          aria-hidden="true"
          role="presentation"
        >
          <rect x="28" y="0" width="16" height="72" rx="4" />
          <rect x="0" y="28" width="72" height="16" rx="4" />
        </svg>
      </div>

      {/* Decorative rings — bottom right */}
      <div className="absolute bottom-44 right-8 pointer-events-none select-none hidden lg:block">
        <div className="hero-pulse-ring" style={{ width: 120, height: 120 }} />
        <div
          className="hero-pulse-ring"
          style={{ width: 80, height: 80, top: 20, left: 20 }}
        />
      </div>

      {/* Decorative small cross — right side */}
      <div className="absolute top-1/2 right-[48%] -translate-y-1/2 text-white/5 pointer-events-none select-none hidden lg:block">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="currentColor"
          aria-hidden="true"
          role="presentation"
        >
          <rect x="16" y="0" width="8" height="40" rx="2" />
          <rect x="0" y="16" width="40" height="8" rx="2" />
        </svg>
      </div>

      {/* Department scroll strip — absolutely positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-44 z-[1] pointer-events-none overflow-hidden">
        {/* Top gradient fade — blends strip into navy above */}
        <div
          className="absolute top-0 left-0 right-0 h-16 z-10"
          style={{
            background:
              "linear-gradient(to bottom, #0B2E59 0%, transparent 100%)",
          }}
        />
        {/* Left & right gradient fades */}
        <div
          className="absolute top-0 left-0 bottom-0 w-24 z-10"
          style={{
            background:
              "linear-gradient(to right, #0B2E59 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-24 z-10"
          style={{
            background:
              "linear-gradient(to left, #0B2E59 0%, transparent 100%)",
          }}
        />
        {/* Scrolling strip */}
        <div className="absolute inset-0 flex items-center pointer-events-auto">
          <div className="dept-strip-animate flex items-center gap-4 px-4">
            {scrollDepts.map((dept, i) => (
              <button
                type="button"
                // biome-ignore lint/suspicious/noArrayIndexKey: static duplicate list
                key={`dept-strip-${i}`}
                className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform bg-transparent border-0 p-0"
                onClick={scrollToSpecialties}
                data-ocid="hero.specialties.link"
              >
                <div
                  className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "2px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-contain p-1"
                    loading="lazy"
                  />
                </div>
                <span className="text-white/70 text-[10px] font-medium text-center leading-tight max-w-[80px] truncate">
                  {dept.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 pt-36 pb-52">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          {/* Left Column */}
          <div>
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-xs px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                {t("badge1")}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-xs px-3 py-1.5 rounded-full">
                <Shield className="w-3.5 h-3.5 text-gold" />
                {t("badge2")}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-xs px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {t("badge3")}
              </span>
            </motion.div>

            {/* Gold accent rule */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="origin-left mb-5"
            >
              <div
                className="h-[3px] w-20 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #C9A227, rgba(201,162,39,0.2))",
                }}
              />
            </motion.div>

            {/* Heading — single line */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-2xl sm:text-3xl xl:text-[2.6rem] font-bold text-white leading-tight mb-4 whitespace-nowrap"
            >
              {t("heroHeading")}
            </motion.h1>

            {/* Subtext — single line */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/75 text-sm sm:text-base leading-relaxed mb-6 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {t("heroSubtext")}
            </motion.p>

            {/* Trust indicator mini-stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.labelKey}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2"
                >
                  <span className="text-gold">{stat.icon}</span>
                  <span className="text-white font-bold text-sm">
                    {stat.value}
                  </span>
                  <span className="text-white/60 text-xs">
                    {t(stat.labelKey)}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Booking Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-2xl p-6 shadow-2xl"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(201,162,39,0.35)",
              }}
            >
              <h3 className="font-semibold text-lg mb-4 tracking-tight text-navy">
                {t("formTitle")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs mb-1 block font-medium text-navy">
                      {t("fullName")} *
                    </Label>
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="bg-white border-gray-300 text-navy placeholder:text-gray-400 focus:border-teal"
                      data-ocid="hero.appointment.name.input"
                    />
                  </div>
                  <div>
                    <Label className="text-xs mb-1 block font-medium text-navy">
                      {t("phoneNumber")} *
                    </Label>
                    <Input
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="bg-white border-gray-300 text-navy placeholder:text-gray-400 focus:border-teal"
                      data-ocid="hero.appointment.phone.input"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-xs mb-1 block font-medium text-navy">
                    {t("department")} *
                  </Label>
                  <Select
                    value={form.department}
                    onValueChange={(v) => setForm({ ...form, department: v })}
                  >
                    <SelectTrigger
                      className="bg-white border-gray-300 text-navy"
                      data-ocid="hero.appointment.department.select"
                    >
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((d) => (
                        <SelectItem key={d} value={d}>
                          {d}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs mb-1 block font-medium text-navy">
                      {t("preferredDate")}
                    </Label>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className="bg-white border-gray-300 text-navy focus:border-teal"
                      data-ocid="hero.appointment.date.input"
                    />
                  </div>
                  <div>
                    <Label className="text-xs mb-1 block font-medium text-navy">
                      {t("preferredTime")}
                    </Label>
                    <Input
                      type="time"
                      value={form.time}
                      onChange={(e) =>
                        setForm({ ...form, time: e.target.value })
                      }
                      className="bg-white border-gray-300 text-navy focus:border-teal"
                      data-ocid="hero.appointment.time.input"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full font-bold rounded-full h-12 text-base text-white hover:opacity-90"
                  style={{ background: "#0B2E59" }}
                  data-ocid="hero.appointment.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      {t("booking")}
                    </>
                  ) : mutation.isSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />{" "}
                      {t("appointmentRequested")}
                    </>
                  ) : (
                    t("bookNow")
                  )}
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Right Column — YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:flex flex-col justify-end gap-3 h-full"
          >
            {/* Decorative label above video */}
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-white/50 text-xs font-medium uppercase tracking-widest">
                Santhiram Hospital
              </span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl hero-video-frame">
              <iframe
                src="https://www.youtube.com/embed/XaQU_ejvB1E?rel=0&modestbranding=1&autoplay=0"
                title="Santhiram Hospital"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Floating info card below video */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3"
            >
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-gold" />
              </div>
              <div>
                <div className="text-white text-xs font-semibold">
                  NABH Accredited
                </div>
                <div className="text-white/50 text-[11px]">
                  National Accreditation Board for Hospitals
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 w-full"
        style={{
          background: "rgba(10,38,71,0.95)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroStats.map((stat) => (
            <motion.div
              key={stat.labelKey}
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                style={{
                  background: "rgba(201,162,39,0.2)",
                  border: "1px solid rgba(201,162,39,0.3)",
                }}
              >
                {stat.icon}
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gold/80 font-medium">
                  {t(stat.labelKey)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
