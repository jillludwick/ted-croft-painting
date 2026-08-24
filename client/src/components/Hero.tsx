import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import heroBackground from "@assets/image_1755167951351.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(${heroBackground})`
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <Logo showText={false} size="lg" className="text-white" />
        </div>
        <h1 className="font-body text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="font-light">TED CROFT</span><br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-thin tracking-[0.2em] opacity-90">PAINTING LLC</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Trusted. Experienced. High-End Painting Services<br />
          <span className="text-lg md:text-xl opacity-80">Serving Omaha, Nebraska & Surrounding Communities</span>
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
            data-testid="hero-cta-primary">
            Get a Free Estimate
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("about")}
            className="border-2 border-white !text-white hover:bg-white hover:!text-black px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
            data-testid="hero-cta-secondary">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
