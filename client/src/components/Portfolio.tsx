import { Button } from "@/components/ui/button";
import accentWallImage from "@assets/image_1755168967628.png";
import kitchenRemodel from "@assets/image_1755169175226.png";
import laundryRoom from "@assets/image_1755169328237.png";
import luxuryKitchen from "@assets/image_1755169480411.png";
import homeExterior from "@assets/image_1755169763763.png";
import barnExterior from "@assets/image_1755169910484.png";
import luxuryEstate from "@assets/image_1755170195162.png";
import deckHome from "@assets/image_1755170340138.png";

const portfolioItems = [
  {
    image: luxuryKitchen,
    title: "Luxury Kitchen Transformation",
    subtitle: "Complete Cabinet Painting",
    alt: "Stunning luxury kitchen with professionally painted white cabinets, designer lighting and premium finishes"
  },
  {
    image: deckHome,
    title: "Residential Exterior & Deck",
    subtitle: "Complete Exterior Painting",
    alt: "Beautiful home exterior with professionally painted siding, custom deck staining and landscaping"
  },
  {
    image: homeExterior,
    title: "Exterior Home Painting",
    subtitle: "Brick & Trim Refinishing",
    alt: "Beautiful home exterior with professionally painted black trim, brick restoration and window refinishing"
  },
  {
    image: luxuryEstate,
    title: "Luxury Estate Painting",
    subtitle: "Comprehensive Exterior Project",
    alt: "Magnificent luxury estate with professionally painted exterior, multiple balconies, stone work and premium finishes"
  },
  {
    image: barnExterior,
    title: "Barn & Workshop Painting",
    subtitle: "Agricultural Building Project",
    alt: "Professionally painted barn and workshop exterior with cream siding and black trim in rural setting"
  },
  {
    image: laundryRoom,
    title: "Laundry Room Makeover",
    subtitle: "Interior Paint & Design",
    alt: "Modern laundry room with professionally painted gray walls, white cabinets and organized storage"
  }
];

export default function Portfolio() {
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
    <section id="portfolio" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-body text-4xl md:text-5xl font-light tracking-wide text-primary mb-6" data-testid="portfolio-title">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto leading-relaxed" data-testid="portfolio-description">
            Browse through our portfolio of completed projects and see the transformation we bring to every space.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-background portfolio-item"
              data-testid={`portfolio-item-${index}`}>
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2" data-testid={`portfolio-title-${index}`}>
                    {item.title}
                  </h4>
                  <p className="text-sm" data-testid={`portfolio-subtitle-${index}`}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 text-lg font-semibold"
            data-testid="portfolio-cta">
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
}
