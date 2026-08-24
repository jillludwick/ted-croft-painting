import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Star, CheckCircle, Phone } from "lucide-react";
import { citations } from "@/lib/seo-data";
import PageHead from "@/components/PageHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CallToActionBanner from "@/components/CallToActionBanner";

export default function CitationsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Find Ted Croft Painting LLC Online - Business Listings & Directories",
    "description": "Find Ted Croft Painting LLC on Google, Yelp, BBB, and other trusted business directories. Omaha's premier painting contractor.",
    "url": "https://tedcroftpainting.com/find-us",
    "publisher": { "@type": "Organization", "name": "Ted Croft Painting LLC" }
  };

  const grouped = citations.reduce((acc, c) => {
    if (!acc[c.category]) acc[c.category] = [];
    acc[c.category].push(c);
    return acc;
  }, {} as Record<string, typeof citations>);

  return (
    <div className="min-h-screen">
      <PageHead
        title="Find Ted Croft Painting LLC | Business Listings & Reviews | Omaha NE"
        description="Find Ted Croft Painting LLC on Google, Yelp, BBB, Angi, and more. Read reviews and connect with Omaha's trusted painting contractor across all major platforms."
        canonical="https://tedcroftpainting.com/find-us"
        schema={schema}
      />
      <Navigation />

      <section className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-500 mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
          <span className="text-red-600 font-semibold uppercase tracking-wider text-sm block mb-4">
            Business Listings
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Us Online</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Connect with Ted Croft Painting LLC on trusted business directories and review platforms across the web
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Leave Us a Review</h2>
              <p className="text-gray-600">Your feedback helps other Omaha homeowners find a trusted painter. We appreciate every review!</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
          </div>

          {Object.entries(grouped).map(([category, dirs]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                {category}
                <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{dirs.length} listings</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dirs.map((dir) => (
                  <div key={dir.name} className="border border-gray-200 rounded-xl p-5 hover:border-red-600 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{dir.name}</h3>
                      {dir.priority === "essential" && (
                        <span className="bg-gray-100 text-red-700 text-xs px-2 py-0.5 rounded-full font-semibold">Essential</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{dir.description}</p>
                    <a
                      href={dir.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-semibold"
                    >
                      Visit Directory <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 bg-black text-white rounded-xl p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Consistent Business Information</h2>
              <p className="text-gray-300 mb-6">
                Our business details are consistent across all platforms to ensure you can always find and contact us:
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="text-red-600 font-semibold mb-1">Business Name</h3>
                  <p>Ted Croft Painting LLC</p>
                </div>
                <div>
                  <h3 className="text-red-600 font-semibold mb-1">Phone</h3>
                  <p>(402) 812-3445</p>
                </div>
                <div>
                  <h3 className="text-red-600 font-semibold mb-1">Service Area</h3>
                  <p>Omaha Metro, NE & IA</p>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:4028123445" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" /> Call Us
                </a>
                <Link href="/#contact" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                  Request Estimate
                </Link>
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
