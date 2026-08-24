import { useParams, Link } from "wouter";
import { MapPin, Phone, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locations } from "@/lib/seo-data";
import PageHead from "@/components/PageHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CallToActionBanner from "@/components/CallToActionBanner";

export default function LocationPage() {
  const params = useParams<{ city: string }>();
  const location = locations.find((l) => l.slug === params.city);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    "name": "Ted Croft Painting LLC",
    "description": `Professional painting services in ${location.city}, ${location.stateAbbr}. Interior, exterior, and cabinet painting.`,
    "url": `https://tedcroftpainting.com/painters-${location.slug}`,
    "telephone": "+1-402-812-3445",
    "email": "tjcroft@hotmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": location.stateAbbr,
      "postalCode": location.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.lat,
      "longitude": location.lng
    },
    "areaServed": {
      "@type": "City",
      "name": location.city,
      "addressRegion": location.stateAbbr
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "16:00" }
    ]
  };

  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  return (
    <div className="min-h-screen">
      <PageHead
        title={`Professional Painters ${location.city}, ${location.stateAbbr} | Ted Croft Painting LLC`}
        description={`Expert painting services in ${location.city}, ${location.stateAbbr}. Interior, exterior & cabinet painting. 25+ years experience, licensed & insured. Free estimates! Call (402) 812-3445.`}
        canonical={`https://tedcroftpainting.com/painters-${location.slug}`}
        schema={schema}
      />
      <Navigation />

      <section className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-500 mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <MapPin className="w-8 h-8 text-red-600 mr-3" />
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">{location.county}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Painters in {location.city}, {location.stateAbbr}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Licensed & insured painting contractor serving {location.city} and {location.county} with over 25 years of experience. Interior, exterior, and cabinet painting.
          </p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Painting Services in {location.city}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {location.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {location.uniqueContent}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Services in {location.city}</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  `Interior Painting in ${location.city}`,
                  `Exterior Painting in ${location.city}`,
                  `Cabinet Painting in ${location.city}`,
                  `Commercial Painting in ${location.city}`,
                  "Color Consultation",
                  "Drywall Repair",
                  "Deck Staining",
                  "Surface Preparation"
                ].map((service) => (
                  <div key={service} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Neighborhoods We Serve in {location.city}
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {location.neighborhoods.map((n) => (
                  <span key={n} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                <ul className="space-y-3 mb-6">
                  {["25+ Years Experience", "Licensed & Insured", "Free Estimates", "Premium Materials", "Satisfaction Guarantee", "Clean & Professional"].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:4028123445" className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  <Phone className="w-4 h-4 inline mr-2" />
                  (402) 812-3445
                </a>
                <Link href="/#contact" className="block w-full bg-black text-white text-center py-3 rounded-lg font-semibold mt-3 hover:bg-gray-800 transition-colors">
                  Request Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Nearby Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/painters-${loc.slug}`}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-md transition-all text-center"
              >
                <MapPin className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <span className="font-semibold text-gray-900">{loc.city}</span>
                <span className="block text-sm text-gray-500">{loc.stateAbbr}</span>
                <ArrowRight className="w-4 h-4 text-red-600 mx-auto mt-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CallToActionBanner />
    </div>
  );
}
