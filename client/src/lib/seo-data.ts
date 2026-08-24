export interface LocationData {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  lat: number;
  lng: number;
  zip: string;
  population: string;
  description: string;
  neighborhoods: string[];
  nearbyAreas: string[];
  uniqueContent: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  description: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export const locations: LocationData[] = [
  {
    slug: "omaha",
    city: "Omaha",
    state: "Nebraska",
    stateAbbr: "NE",
    county: "Douglas County",
    lat: 41.2565,
    lng: -95.9345,
    zip: "68102",
    population: "490,000+",
    description: "As Omaha's most trusted painting contractor, Ted Croft Painting LLC has been transforming homes and businesses across the city for over 25 years. From the historic charm of Dundee to the modern developments in West Omaha, we deliver premium painting services tailored to each neighborhood's unique character.",
    neighborhoods: ["Downtown", "West Omaha", "Midtown", "Dundee", "Benson", "Aksarben", "Blackstone", "Old Market", "Florence", "North Omaha", "South Omaha", "Millard"],
    nearbyAreas: ["Bellevue", "Papillion", "La Vista", "Ralston", "Elkhorn"],
    uniqueContent: "Omaha's diverse architectural styles, from Victorian homes in the Gold Coast to contemporary builds in Lakeside Hills, require a painter who understands each surface and substrate. Nebraska's climate with hot summers, harsh winters, and everything in between demands expert preparation and premium materials to ensure lasting results."
  },
  {
    slug: "bellevue",
    city: "Bellevue",
    state: "Nebraska",
    stateAbbr: "NE",
    county: "Sarpy County",
    lat: 41.1544,
    lng: -95.9146,
    zip: "68005",
    population: "65,000+",
    description: "Ted Croft Painting LLC proudly serves Bellevue, Nebraska's oldest city. Whether you live near Offutt Air Force Base or in the established neighborhoods along Galvin Road, our professional painting crew delivers the same high-quality results that have made us the Omaha metro's preferred painting contractor.",
    neighborhoods: ["Offutt AFB Area", "Old Towne Bellevue", "Twin Ridge", "Bellevue West", "Haworth Park Area"],
    nearbyAreas: ["Omaha", "Papillion", "La Vista", "Ralston"],
    uniqueContent: "Bellevue homeowners near Offutt Air Force Base often need quick-turnaround painting for PCS moves and home sales. We understand the military community's needs and offer flexible scheduling and efficient service to help families prepare their homes for inspections and showings."
  },
  {
    slug: "papillion",
    city: "Papillion",
    state: "Nebraska",
    stateAbbr: "NE",
    county: "Sarpy County",
    lat: 41.1544,
    lng: -96.0419,
    zip: "68046",
    population: "25,000+",
    description: "Papillion residents trust Ted Croft Painting for their interior and exterior painting projects. Named one of the best places to live in America, Papillion homes deserve the finest craftsmanship and attention to detail that our 25+ years of experience provides.",
    neighborhoods: ["Shadow Lake", "Tregaron", "Midlands Place", "Papillion Landing", "Downtown Papillion"],
    nearbyAreas: ["La Vista", "Bellevue", "Omaha", "Gretna"],
    uniqueContent: "With Papillion's rapid growth and newer construction, many homeowners are looking to personalize builder-grade finishes with custom paint colors and cabinet refinishing. We specialize in transforming new construction into a personalized home that reflects your style."
  },
  {
    slug: "la-vista",
    city: "La Vista",
    state: "Nebraska",
    stateAbbr: "NE",
    county: "Sarpy County",
    lat: 41.1839,
    lng: -96.0311,
    zip: "68128",
    population: "18,000+",
    description: "La Vista homeowners choose Ted Croft Painting for professional, reliable painting services. Our team brings decades of experience to every project in this thriving Sarpy County community, from single-family homes near the La Vista Falls Golf Course to commercial properties along 84th Street.",
    neighborhoods: ["Central La Vista", "Harrison Street Corridor", "La Vista Falls", "Southport"],
    nearbyAreas: ["Papillion", "Ralston", "Omaha", "Bellevue"],
    uniqueContent: "La Vista's central location in the metro makes it easy for our crew to serve you efficiently. The city's mix of established homes and newer developments means we handle everything from refreshing a 1970s ranch to putting the finishing touches on a modern build."
  },
  {
    slug: "elkhorn",
    city: "Elkhorn",
    state: "Nebraska",
    stateAbbr: "NE",
    county: "Douglas County",
    lat: 41.2861,
    lng: -96.2353,
    zip: "68022",
    population: "30,000+",
    description: "Elkhorn's growing community of beautiful homes deserves premium painting services. Ted Croft Painting LLC serves Elkhorn with the same dedication to quality and professionalism that has earned us a stellar reputation across the Omaha metro for over 25 years.",
    neighborhoods: ["Waterford", "Elkhorn Ridge", "Eagle Hills", "Old Towne Elkhorn", "Skyline Ranch"],
    nearbyAreas: ["Omaha", "Gretna", "Bennington", "Valley"],
    uniqueContent: "Elkhorn features many executive-style homes and upscale developments that require a painter experienced with high-end finishes, tall ceilings, and detailed trim work. Our crew has the equipment and expertise to handle multi-story exteriors and specialty interior finishes."
  },
  {
    slug: "gretna",
    city: "Gretna",
    state: "Nebraska",
    stateAbbr: "NE",
    county: "Sarpy County",
    lat: 41.1406,
    lng: -96.2392,
    zip: "68028",
    population: "15,000+",
    description: "Gretna is one of the fastest-growing communities in Nebraska, and Ted Croft Painting LLC is here to serve its homeowners with expert painting services. From new construction finishes to refreshing established homes, we deliver exceptional quality in every project.",
    neighborhoods: ["Aspen Creek", "Gretna Crossing", "Downtown Gretna", "Prairie View"],
    nearbyAreas: ["Papillion", "Elkhorn", "Omaha", "Springfield"],
    uniqueContent: "With Gretna's explosive growth, many new homeowners are discovering that builder-grade paint and finishes don't meet their standards. We help Gretna families upgrade their interiors with premium paints, custom color schemes, and professional cabinet refinishing."
  },
  {
    slug: "ralston",
    city: "Ralston",
    state: "Nebraska",
    stateAbbr: "NE",
    county: "Douglas County",
    lat: 41.2011,
    lng: -96.0419,
    zip: "68127",
    population: "7,500+",
    description: "Ralston residents rely on Ted Croft Painting for top-quality painting services. This charming community with its own identity and pride deserves a painting contractor who treats every home with care and precision.",
    neighborhoods: ["Central Ralston", "Ralston Arena Area", "South Ralston"],
    nearbyAreas: ["Omaha", "La Vista", "Papillion", "Bellevue"],
    uniqueContent: "Ralston's established homes often feature classic mid-century architecture that benefits from expert color consultation and careful preparation. We take pride in helping Ralston homeowners preserve and enhance the character of their homes."
  },
  {
    slug: "council-bluffs",
    city: "Council Bluffs",
    state: "Iowa",
    stateAbbr: "IA",
    county: "Pottawattamie County",
    lat: 41.2619,
    lng: -95.8608,
    zip: "51501",
    population: "63,000+",
    description: "Ted Croft Painting LLC extends our professional painting services across the Missouri River to Council Bluffs, Iowa. Just minutes from downtown Omaha, Council Bluffs homeowners enjoy the same premium craftsmanship and attention to detail that has built our reputation in Nebraska.",
    neighborhoods: ["Downtown", "Lake Manawa Area", "Broadway Corridor", "Indian Creek", "Westwood"],
    nearbyAreas: ["Omaha", "Bellevue", "Carter Lake", "Crescent"],
    uniqueContent: "Council Bluffs offers a unique mix of historic properties near the downtown area and newer developments in the western suburbs. Whether your home overlooks the bluffs or sits near Lake Manawa, our crew delivers the quality finish your property deserves."
  }
];

export const services: ServiceData[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting Services Omaha",
    shortTitle: "Interior Painting",
    metaTitle: "Interior Painting Omaha NE | Professional House Painters | Ted Croft Painting",
    metaDescription: "Expert interior painting services in Omaha, NE. Walls, ceilings, trim, doors & more. 25+ years experience, licensed & insured. Free estimates! Call (402) 812-3445.",
    heroHeading: "Professional Interior Painting in Omaha",
    heroSubheading: "Transform your living spaces with expert craftsmanship and premium finishes",
    description: "Your home's interior is where life happens. Ted Croft Painting LLC brings over 25 years of expertise to every interior painting project in the Omaha metro area. We use premium paints from Sherwin-Williams and Benjamin Moore, combined with meticulous preparation and clean work practices, to deliver a flawless finish that lasts for years.",
    benefits: [
      "Premium paints from Sherwin-Williams & Benjamin Moore",
      "Meticulous surface preparation for lasting results",
      "Clean, professional work practices with furniture protection",
      "Expert color consultation to find your perfect palette",
      "Walls, ceilings, trim, doors, and detailed finish work",
      "Flexible scheduling with minimal disruption to your routine"
    ],
    process: [
      { step: "Free Consultation", description: "We visit your home, discuss your vision, provide color recommendations, and deliver a detailed written estimate at no cost." },
      { step: "Surface Preparation", description: "We protect your furnishings, patch holes, sand surfaces, caulk gaps, and prime as needed to ensure perfect paint adhesion." },
      { step: "Expert Application", description: "Using professional-grade tools and techniques, we apply premium paint with precision, ensuring even coverage and crisp lines." },
      { step: "Final Inspection", description: "We walk through every room with you, address any touch-ups, and leave your home cleaner than we found it." }
    ],
    faqs: [
      { question: "How long does interior painting take?", answer: "A typical 3-bedroom home takes 3-5 days. Larger homes or those requiring extensive prep work may take 1-2 weeks. We provide accurate timelines during your free estimate." },
      { question: "Do I need to move my furniture?", answer: "No. Our team carefully moves and covers all furniture, floors, and fixtures. We treat your home as if it were our own." },
      { question: "What type of paint do you recommend?", answer: "We primarily use Sherwin-Williams and Benjamin Moore premium lines. We recommend specific products based on the room's use, lighting, and your desired finish." }
    ]
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting Services Omaha",
    shortTitle: "Exterior Painting",
    metaTitle: "Exterior Painting Omaha NE | House Painters Near Me | Ted Croft Painting",
    metaDescription: "Professional exterior painting in Omaha, NE. Weather-resistant finishes for Nebraska climate. Siding, trim, decks & more. Licensed & insured. Free estimates!",
    heroHeading: "Expert Exterior Painting in Omaha",
    heroSubheading: "Protect and beautify your home with weather-resistant finishes built for Nebraska",
    description: "Nebraska's climate is tough on exterior surfaces. From scorching summer heat to bitter winter cold, your home's exterior needs paint that performs year-round. Ted Croft Painting LLC uses premium exterior coatings specifically chosen for Nebraska weather conditions, applied with expert technique to maximize durability and curb appeal.",
    benefits: [
      "Weather-resistant coatings designed for Nebraska's extreme climate",
      "Thorough power washing and surface preparation",
      "Expert repair of peeling, cracking, and damaged surfaces",
      "Siding, trim, fascia, soffits, shutters, and accent details",
      "Deck staining and fence painting available",
      "Color consultation to boost your home's curb appeal"
    ],
    process: [
      { step: "Property Assessment", description: "We inspect your home's exterior, identify problem areas, assess surface conditions, and provide a comprehensive estimate." },
      { step: "Power Washing & Prep", description: "We thoroughly clean all surfaces, scrape loose paint, repair damaged areas, caulk gaps, and prime bare surfaces." },
      { step: "Professional Painting", description: "Using airless sprayers, brushes, and rollers as appropriate, we apply multiple coats of premium exterior paint for complete, even coverage." },
      { step: "Quality Walkthrough", description: "We inspect every surface with you, ensure all details are perfect, and clean up completely before we leave." }
    ],
    faqs: [
      { question: "When is the best time to paint exteriors in Nebraska?", answer: "Late spring through early fall (May-October) offers the best conditions. We monitor weather closely and schedule projects during optimal windows of 50-85\u00b0F with low humidity." },
      { question: "How long does exterior paint last in Nebraska?", answer: "With proper preparation and premium paint, exterior finishes typically last 7-10 years in Nebraska's climate. We use products specifically formulated for temperature extremes." },
      { question: "Do you paint vinyl siding?", answer: "Yes. We use specialized paints designed for vinyl siding that flex with temperature changes and won't peel or crack." }
    ]
  },
  {
    slug: "cabinet-painting",
    title: "Cabinet Painting & Refinishing Omaha",
    shortTitle: "Cabinet Painting",
    metaTitle: "Cabinet Painting Omaha NE | Kitchen Cabinet Refinishing | Ted Croft Painting",
    metaDescription: "Transform your kitchen cabinets in Omaha, NE. Factory-quality finishes at a fraction of replacement cost. 25+ years experience. Free estimates! Call (402) 812-3445.",
    heroHeading: "Cabinet Painting & Refinishing in Omaha",
    heroSubheading: "Transform your kitchen for a fraction of the cost of new cabinets",
    description: "Kitchen cabinet painting is one of the most impactful home improvements you can make. For a fraction of the cost of new cabinets, Ted Croft Painting LLC can give your kitchen a completely new look with a factory-quality painted finish. Our specialized cabinet painting process ensures a smooth, durable result that stands up to daily use.",
    benefits: [
      "Save 50-70% compared to full cabinet replacement",
      "Factory-quality spray finish for a smooth, professional look",
      "Kitchen and bathroom cabinets, islands, and built-ins",
      "Extensive color options and custom color matching",
      "Durable finishes that resist chipping, scratching, and moisture",
      "Most kitchen projects completed in 5-7 business days"
    ],
    process: [
      { step: "Kitchen Consultation", description: "We assess your cabinets, discuss finish options and colors, and provide a detailed estimate for your project." },
      { step: "Careful Removal", description: "We remove all doors, drawers, and hardware, label everything for precise reinstallation, and protect your countertops and appliances." },
      { step: "Multi-Step Finishing", description: "Each piece is cleaned, sanded, primed, and receives multiple coats of premium cabinet paint or lacquer for a factory-smooth finish." },
      { step: "Precise Reinstallation", description: "We reinstall all components with new hardware if desired, adjust doors for perfect alignment, and do a final quality check." }
    ],
    faqs: [
      { question: "Is cabinet painting worth it?", answer: "Absolutely. Cabinet painting costs 50-70% less than replacement and can completely transform your kitchen's appearance. Quality cabinet paint lasts 8-10 years with proper care." },
      { question: "How long does cabinet painting take?", answer: "Most kitchen cabinet projects take 5-7 business days from start to finish. We work efficiently while ensuring each coat cures properly for maximum durability." },
      { question: "Can you paint laminate cabinets?", answer: "Yes. We use specialized bonding primers designed for laminate surfaces, followed by premium cabinet-grade paint for a durable, beautiful finish." }
    ]
  },
  {
    slug: "commercial-painting",
    title: "Commercial Painting Services Omaha",
    shortTitle: "Commercial Painting",
    metaTitle: "Commercial Painting Omaha NE | Office & Business Painters | Ted Croft Painting",
    metaDescription: "Professional commercial painting in Omaha, NE. Offices, retail, restaurants & industrial. Minimal disruption to your business. Licensed & insured. Free estimates!",
    heroHeading: "Commercial Painting Services in Omaha",
    heroSubheading: "Professional finishes for offices, retail spaces, and commercial properties",
    description: "Your business environment makes a statement about your brand. Ted Croft Painting LLC provides professional commercial painting services throughout the Omaha metro area, delivering quality finishes with minimal disruption to your operations. From small office refreshes to large-scale commercial projects, we have the experience and equipment to handle it all.",
    benefits: [
      "Flexible scheduling including evenings and weekends to minimize business disruption",
      "Offices, retail stores, restaurants, medical facilities, and warehouses",
      "Brand color matching and corporate identity compliance",
      "Low-VOC and zero-VOC paint options for occupied spaces",
      "Fully licensed, bonded, and insured for commercial work",
      "Competitive pricing with detailed project proposals"
    ],
    process: [
      { step: "Site Survey", description: "We tour your facility, understand your business needs, schedule requirements, and provide a comprehensive commercial estimate." },
      { step: "Project Planning", description: "We create a detailed project timeline that minimizes disruption, coordinate with your team, and prepare all necessary materials." },
      { step: "Efficient Execution", description: "Our experienced crew works quickly and cleanly, often during off-hours, to complete your project on time and on budget." },
      { step: "Business Ready", description: "We ensure your space is clean, professional, and ready for business the moment we finish." }
    ],
    faqs: [
      { question: "Can you paint during business hours?", answer: "We offer flexible scheduling including evenings, weekends, and phased approaches to minimize disruption. We'll work with you to find the best schedule for your operations." },
      { question: "Do you carry commercial insurance?", answer: "Yes. We carry comprehensive general liability insurance, workers' compensation, and commercial auto insurance. We can provide certificates of insurance for your records." },
      { question: "What size commercial projects do you handle?", answer: "We handle projects of all sizes, from single offices to multi-story commercial buildings. Our experienced crew and professional equipment allow us to efficiently manage large-scale projects." }
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "best-interior-paint-colors-omaha-homes-2025",
    title: "Best Interior Paint Colors for Omaha Homes in 2025",
    metaDescription: "Discover the top trending interior paint colors for Omaha homes in 2025. Expert color recommendations from Ted Croft Painting LLC with 25+ years of experience.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Color Trends",
    excerpt: "Choosing the right paint colors can completely transform your Omaha home. Here are our top picks for 2025, informed by 25+ years of painting experience in Nebraska.",
    content: [
      "Choosing the right interior paint colors is one of the most impactful decisions you can make for your home. After 25+ years of painting homes across the Omaha metro area, we've seen countless color trends come and go. Here are the colors that Omaha homeowners are loving in 2025.",
      "Warm neutrals continue to dominate in Omaha homes. Colors like Sherwin-Williams' Accessible Beige and Benjamin Moore's Revere Pewter create a welcoming, versatile backdrop that works with Nebraska's natural light. These tones feel cozy during our cold winters while staying fresh and airy in summer.",
      "Deep, moody accent walls are making a strong statement this year. Rich navy blues, forest greens, and charcoal grays add dramatic flair to dining rooms and primary bedrooms. We're seeing many Omaha homeowners pair these bold choices with warm white trim for a sophisticated contrast.",
      "For kitchens and bathrooms, soft sage greens and muted blue-grays remain popular. These calming hues work beautifully with both modern and traditional cabinetry. If you're considering a cabinet painting project, these wall colors create a stunning backdrop for freshly painted white or gray cabinets.",
      "Pro tip from our team: always test paint colors in your actual space before committing. Omaha's natural light varies significantly from north-facing to south-facing rooms, and colors can look dramatically different depending on your home's orientation. We offer free color consultations to help you make the perfect choice."
    ],
    tags: ["interior painting", "paint colors", "Omaha homes", "color trends", "home improvement"]
  },
  {
    slug: "how-to-prepare-home-exterior-painting-nebraska",
    title: "How to Prepare Your Home for Exterior Painting in Nebraska",
    metaDescription: "Learn how to properly prepare your Nebraska home for exterior painting. Expert tips from Ted Croft Painting LLC on timing, prep work, and choosing the right paint.",
    date: "2025-03-20",
    readTime: "7 min read",
    category: "Exterior Painting",
    excerpt: "Nebraska weather demands special attention when painting your home's exterior. Learn the essential prep steps that ensure a beautiful, long-lasting paint job.",
    content: [
      "Exterior painting in Nebraska is more challenging than in most states. Our extreme temperature swings, high winds, summer storms, and winter freeze-thaw cycles put incredible stress on paint. Here's what 25+ years of painting Omaha homes has taught us about proper preparation.",
      "Timing is everything. The ideal window for exterior painting in Nebraska is May through October, when temperatures consistently stay between 50-85 degrees Fahrenheit. Early morning dew and afternoon heat both affect paint adhesion, so our crews typically paint during the optimal mid-morning to early afternoon window.",
      "Proper surface preparation is the most critical step. We begin with a thorough power wash to remove dirt, mildew, and loose paint. This alone can take a full day for a typical Omaha home. After washing, surfaces need 24-48 hours to dry completely before any painting begins.",
      "Scraping and sanding come next. Every square inch of peeling or flaking paint must be removed down to a sound surface. We fill cracks and holes with exterior-grade caulk and wood filler, then sand everything smooth. This prep work is tedious but absolutely essential for a finish that lasts 7-10 years in Nebraska's climate.",
      "Choosing the right paint matters enormously here. We exclusively use premium exterior paints formulated for extreme climates. Products like Sherwin-Williams Duration and Benjamin Moore Aura Exterior are engineered to expand and contract with Nebraska's temperature extremes without cracking or peeling.",
      "One final tip: pay attention to your home's directional exposure. South and west-facing walls take the most sun and weather abuse in Nebraska. These surfaces may need an extra coat or a more durable product to maintain their appearance over time."
    ],
    tags: ["exterior painting", "home preparation", "Nebraska weather", "painting tips", "house painting"]
  },
  {
    slug: "cabinet-painting-vs-replacement-cost-comparison",
    title: "Cabinet Painting vs. Replacement: A Cost Comparison for Omaha Homeowners",
    metaDescription: "Compare the costs of cabinet painting vs. replacement in Omaha. Save 50-70% with professional cabinet refinishing. Expert analysis from Ted Croft Painting LLC.",
    date: "2025-05-10",
    readTime: "6 min read",
    category: "Cabinet Refinishing",
    excerpt: "Thinking about updating your kitchen cabinets? Here's a detailed cost comparison between painting and replacing cabinets in the Omaha area.",
    content: [
      "If your kitchen cabinets are structurally sound but looking dated, you face a common dilemma: should you paint them or replace them entirely? After refinishing hundreds of kitchens across the Omaha metro, we can help you make an informed decision.",
      "The average cost of full cabinet replacement in Omaha ranges from $15,000 to $40,000+ depending on cabinet quality, layout complexity, and whether countertops and backsplashes need modification. This typically includes weeks of disruption, with your kitchen partially or completely out of commission.",
      "Professional cabinet painting in Omaha typically costs $3,500 to $8,000 for an average kitchen. That's a savings of 50-70% compared to replacement, and most projects are completed in about a week. Your kitchen remains functional throughout much of the process.",
      "The key to a great cabinet painting result is the process. At Ted Croft Painting, we remove all doors and drawers, label everything for precise reinstallation, and apply our multi-step finishing process: thorough cleaning, deglossing, premium bonding primer, and multiple coats of cabinet-grade paint with proper cure time between coats.",
      "When does replacement make more sense? If your cabinets have significant water damage, structural problems, or if you want to completely change the kitchen layout, replacement may be the better investment. But if your cabinet boxes are solid and you like your layout, painting delivers an incredible transformation at a fraction of the cost.",
      "Bottom line: for most Omaha homeowners, cabinet painting offers the best value. You get a brand-new look, a durable factory-quality finish, and you keep thousands of dollars in your pocket for other home improvements."
    ],
    tags: ["cabinet painting", "kitchen renovation", "cost comparison", "cabinet refinishing", "Omaha kitchen"]
  },
  {
    slug: "choosing-right-painting-contractor-omaha",
    title: "How to Choose the Right Painting Contractor in Omaha",
    metaDescription: "Expert guide to choosing a reliable painting contractor in Omaha, NE. What to look for in licensing, insurance, reviews, and quality. Tips from Ted Croft Painting LLC.",
    date: "2025-07-05",
    readTime: "6 min read",
    category: "Hiring Tips",
    excerpt: "Not all painting contractors are created equal. Here's what every Omaha homeowner should look for before hiring a painter.",
    content: [
      "Hiring the right painting contractor can mean the difference between a beautiful, lasting result and a frustrating experience. After 25+ years in the Omaha painting industry, here's our honest guide to finding a reliable painter.",
      "First, verify licensing and insurance. In Nebraska, painting contractors should carry general liability insurance and workers' compensation coverage. Ask for certificates of insurance and verify they're current. A contractor who can't produce proof of insurance is a major red flag. Ted Croft Painting LLC is fully licensed, bonded, and insured.",
      "Check reviews and references. Look at Google reviews, Yelp, and the Better Business Bureau. Don't just count stars; read the detailed reviews to understand how the contractor handles communication, timelines, and problem resolution. Ask for references from recent projects similar to yours.",
      "Get detailed written estimates. A professional contractor will visit your home, assess the scope of work, and provide a detailed written estimate that includes surface preparation, number of coats, paint brand and product, timeline, and payment terms. Be cautious of estimates given over the phone without seeing the property.",
      "Ask about their preparation process. This is where quality contractors separate themselves. Proper preparation, including cleaning, scraping, sanding, caulking, and priming, accounts for roughly 80% of a paint job's longevity. If a contractor plans to skip prep steps, expect the paint to fail prematurely.",
      "Understand payment terms. Reputable contractors typically require a deposit of 20-30% with the balance due upon completion and your satisfaction. Avoid contractors who demand full payment upfront or only accept cash.",
      "Finally, trust your instincts about communication and professionalism. A good painting contractor returns calls promptly, shows up when they say they will, and clearly explains every aspect of the project. That level of professionalism extends to how they'll treat your home."
    ],
    tags: ["hiring contractor", "painting contractor", "Omaha painters", "home improvement tips", "contractor guide"]
  }
];

export interface CitationDirectory {
  name: string;
  url: string;
  category: string;
  description: string;
  priority: "essential" | "recommended" | "helpful";
}

export const citations: CitationDirectory[] = [
  { name: "Google Business Profile", url: "https://business.google.com", category: "Search Engines", description: "Primary local search listing for Omaha area searches", priority: "essential" },
  { name: "Yelp", url: "https://www.yelp.com", category: "Review Sites", description: "Major review platform for local service businesses", priority: "essential" },
  { name: "Better Business Bureau", url: "https://www.bbb.org", category: "Trust & Accreditation", description: "BBB accreditation builds consumer trust", priority: "essential" },
  { name: "Angi (formerly Angie's List)", url: "https://www.angi.com", category: "Home Services", description: "Leading home services marketplace", priority: "essential" },
  { name: "HomeAdvisor", url: "https://www.homeadvisor.com", category: "Home Services", description: "Home improvement project matching service", priority: "essential" },
  { name: "Thumbtack", url: "https://www.thumbtack.com", category: "Home Services", description: "Local professional services marketplace", priority: "recommended" },
  { name: "Houzz", url: "https://www.houzz.com", category: "Home Design", description: "Home design and renovation platform", priority: "recommended" },
  { name: "Facebook Business", url: "https://www.facebook.com/business", category: "Social Media", description: "Business page for community engagement", priority: "essential" },
  { name: "Nextdoor", url: "https://nextdoor.com", category: "Community", description: "Neighborhood-focused social platform", priority: "recommended" },
  { name: "Omaha Chamber of Commerce", url: "https://www.omahachamber.org", category: "Local Business", description: "Local business authority and networking", priority: "recommended" },
  { name: "Sarpy County Chamber", url: "https://www.sarpychamber.org", category: "Local Business", description: "Chamber serving Bellevue, Papillion, La Vista, Gretna", priority: "helpful" },
  { name: "Apple Maps / Apple Business Connect", url: "https://businessconnect.apple.com", category: "Search Engines", description: "Apple Maps business listing for iPhone users", priority: "recommended" },
  { name: "Bing Places for Business", url: "https://www.bingplaces.com", category: "Search Engines", description: "Microsoft Bing local business listing", priority: "recommended" },
  { name: "Porch", url: "https://porch.com", category: "Home Services", description: "Home improvement project platform", priority: "helpful" },
  { name: "Buildzoom", url: "https://www.buildzoom.com", category: "Home Services", description: "Contractor verification and project matching", priority: "helpful" },
  { name: "Manta", url: "https://www.manta.com", category: "Business Directories", description: "Small business directory and listings", priority: "helpful" },
  { name: "Yellow Pages (YP.com)", url: "https://www.yellowpages.com", category: "Business Directories", description: "Traditional business directory online", priority: "helpful" },
  { name: "MapQuest", url: "https://www.mapquest.com", category: "Search Engines", description: "Map-based business listing service", priority: "helpful" }
];
