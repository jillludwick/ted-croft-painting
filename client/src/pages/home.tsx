import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEOContent from "../components/SEOContent";
import TrustSignals from "../components/TrustSignals";
import CallToActionBanner from "../components/CallToActionBanner";
import LeadCapture from "../components/LeadCapture";
import ServiceArea from "../components/ServiceArea";
import FAQ from "../components/FAQ";
import AIColorPreview from "../components/AIColorPreview";
import { useLeadCapture } from "../hooks/useLeadCapture";

export default function Home() {
  const { showPopup, closePopup } = useLeadCapture();

  return (
    <div className="min-h-screen">
      <SEOContent />
      <Navigation />
      <Hero />
      <TrustSignals />
      <About />
      <Services />
      <AIColorPreview />
      <Portfolio />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <CallToActionBanner />
      {showPopup && <LeadCapture onClose={closePopup} />}
    </div>
  );
}
