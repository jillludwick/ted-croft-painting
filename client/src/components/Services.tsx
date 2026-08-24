import { Home, Building, Palette, Wrench, Briefcase, Shield } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Interior Painting",
    description: "Transform your Omaha home's living spaces with our meticulous interior painting services.",
    features: ["Walls & Ceilings", "Trim & Moldings", "Kitchen Cabinets", "Doors & Windows"]
  },
  {
    icon: Building,
    title: "Exterior Painting",
    description: "Protect and beautify your Nebraska property's exterior with our weather-resistant painting solutions.",
    features: ["House Siding", "Garages & Sheds", "Fences & Decks", "Commercial Buildings"]
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert guidance to help you choose the perfect colors for your space.",
    features: ["Color Matching", "Trend Analysis", "Sample Testing", "Design Harmony"]
  },
  {
    icon: Wrench,
    title: "Surface Preparation",
    description: "Thorough preparation ensures long-lasting, beautiful results.",
    features: ["Pressure Washing", "Surface Repairs", "Priming", "Caulking & Sealing"]
  },
  {
    icon: Briefcase,
    title: "Commercial Projects",
    description: "Professional painting services for businesses and commercial properties.",
    features: ["Office Buildings", "Retail Spaces", "Restaurants", "Industrial Facilities"]
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "We stand behind our work with comprehensive warranties and guarantees.",
    features: ["Licensed & Insured", "Quality Materials", "Timely Completion", "Satisfaction Guarantee"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-body text-4xl md:text-5xl font-light tracking-wide text-primary mb-6" data-testid="services-title">
            Professional Painting Services in Omaha
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto leading-relaxed" data-testid="services-description">
            From interior transformations to exterior makeovers, we provide comprehensive painting services throughout Omaha and surrounding Nebraska communities that enhance and protect your most valuable investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="bg-neutral-light rounded-lg p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                data-testid={`service-card-${index}`}>
                <div className="text-4xl text-primary mb-6">
                  <IconComponent className="h-12 w-12" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-4" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-neutral-medium mb-6 leading-relaxed" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2 text-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center" data-testid={`service-feature-${index}-${featureIndex}`}>
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
