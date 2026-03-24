import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useQueries";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const mutation = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      await mutation.mutateAsync(form);
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error(
        "Failed to send. Please email us at info@santhiramhospitals.com",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-hospital-bg"
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl font-bold text-hospital-heading mt-2 mb-4">
            Contact Santhiram Hospital
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map placeholder */}
            <div className="bg-primary/10 rounded-2xl h-64 flex items-center justify-center border border-primary/20 overflow-hidden">
              <iframe
                title="Santhiram Hospital Location"
                src="https://maps.google.com/maps?q=Santhiram+Hospital+Nandyal+Andhra+Pradesh&output=embed"
                className="w-full h-full rounded-2xl"
                loading="lazy"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-card">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-hospital-heading text-sm mb-1">
                  Address
                </h4>
                <p className="text-hospital-muted text-xs leading-relaxed">
                  NH40, Nandyala, Andhra Pradesh 518001
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-card">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-hospital-heading text-sm mb-1">
                  Working Hours
                </h4>
                <p className="text-hospital-muted text-xs leading-relaxed">
                  Mon–Sat: 8 AM – 8 PM
                  <br />
                  Emergency: 24/7
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-card">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-hospital-heading text-sm mb-2">
                  Phone Numbers
                </h4>
                <div className="space-y-1">
                  {["+91 9121022077", "+91 9121022078", "+91 9347258105"].map(
                    (ph) => (
                      <a
                        key={ph}
                        href={`tel:${ph.replace(/\s/g, "")}`}
                        className="block text-xs text-primary hover:underline"
                      >
                        {ph}
                      </a>
                    ),
                  )}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-card">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-hospital-heading text-sm mb-1">
                  Email
                </h4>
                <a
                  href="mailto:info@santhiramhospitals.com"
                  className="text-xs text-primary hover:underline break-all"
                >
                  info@santhiramhospitals.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-card"
              data-ocid="contact.form"
            >
              <h3 className="font-serif font-bold text-xl text-hospital-heading mb-6">
                Send Us a Message
              </h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-hospital-heading mb-1.5 block">
                    Your Name *
                  </Label>
                  <Input
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    data-ocid="contact.name.input"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-hospital-heading mb-1.5 block">
                      Phone *
                    </Label>
                    <Input
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      data-ocid="contact.phone.input"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-hospital-heading mb-1.5 block">
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      data-ocid="contact.email.input"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-hospital-heading mb-1.5 block">
                    Message *
                  </Label>
                  <Textarea
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="min-h-[120px]"
                    data-ocid="contact.message.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-primary-dark text-white rounded-full h-11 font-semibold"
                  data-ocid="contact.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : mutation.isSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                {mutation.isSuccess && (
                  <p
                    className="text-center text-sm text-primary"
                    data-ocid="contact.success_state"
                  >
                    ✓ We'll get back to you within 24 hours.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
