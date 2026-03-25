import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Cross, Menu, Phone, X } from "lucide-react";
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

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Departments", href: "#departments" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        className={`bg-white transition-all duration-300 ${
          scrolled ? "shadow-header" : "border-b border-hospital-border"
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
                background: "linear-gradient(135deg, #0A4D8C, #4DA8DA)",
              }}
            >
              <Cross className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-serif font-bold text-primary-dark text-lg leading-tight tracking-tight">
                Santhiram
              </div>
              <div className="text-xs text-hospital-muted font-medium tracking-widest uppercase">
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
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  data-ocid="nav.departments.toggle"
                >
                  Departments <ChevronDown className="w-4 h-4" />
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
            <a
              href="tel:+919121022077"
              className="text-sm font-medium text-primary-dark flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              +91 91210 22077
            </a>
            <Button
              className="text-white rounded-full px-6 font-semibold"
              style={{
                background: "linear-gradient(135deg, #0A4D8C, #4DA8DA)",
              }}
              onClick={() =>
                document
                  .getElementById("appointment")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="header.book_appointment.button"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
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
              className="lg:hidden overflow-hidden border-t border-hospital-border"
            >
              <div className="px-4 py-4 flex flex-col gap-1 bg-white">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleMobileNav(link.href)}
                    className="text-sm font-medium py-2.5 text-left text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  className="text-white rounded-full w-full mt-2 font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #0A4D8C, #4DA8DA)",
                  }}
                  onClick={() => handleMobileNav("#appointment")}
                  data-ocid="header.mobile_book.button"
                >
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
