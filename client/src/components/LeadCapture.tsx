import { useState } from "react";
import { X, Gift, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "@/types/global.d.ts";

interface LeadCaptureProps {
  onClose: () => void;
}

export default function LeadCapture({ onClose }: LeadCaptureProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track lead capture conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_capture', {
        event_category: 'engagement',
        event_label: 'popup_conversion',
        value: 1
      });
    }
    setIsSubmitted(true);
    setTimeout(() => onClose(), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <div className="text-red-600 text-6xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">
            We'll send your discount code and call you within 24 hours to schedule your free estimate!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center mb-6">
          <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Gift className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Save $500 on Your Painting Project!
          </h3>
          <p className="text-gray-600">
            Limited time offer for Omaha area homeowners. Get your free estimate and instant discount code!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Input 
            type="tel"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full"
          />
          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
          >
            <Gift className="mr-2 h-5 w-5" />
            Get My $500 Discount Code
          </Button>
        </form>

        <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
          <Phone className="h-4 w-4 mr-1" />
          Or call now: (402) 812-3445
        </div>
      </div>
    </div>
  );
}