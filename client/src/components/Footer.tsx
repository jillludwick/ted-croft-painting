import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "wouter";
import Logo from "./Logo";

export default function Footer() {
  const [location] = useLocation();
  const isHome = location === "/";

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
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Logo showText={false} size="sm" className="text-primary-foreground mr-3" />
              <div className="text-primary-foreground">
                <div className="font-body font-light text-xl tracking-wide">TED CROFT</div>
                <div className="font-body font-thin text-sm tracking-[0.2em] opacity-90 -mt-1">PAINTING LLC</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Your trusted partner for professional painting services in the Omaha metro area. Licensed, insured, and committed to excellence since 1998.
            </p>
            <div className="flex items-center text-primary-foreground/80">
              <Shield className="h-5 w-5 mr-2" />
              <span>Licensed & Insured | Est. 1998</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/interior-painting" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Interior Painting</Link></li>
              <li><Link href="/services/exterior-painting" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Exterior Painting</Link></li>
              <li><Link href="/services/cabinet-painting" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cabinet Painting</Link></li>
              <li><Link href="/services/commercial-painting" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Commercial Painting</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog & Tips</Link></li>
              <li><Link href="/find-us" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Find Us Online</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li><Link href="/painters-omaha" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Omaha, NE</Link></li>
              <li><Link href="/painters-bellevue" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Bellevue, NE</Link></li>
              <li><Link href="/painters-papillion" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Papillion, NE</Link></li>
              <li><Link href="/painters-la-vista" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">La Vista, NE</Link></li>
              <li><Link href="/painters-elkhorn" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Elkhorn, NE</Link></li>
              <li><Link href="/painters-gretna" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gretna, NE</Link></li>
              <li><Link href="/painters-ralston" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Ralston, NE</Link></li>
              <li><Link href="/painters-council-bluffs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Council Bluffs, IA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <a href="tel:4028123445" className="flex items-center hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>(402) 812-3445</span>
              </a>
              <a href="mailto:tjcroft@hotmail.com" className="flex items-center hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>tjcroft@hotmail.com</span>
              </a>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" />
                <span>Omaha Metropolitan Area</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection("home")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("about")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Ted Croft Painting LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200" aria-label="Instagram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200" aria-label="Google Business">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
