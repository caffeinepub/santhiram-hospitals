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
import {
  Activity,
  CheckCircle,
  Clock,
  Loader2,
  Stethoscope,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

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

const heroStats = [
  { icon: <Activity className="w-5 h-5" />, value: "500+", label: "Beds" },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    value: "100+",
    label: "Specialists",
  },
  {
    icon: <Users className="w-5 h-5" />,
    value: "50,000+",
    label: "Patients Served",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    value: "24/7",
    label: "Emergency Care",
  },
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

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 bg-gradient-to-br from-[oklch(0.97_0.02_210)] to-[oklch(0.95_0.03_215)] relative overflow-hidden"
    >
      {/* Decorative bg */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5" />
        <svg
          className="absolute bottom-0 left-0 w-full opacity-5"
          viewBox="0 0 1440 200"
          fill="none"
          aria-hidden="true"
          role="presentation"
        >
          <title>Decorative wave</title>
          <path
            d="M0 100 C360 0 720 200 1080 100 C1260 50 1380 150 1440 100 V200 H0Z"
            fill="oklch(0.55 0.12 210)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Nandyal's Premier Super Speciality Hospital
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold text-hospital-heading leading-tight mb-4">
              Advanced Care, <span className="text-primary">Compassionate</span>{" "}
              Healing
            </h1>
            <p className="text-hospital-muted text-lg leading-relaxed mb-8">
              Santhiram Super Speciality Hospital — Nandyal's most trusted
              healthcare destination. 22 departments, 100+ specialists, 500+
              beds, and a commitment to your complete well-being.
            </p>
            {/* Booking Form Card */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 shadow-card-hover">
              <h3 className="text-white font-semibold text-lg mb-4">
                Book an Appointment
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <Label className="text-white/80 text-xs mb-1 block">
                      Full Name *
                    </Label>
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                      data-ocid="hero.appointment.name.input"
                    />
                  </div>
                  <div>
                    <Label className="text-white/80 text-xs mb-1 block">
                      Phone Number *
                    </Label>
                    <Input
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                      data-ocid="hero.appointment.phone.input"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-white/80 text-xs mb-1 block">
                    Department *
                  </Label>
                  <Select
                    value={form.department}
                    onValueChange={(v) => setForm({ ...form, department: v })}
                  >
                    <SelectTrigger
                      className="bg-white/10 border-white/20 text-white"
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
                    <Label className="text-white/80 text-xs mb-1 block">
                      Preferred Date
                    </Label>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white focus:border-white"
                      data-ocid="hero.appointment.date.input"
                    />
                  </div>
                  <div>
                    <Label className="text-white/80 text-xs mb-1 block">
                      Preferred Time
                    </Label>
                    <Input
                      type="time"
                      value={form.time}
                      onChange={(e) =>
                        setForm({ ...form, time: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white focus:border-white"
                      data-ocid="hero.appointment.time.input"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-white text-primary-dark hover:bg-white/90 font-bold rounded-full h-12 text-base"
                  data-ocid="hero.appointment.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      Booking...
                    </>
                  ) : mutation.isSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" /> Appointment
                      Requested!
                    </>
                  ) : (
                    "Book Now — Free Consultation"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right: Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/30 rounded-3xl" />
              <img
                src="/assets/generated/hospital-hero-doctor.dim_600x700.png"
                alt="Expert Medical Team at Santhiram Hospital"
                className="relative z-10 rounded-3xl w-full max-w-md object-cover shadow-card-hover"
                style={{ maxHeight: "520px" }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-sm text-hospital-heading">
                    NABH Accredited
                  </div>
                  <div className="text-xs text-hospital-muted">
                    Quality Healthcare
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -top-5 -right-5 bg-emergency rounded-2xl shadow-card p-4 z-20 text-white text-center"
              >
                <div className="font-bold text-xl">24/7</div>
                <div className="text-xs">Emergency</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 shadow-card text-center flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <div className="font-serif font-bold text-2xl text-primary-dark">
                {stat.value}
              </div>
              <div className="text-xs text-hospital-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
