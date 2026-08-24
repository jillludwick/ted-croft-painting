import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Ted and his team transformed our entire home's interior. The attention to detail was exceptional, and they completed the job on time and within budget. Highly recommended!",
    author: "Sarah & Michael Johnson",
    project: "Residential Interior Project",
    rating: 5
  },
  {
    text: "Professional, reliable, and incredibly skilled. Ted's exterior painting work completely revitalized our home's curb appeal. The prep work was thorough and the results are stunning.",
    author: "Robert Chen",
    project: "Exterior Painting & Restoration",
    rating: 5
  },
  {
    text: "We hired Ted Croft Painting for our restaurant renovation. They worked around our schedule and delivered exceptional results. Our customers constantly compliment the beautiful finish.",
    author: "Maria Rodriguez",
    project: "Commercial Restaurant Project",
    rating: 5
  },
  {
    text: "The kitchen cabinet refinishing exceeded our expectations. What would have cost us thousands in new cabinets, Ted transformed with his expert painting skills for a fraction of the cost.",
    author: "David & Lisa Thompson",
    project: "Kitchen Cabinet Refinishing",
    rating: 5
  },
  {
    text: "Ted's color consultation service was invaluable. He helped us choose the perfect palette that transformed our home's ambiance. The quality of work speaks for itself.",
    author: "Jennifer Adams",
    project: "Color Consultation & Interior Painting",
    rating: 5
  }
];

export default function Testimonials() {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex text-yellow-400 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-current" />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-body text-4xl md:text-5xl font-light tracking-wide text-primary mb-6" data-testid="testimonials-title">
            What Our Omaha Clients Say
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto leading-relaxed" data-testid="testimonials-description">
            Don't just take our word for it. Here's what our satisfied Omaha area customers have to say about their experience with Ted Croft Painting LLC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-neutral-light rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              data-testid={`testimonial-card-${index}`}>
              <StarRating rating={testimonial.rating} />
              <p className="text-foreground/80 mb-6 leading-relaxed italic" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary" data-testid={`testimonial-author-${index}`}>
                  {testimonial.author}
                </p>
                <p className="text-neutral-medium text-sm" data-testid={`testimonial-project-${index}`}>
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional testimonials for larger screens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mt-8">
          {testimonials.slice(3).map((testimonial, index) => (
            <div 
              key={index + 3}
              className="bg-neutral-light rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              data-testid={`testimonial-card-${index + 3}`}>
              <StarRating rating={testimonial.rating} />
              <p className="text-foreground/80 mb-6 leading-relaxed italic" data-testid={`testimonial-text-${index + 3}`}>
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary" data-testid={`testimonial-author-${index + 3}`}>
                  {testimonial.author}
                </p>
                <p className="text-neutral-medium text-sm" data-testid={`testimonial-project-${index + 3}`}>
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
