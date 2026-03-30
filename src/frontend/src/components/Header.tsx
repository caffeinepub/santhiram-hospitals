import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/i18n/LanguageContext";
import type { LangCode } from "@/i18n/translations";
import { ChevronDown, Cross, Globe, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { NewsTickerStrip } from "./NewsTickerStrip";

const departments = [
  "Cardiology",
  "Dermatology",
  "ENT",
  "Gastroenterology",
  "General Surgery & Surgical Gastroenterology",
  "Obstetrics & Gynecology",
  "Nephrology",
  "Neurology",
  "Oncology",
  "Urology",
  "Plastic Surgery",
  "Ophthalmology",
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
  "General Surgery",
];

const languages: { code: LangCode; display: string; label: string }[] = [
  { code: "en", display: "EN", label: "EN — English" },
  { code: "te", display: "తెలుగు", label: "తెలుగు" },
  { code: "hi", display: "हिंदी", label: "हिंदी" },
  { code: "ta", display: "தமிழ்", label: "தமிழ்" },
  { code: "ml", display: "മലയാളം", label: "മലയാളം" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      50,
    );
  };

  const handleDeptSelect = (dept: string) => {
    window.dispatchEvent(
      new CustomEvent("selectDept", { detail: { name: dept } }),
    );
  };

  const navLinks = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "doctors", href: "#doctors" },
    { key: "departments", href: "#departments" },
    { key: "contact", href: "#contact" },
  ];

  const currentDisplay =
    languages.find((l) => l.code === lang)?.display ?? "EN";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Emergency Bar */}
      <div className="bg-emergency text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="animate-pulse">🚨</span>
              24/7 EMERGENCY CARE
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a
              href="tel:+919121022077"
              className="flex items-center gap-1.5 hover:underline font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              Emergency: +91 9121022077
            </a>
            <span className="hidden sm:block">|</span>
            <a
              href="tel:+919121022077"
              className="hidden sm:flex items-center gap-1.5 hover:underline"
            >
              🚑 Ambulance: +91 9121022077
            </a>
          </div>
        </div>
      </div>

      {/* News Ticker Strip */}
      <NewsTickerStrip />

      {/* Main Header */}
      <div
        className={`transition-all duration-300 bg-white border-b border-gray-100 ${
          scrolled ? "shadow-header" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            data-ocid="header.link"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #0B2E59, #0E7490)",
              }}
            >
              <Cross className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-serif font-bold text-navy text-lg leading-tight tracking-tight">
                Santhiram
              </div>
              <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                Super Speciality Hospital
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            data-ocid="nav.panel"
          >
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
                data-ocid="nav.link"
              >
                {t(link.key)}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-navy transition-colors"
                  data-ocid="nav.departments.toggle"
                >
                  {t("departments")} <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-72 max-h-80 overflow-y-auto"
                data-ocid="nav.departments.dropdown_menu"
              >
                {departments.map((dept) => (
                  <DropdownMenuItem
                    key={dept}
                    className="cursor-pointer text-sm"
                    onClick={() => handleDeptSelect(dept)}
                    data-ocid="nav.departments.link"
                  >
                    {dept}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-navy transition-colors"
                  data-ocid="header.language.toggle"
                >
                  <Globe className="w-3.5 h-3.5" />
                  {currentDisplay}
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                data-ocid="header.language.dropdown_menu"
              >
                {languages.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    className={`cursor-pointer text-sm ${
                      lang === l.code ? "font-semibold text-navy" : ""
                    }`}
                    onClick={() => setLang(l.code)}
                    data-ocid="header.language.select"
                  >
                    {l.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <span className="text-gray-200">|</span>

            <a
              href="tel:+919121022077"
              className="text-sm font-medium text-gray-600 flex items-center gap-1.5 hover:text-navy transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 91210 22077
            </a>
            <Button
              className="text-white rounded-full px-6 font-semibold"
              style={{
                background: "linear-gradient(135deg, #C9A227, #a07d1a)",
              }}
              onClick={() => {
                window.location.href = "tel:+919121022077";
              }}
              data-ocid="header.book_appointment.button"
            >
              {t("bookAppointment")}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="header.mobile_menu.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="px-4 py-4 flex flex-col gap-1 bg-white">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleMobileNav(link.href)}
                    className="text-sm font-medium py-2.5 text-left text-gray-700 hover:text-navy transition-colors"
                  >
                    {t(link.key)}
                  </button>
                ))}

                {/* Mobile Language Switcher */}
                <div className="pt-3 pb-1">
                  <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">
                    Language
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => setLang(l.code)}
                        className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                          lang === l.code
                            ? "bg-navy text-white border-navy"
                            : "bg-white text-gray-600 border-gray-300 hover:border-navy hover:text-navy"
                        }`}
                        data-ocid="header.mobile_language.toggle"
                      >
                        {l.display}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  className="text-white rounded-full w-full mt-2 font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #C9A227, #a07d1a)",
                  }}
                  onClick={() => {
                    window.location.href = "tel:+919121022077";
                  }}
                  data-ocid="header.mobile_book.button"
                >
                  {t("bookAppointment")}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
