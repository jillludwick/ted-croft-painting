import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import Logo from "./Logo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLink = "text-primary hover:text-neutral-medium px-3 py-2 text-sm font-medium transition-colors duration-200";
  const mobileNavLink = "block px-3 py-2 text-base font-medium text-primary hover:text-neutral-medium transition-colors duration-200 w-full text-left";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-backdrop ${
      scrolled ? "bg-white/95 shadow-lg" : "bg-white/95"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center h-20">
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-6">
              <button onClick={() => scrollToSection("home")} className={navLink}>Home</button>
              <button onClick={() => scrollToSection("about")} className={navLink}>About</button>

              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className={`${navLink} inline-flex items-center`}>
                  Services <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full bg-white shadow-xl rounded-lg border border-gray-100 py-2 w-56 z-50">
                    <Link href="/services/interior-painting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Interior Painting</Link>
                    <Link href="/services/exterior-painting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Exterior Painting</Link>
                    <Link href="/services/cabinet-painting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Cabinet Painting</Link>
                    <Link href="/services/commercial-painting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Commercial Painting</Link>
                  </div>
                )}
              </div>

              <div className="relative" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
                <button className={`${navLink} inline-flex items-center`}>
                  Areas <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                {locationsOpen && (
                  <div className="absolute left-0 top-full bg-white shadow-xl rounded-lg border border-gray-100 py-2 w-56 z-50">
                    <Link href="/painters-omaha" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Omaha, NE</Link>
                    <Link href="/painters-bellevue" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Bellevue, NE</Link>
                    <Link href="/painters-papillion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Papillion, NE</Link>
                    <Link href="/painters-la-vista" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">La Vista, NE</Link>
                    <Link href="/painters-elkhorn" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Elkhorn, NE</Link>
                    <Link href="/painters-gretna" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Gretna, NE</Link>
                    <Link href="/painters-ralston" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Ralston, NE</Link>
                    <Link href="/painters-council-bluffs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700">Council Bluffs, IA</Link>
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection("portfolio")} className={navLink}>Portfolio</button>
              <Link href="/blog" className={navLink}>Blog</Link>
              <Button onClick={() => scrollToSection("contact")} className="bg-primary text-primary-foreground hover:bg-accent">
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile hamburger — absolute right so it doesn't shift centered nav */}
          <div className="lg:hidden absolute right-4">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-neutral-medium">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border max-h-[80vh] overflow-y-auto">
            <button onClick={() => scrollToSection("home")} className={mobileNavLink}>Home</button>
            <button onClick={() => scrollToSection("about")} className={mobileNavLink}>About</button>

            <div className="px-3 py-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Services</span>
            </div>
            <Link href="/services/interior-painting" className={mobileNavLink} onClick={() => setIsOpen(false)}>Interior Painting</Link>
            <Link href="/services/exterior-painting" className={mobileNavLink} onClick={() => setIsOpen(false)}>Exterior Painting</Link>
            <Link href="/services/cabinet-painting" className={mobileNavLink} onClick={() => setIsOpen(false)}>Cabinet Painting</Link>
            <Link href="/services/commercial-painting" className={mobileNavLink} onClick={() => setIsOpen(false)}>Commercial Painting</Link>

            <div className="px-3 py-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Service Areas</span>
            </div>
            <Link href="/painters-omaha" className={mobileNavLink} onClick={() => setIsOpen(false)}>Omaha, NE</Link>
            <Link href="/painters-bellevue" className={mobileNavLink} onClick={() => setIsOpen(false)}>Bellevue, NE</Link>
            <Link href="/painters-papillion" className={mobileNavLink} onClick={() => setIsOpen(false)}>Papillion, NE</Link>
            <Link href="/painters-la-vista" className={mobileNavLink} onClick={() => setIsOpen(false)}>La Vista, NE</Link>
            <Link href="/painters-elkhorn" className={mobileNavLink} onClick={() => setIsOpen(false)}>Elkhorn, NE</Link>
            <Link href="/painters-council-bluffs" className={mobileNavLink} onClick={() => setIsOpen(false)}>Council Bluffs, IA</Link>

            <button onClick={() => scrollToSection("portfolio")} className={mobileNavLink}>Portfolio</button>
            <Link href="/blog" className={mobileNavLink} onClick={() => setIsOpen(false)}>Blog</Link>
            <Button onClick={() => scrollToSection("contact")} className="block mx-3 mt-2 bg-primary text-primary-foreground hover:bg-accent w-auto">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
