import { useState } from "react";
import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/types/global.d.ts";

export default function CallToActionBanner() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'sticky_banner',
        value: 1
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 shadow-lg z-40 animate-slide-up">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="font-semibold">
            25+ Years | Licensed & Insured | Free Estimates
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={scrollToContact}
            className="bg-white text-red-700 hover:bg-gray-100 font-semibold px-6"
          >
            Get Free Estimate
          </Button>
          <a 
            href="tel:(402) 812-3445"
            className="flex items-center justify-center bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded font-semibold transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            (402) 812-3445
          </a>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-2 text-white/80 hover:text-white text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}