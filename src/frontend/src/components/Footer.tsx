import { Cross, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Find a Doctor", href: "#doctors" },
  { label: "Book Appointment", href: "#appointment" },
  { label: "Contact Us", href: "#contact" },
];

const deptLinks = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Oncology",
  "Gynecology",
  "Nephrology",
  "ENT",
  "Dermatology",
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      style={{ background: "#0B2E59" }}
      className="text-white"
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #C9A227, #a07d1a)",
                }}
              >
                <Cross className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg leading-tight text-white">
                  Santhiram
                </div>
                <div className="text-xs text-white/60">
                  Super Speciality Hospital
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Nandyal's leading multi-speciality hospital providing world-class
              healthcare with compassion and commitment.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                NH40, Nandyala, Andhra Pradesh 518001
              </div>
              <a
                href="tel:+919121022077"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                +91 9121022077
              </a>
              <a
                href="mailto:info@santhiramhospitals.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                info@santhiramhospitals.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-gold">
              Departments
            </h4>
            <ul className="space-y-2.5">
              {deptLinks.map((dept) => (
                <li key={dept}>
                  <a
                    href="#departments"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    data-ocid="footer.departments.link"
                  >
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-gold">
              Emergency
            </h4>
            <div className="space-y-4">
              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(201,162,39,0.15)",
                  border: "1px solid rgba(201,162,39,0.3)",
                }}
              >
                <div className="text-xs text-white/60 mb-1">24/7 Emergency</div>
                <a
                  href="tel:+919121022077"
                  className="text-gold font-bold text-lg hover:text-yellow-300 transition-colors"
                  data-ocid="footer.emergency.button"
                >
                  +91 9121022077
                </a>
              </div>
              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="text-xs text-white/60 mb-1">Ambulance</div>
                <a
                  href="tel:+919121022077"
                  className="text-white font-bold hover:text-white/80 transition-colors"
                >
                  🚑 +91 9121022077
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-white/50 text-sm">
            © {year} Santhiram Super Speciality Hospital. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
