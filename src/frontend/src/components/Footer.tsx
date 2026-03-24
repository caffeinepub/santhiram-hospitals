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
    <footer className="bg-primary-dark text-white" data-ocid="footer.section">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg leading-tight">
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
                <MapPin className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                NH40, Nandyala, Andhra Pradesh 518001
              </div>
              <a
                href="tel:+919121022077"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-light" />
                +91 9121022077
              </a>
              <a
                href="mailto:info@santhiramhospitals.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-light" />
                info@santhiramhospitals.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
                    data-ocid="footer.link"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-light rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/90">
              Departments
            </h4>
            <ul className="space-y-2.5">
              {deptLinks.map((dept) => (
                <li key={dept}>
                  <a
                    href="#departments"
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-light rounded-full" />
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/90">
              Emergency
            </h4>
            <div className="bg-emergency rounded-2xl p-5 mb-5">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80 mb-3">
                Emergency Services
              </div>
              <a
                href="tel:+919121022077"
                className="block font-bold text-lg hover:underline"
              >
                +91 9121022077
              </a>
              <div className="text-xs text-white/70 mt-1">
                Ambulance available
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-white/70">📞 +91 9121022077</div>
              <div className="text-sm text-white/70">📞 +91 9121022078</div>
              <div className="text-sm text-white/70">📞 +91 9347258105</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <span>
            © {year} Santhiram Super Speciality Hospital. All rights reserved.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
