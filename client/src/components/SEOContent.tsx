export default function SEOContent() {
  return (
    <>
      {/* Comprehensive FAQ Schema for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What areas in Omaha do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ted Croft Painting LLC serves the entire Omaha metropolitan area including Omaha, Bellevue, Papillion, La Vista, Ralston, Elkhorn, Gretna, Council Bluffs, and surrounding communities within a 30-mile radius. We provide professional interior and exterior painting services throughout Douglas, Sarpy, and Pottawattamie counties."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to paint a house in Omaha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of painting a house in Omaha varies based on size, condition, and type of paint used. Interior painting typically ranges from $2-5 per square foot, while exterior painting ranges from $1.50-4 per square foot. Ted Croft Painting LLC offers free, no-obligation estimates for all projects. Call (402) 812-3445 for your personalized quote."
                }
              },
              {
                "@type": "Question",
                "name": "Are you licensed and insured in Nebraska?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Ted Croft Painting LLC is fully licensed, bonded, and insured in Nebraska. We carry comprehensive liability insurance and workers' compensation coverage to protect both our clients and our team. Ask us for proof of insurance anytime."
                }
              },
              {
                "@type": "Question",
                "name": "How long has Ted Croft Painting been in business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ted Croft Painting LLC has been providing professional painting services in Omaha since 1998, giving us over 25 years of experience. We've completed thousands of residential and commercial projects throughout the Omaha metropolitan area."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer free estimates in Omaha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide completely free on-site estimates for all painting projects in Omaha and surrounding areas. Our detailed estimates include material costs, labor, timeline, and a breakdown of work to be performed. Contact us at (402) 812-3445 or tjcroft@hotmail.com to schedule your free estimate."
                }
              },
              {
                "@type": "Question",
                "name": "What types of painting services do you offer in Omaha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer comprehensive painting services including interior house painting, exterior house painting, kitchen cabinet painting and refinishing, bathroom cabinet refinishing, commercial painting, office painting, drywall repair, surface preparation, color consultation, and deck staining. We specialize in high-end residential painting."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to paint a house interior in Omaha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The time to paint a house interior depends on the size and complexity of the project. A typical 3-bedroom home takes 3-5 days, while larger homes or those requiring extensive prep work may take 1-2 weeks. We provide accurate timelines during your free estimate and work efficiently while maintaining our high quality standards."
                }
              },
              {
                "@type": "Question",
                "name": "What paint brands do you use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ted Croft Painting uses premium paint brands including Sherwin-Williams, Benjamin Moore, and PPG. We recommend the best products for each project based on the surface type, location, and desired durability. Higher quality paints mean better coverage, longevity, and a more beautiful finish."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer cabinet painting in Omaha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, cabinet painting and refinishing is one of our specialties. We transform kitchen and bathroom cabinets with factory-quality finishes at a fraction of the cost of replacement. Our cabinet painting process includes thorough cleaning, sanding, priming, and multiple coats of durable paint or lacquer."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best time of year to paint a house exterior in Nebraska?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best time for exterior painting in Nebraska is late spring through early fall (May-October) when temperatures are consistently between 50-85°F with low humidity. We monitor weather conditions closely and schedule exterior projects during optimal painting weather to ensure the best adhesion and finish."
                }
              }
            ]
          })
        }}
      />
      
      {/* Additional Service Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "House Painting",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ted Croft Painting LLC",
              "telephone": "(402) 812-3445",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Omaha",
                "addressRegion": "NE",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 41.2565,
                "longitude": -95.9345
              },
              "geoRadius": "48280"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Painting Services",
              "itemListElement": [
                {"@type": "OfferCatalog", "name": "Interior Painting", "description": "Professional interior house painting in Omaha"},
                {"@type": "OfferCatalog", "name": "Exterior Painting", "description": "Expert exterior painting for Omaha homes"},
                {"@type": "OfferCatalog", "name": "Cabinet Refinishing", "description": "Kitchen cabinet painting in Omaha"},
                {"@type": "OfferCatalog", "name": "Commercial Painting", "description": "Office and commercial painting services"}
              ]
            }
          })
        }}
      />
      
      {/* Semantic HTML SEO content - visually hidden but accessible */}
      <div className="sr-only" aria-hidden="false">
        <article>
          <h1>Professional Painting Contractor Omaha Nebraska - Ted Croft Painting LLC</h1>
          <p>
            Ted Croft Painting LLC is Omaha's premier painting contractor with over 25 years of experience 
            serving the Omaha metropolitan area. As a fully licensed and insured painting company, we specialize 
            in high-end residential interior painting, exterior house painting, and cabinet refinishing services 
            throughout Nebraska and Iowa.
          </p>
          
          <h2>Expert House Painters Serving Omaha, NE</h2>
          <p>
            Looking for reliable house painters in Omaha? Ted Croft Painting provides professional painting 
            services including interior wall painting, ceiling painting, trim work, exterior siding painting, 
            deck staining, and kitchen cabinet refinishing. Our team of experienced painters delivers 
            exceptional quality and craftsmanship on every project.
          </p>
          
          <h2>Omaha Area Painting Services</h2>
          <nav aria-label="Painting services">
            <ul>
              <li>Interior House Painting Omaha NE</li>
              <li>Exterior House Painting Omaha NE</li>
              <li>Kitchen Cabinet Painting Omaha</li>
              <li>Bathroom Cabinet Refinishing Omaha</li>
              <li>Commercial Painting Services Omaha</li>
              <li>Office Painting Contractor Omaha</li>
              <li>Residential Painting Contractor Omaha</li>
              <li>Professional Painters Omaha Nebraska</li>
              <li>Licensed Painting Company Omaha</li>
              <li>Insured Painters Omaha NE</li>
              <li>Deck Staining Omaha</li>
              <li>Drywall Repair Omaha</li>
            </ul>
          </nav>
          
          <h2>Communities We Serve in the Omaha Metro</h2>
          <nav aria-label="Service areas">
            <ul>
              <li>Omaha, Nebraska - Downtown Omaha, West Omaha, North Omaha, South Omaha, Midtown</li>
              <li>Bellevue, Nebraska - Offutt Air Force Base area</li>
              <li>Papillion, Nebraska</li>
              <li>La Vista, Nebraska</li>
              <li>Ralston, Nebraska</li>
              <li>Elkhorn, Nebraska</li>
              <li>Gretna, Nebraska</li>
              <li>Council Bluffs, Iowa</li>
              <li>Millard, Nebraska</li>
              <li>Benson, Dundee, Aksarben, Blackstone neighborhoods</li>
              <li>Florence, Nebraska</li>
              <li>Old Market District</li>
            </ul>
          </nav>
          
          <h2>Why Choose Ted Croft Painting for Your Omaha Painting Project?</h2>
          <ul>
            <li>25+ years experience as Omaha painting contractors</li>
            <li>Fully licensed and insured in Nebraska</li>
            <li>Premium paints from Sherwin-Williams and Benjamin Moore</li>
            <li>Free estimates for all Omaha area painting projects</li>
            <li>Exceptional attention to detail and clean work practices</li>
            <li>Satisfaction guaranteed on every painting job</li>
            <li>Competitive pricing for quality craftsmanship</li>
          </ul>
          
          <footer>
            <address>
              Ted Croft Painting LLC<br />
              Omaha Metropolitan Area, Nebraska<br />
              Phone: <a href="tel:4028123445">(402) 812-3445</a><br />
              Email: <a href="mailto:tjcroft@hotmail.com">tjcroft@hotmail.com</a>
            </address>
          </footer>
        </article>
      </div>
    </>
  );
}
