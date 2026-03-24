import { About } from "@/components/About";
import { AppointmentSection } from "@/components/AppointmentSection";
import { Contact } from "@/components/Contact";
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

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <About />
        <Departments />
        <Stats />
        <WhyChooseUs />
        <Doctors />
        <Testimonials />
        <AppointmentSection />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
