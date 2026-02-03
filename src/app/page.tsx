import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafbfc]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Impact />
      <Contact />
      <Footer />
    </main>
  );
}
