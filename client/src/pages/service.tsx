import { useParams, Link } from "wouter";
import { useState } from "react";
import { Phone, CheckCircle, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/seo-data";
import PageHead from "@/components/PageHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CallToActionBanner from "@/components/CallToActionBanner";

export default function ServicePage() {
  const params = useParams<{ service: string }>();
  const service = services.find((s) => s.slug === params.service);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/"><Button>Return Home</Button></Link>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "url": `https://tedcroftpainting.com/services/${service.slug}`,
    "provider": {
      "@type": "PaintingContractor",
      "name": "Ted Croft Painting LLC",
      "telephone": "+1-402-812-3445",
      "address": { "@type": "PostalAddress", "addressLocality": "Omaha", "addressRegion": "NE", "addressCountry": "US" }
    },
    "areaServed": { "@type": "City", "name": "Omaha", "addressRegion": "NE" }
  };

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen">
      <PageHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://tedcroftpainting.com/services/${service.slug}`}
        schema={schema}
      />
      <Navigation />

      <section className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-500 mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
          <span className="text-red-600 font-semibold uppercase tracking-wider text-sm block mb-4">
            Professional Painting Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.heroHeading}</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">{service.heroSubheading}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="tel:4028123445">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" /> Call (402) 812-3445
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Get Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">{service.description}</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Ted Croft Painting</h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-6 mb-12">
                {service.process.map((step, i) => (
                  <div key={i} className="flex">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4 mt-1">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{step.step}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3 mb-8">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === i ? <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5"><p className="text-gray-600">{faq.answer}</p></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Free Estimate</h3>
                <p className="text-gray-600 text-sm mb-6">Contact us today for a free, no-obligation estimate on your {service.shortTitle.toLowerCase()} project.</p>
                <a href="tel:4028123445" className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors mb-3">
                  <Phone className="w-4 h-4 inline mr-2" />(402) 812-3445
                </a>
                <Link href="/#contact" className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Request Estimate Online
                </Link>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Other Services</h4>
                  {otherServices.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="block text-red-600 hover:text-red-700 py-1 text-sm font-medium">
                      {s.shortTitle} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CallToActionBanner />
    </div>
  );
}
