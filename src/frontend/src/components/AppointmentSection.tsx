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
import { Textarea } from "@/components/ui/textarea";
import { useBookAppointment } from "@/hooks/useQueries";
import {
  Calendar,
  CheckCircle,
  Clock,
  Loader2,
  Phone,
  Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const departments = [
  "Cardiology",
  "Dermatology",
  "ENT",
  "General Surgery & Surgical Gastroenterology",
  "Obstetrics & Gynaecology",
  "Nephrology",
  "Neurology",
  "Oncology",
  "Urology",
  "Plastic Surgery",
  "Ophthalmology",
  "General Surgery",
  "Psychiatry",
  "Trichology",
  "Radiology",
  "Critical Care Medicine",
  "Neuro Surgery",
  "Pediatrics Surgery",
  "Orthopedics & Sports Medicine",
  "Emergency Medicine",
  "Pulmonology",
  "General Medicine",
  "Cardio Thoracic & Vascular Surgery",
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
];

const features = [
  {
    icon: <Calendar className="w-5 h-5" />,
    text: "Same-day appointments available",
  },
  { icon: <Phone className="w-5 h-5" />, text: "We'll call you to confirm" },
  { icon: <Clock className="w-5 h-5" />, text: "Flexible scheduling options" },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    text: "Expert specialists in every field",
  },
];

export function AppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    date: "",
    time: "",
    message: "",
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
        email: form.email,
        department: form.department,
        preferredDate,
        message: `${form.time ? `Preferred time: ${form.time}. ` : ""}${form.message}`,
      });
      toast.success(
        "Appointment booked! Our team will contact you within 30 minutes.",
      );
      setForm({
        name: "",
        phone: "",
        email: "",
        department: "",
        date: "",
        time: "",
        message: "",
      });
    } catch {
      toast.error(
        "Something went wrong. Please call +91 9121022077 to book directly.",
      );
    }
  };

  return (
    <section
      id="appointment"
      className="py-20 bg-hospital-bg"
      data-ocid="appointment.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Schedule a Visit
          </span>
          <h2 className="font-serif text-4xl font-bold text-navy mt-2 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-hospital-muted max-w-2xl mx-auto">
            Fill in the form below and our patient care team will confirm your
            appointment promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Features */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: "#0B2E59" }}
            >
              <h3 className="font-serif font-bold text-2xl mb-6">
                Why Book With Us?
              </h3>
              <div className="space-y-5">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,162,39,0.25)" }}
                    >
                      {f.icon}
                    </div>
                    <span className="text-white/90 text-sm">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emergency rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Need Urgent Help?</h4>
              <p className="text-white/80 text-sm mb-4">
                For emergencies, please call us immediately.
              </p>
              <a
                href="tel:+919121022077"
                className="flex items-center gap-2 bg-white text-emergency font-bold px-4 py-3 rounded-xl hover:bg-white/90 transition-colors"
                data-ocid="appointment.emergency.button"
              >
                <Phone className="w-5 h-5" />
                +91 9121022077
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 shadow-lg bg-white border border-hospital-border"
              data-ocid="appointment.form"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-sm font-medium text-navy mb-1.5 block">
                    Full Name *
                  </Label>
                  <Input
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-hospital-border focus:border-teal"
                    data-ocid="appointment.name.input"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-navy mb-1.5 block">
                    Phone Number *
                  </Label>
                  <Input
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="border-hospital-border focus:border-teal"
                    data-ocid="appointment.phone.input"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-navy mb-1.5 block">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="border-hospital-border focus:border-teal"
                    data-ocid="appointment.email.input"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-navy mb-1.5 block">
                    Department *
                  </Label>
                  <Select
                    value={form.department}
                    onValueChange={(v) => setForm({ ...form, department: v })}
                  >
                    <SelectTrigger
                      className="border-hospital-border"
                      data-ocid="appointment.department.select"
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
                <div>
                  <Label className="text-sm font-medium text-navy mb-1.5 block">
                    Preferred Date
                  </Label>
                  <Input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="border-hospital-border focus:border-teal"
                    data-ocid="appointment.date.input"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-navy mb-1.5 block">
                    Preferred Time
                  </Label>
                  <Select
                    value={form.time}
                    onValueChange={(v) => setForm({ ...form, time: v })}
                  >
                    <SelectTrigger
                      className="border-hospital-border"
                      data-ocid="appointment.time.select"
                    >
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-5">
                <Label className="text-sm font-medium text-navy mb-1.5 block">
                  Message / Symptoms
                </Label>
                <Textarea
                  placeholder="Briefly describe your symptoms or reason for visit..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="min-h-[100px] border-hospital-border focus:border-teal"
                  data-ocid="appointment.message.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full mt-6 text-white font-bold rounded-full h-12 text-base hover:opacity-90"
                style={{ background: "#0B2E59" }}
                data-ocid="appointment.submit_button"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                    Submitting...
                  </>
                ) : mutation.isSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" /> Appointment
                    Confirmed!
                  </>
                ) : (
                  "Confirm Appointment →"
                )}
              </Button>
              {mutation.isSuccess && (
                <p
                  className="text-center text-sm text-teal mt-3"
                  data-ocid="appointment.success_state"
                >
                  ✓ We'll call you within 30 minutes to confirm your
                  appointment.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
