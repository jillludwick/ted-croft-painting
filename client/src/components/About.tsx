import kitchenInterior from "@assets/image_1755168090583.png";
import newKitchenInterior from "@assets/image_1755170991725.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-body text-4xl md:text-5xl font-light tracking-wide text-primary mb-6" data-testid="about-title">
              25+ Years of Painting Excellence in Omaha
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p data-testid="about-paragraph-1">
                Since 1998, Ted Croft Painting LLC has been the trusted choice for discerning homeowners and businesses throughout Omaha, Nebraska and surrounding communities who demand nothing but the finest in painting craftsmanship. Our quarter-century legacy is built on an unwavering commitment to detail, quality, and professionalism.
              </p>
              <p data-testid="about-paragraph-2">
                We take immense pride in our work, treating every project as a reflection of our reputation. From meticulous surface preparation to the final brushstroke, we ensure that every aspect of your painting project exceeds your expectations.
              </p>
              <p data-testid="about-paragraph-3">
                Rest assured knowing that we are <strong>fully licensed and insured</strong>, providing you with complete peace of mind throughout your project. When you choose Ted Croft Painting LLC, you're choosing trust, quality, and unmatched professionalism.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-neutral-medium uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-licensed">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-neutral-medium uppercase tracking-wide">Licensed & Insured</div>
              </div>
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-neutral-medium uppercase tracking-wide">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="space-y-4">
              {/* Luxury Bathroom */}
              <img 
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                alt="Luxury white bathroom interior with modern fixtures showcasing premium painted walls and finishes" 
                className="rounded-lg shadow-xl w-full h-48 object-cover"
                data-testid="about-image-bathroom" 
              />
              
              {/* Kitchen Interior */}
              <img 
                src={kitchenInterior} 
                alt="Luxury kitchen interior showcasing Ted Croft Painting's premium work with white cabinets and professional finishes" 
                className="rounded-lg shadow-xl w-full h-48 object-cover"
                data-testid="about-image-kitchen" 
              />
              
              {/* Kitchen Interior - Two-Tone Design */}
              <img 
                src={newKitchenInterior} 
                alt="Elegant two-tone kitchen with white upper cabinets and dark lower cabinets, showcasing Ted Croft Painting's precision in cabinet refinishing" 
                className="rounded-lg shadow-xl w-full h-48 object-cover"
                data-testid="about-image-kitchen-twotone" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
