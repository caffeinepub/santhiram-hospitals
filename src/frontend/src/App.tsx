import { About } from "@/components/About";
import { AppointmentSection } from "@/components/AppointmentSection";
import { Contact } from "@/components/Contact";
import { DepartmentDetail } from "@/components/DepartmentDetail";
import { Departments } from "@/components/Departments";
import { Doctors } from "@/components/Doctors";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickActions } from "@/components/QuickActions";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";

export default function App() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      setSelectedDept((e as CustomEvent<{ name: string }>).detail.name);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("selectDept", handler);
    return () => window.removeEventListener("selectDept", handler);
  }, []);

  const handleBack = () => {
    setSelectedDept(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans">
      <Header />
      {selectedDept ? (
        <DepartmentDetail name={selectedDept} onBack={handleBack} />
      ) : (
        <main>
          <Hero />
          <QuickActions />
          <About />
          <Departments onSelectDept={setSelectedDept} />
          <Stats />
          <WhyChooseUs />
          <Doctors />
          <Testimonials />
          <AppointmentSection />
          <Contact />
        </main>
      )}
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
