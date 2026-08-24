# Ted Croft Painting LLC Website

## Overview

This is a modern, responsive website for Ted Croft Painting LLC, a licensed and insured high-end painting company with over 25 years of experience. The website showcases the company's services, portfolio, and provides a professional contact form for potential clients to request estimates. Built as a full-stack web application with a React frontend and Express backend, it features a clean design emphasizing trust, professionalism, and quality craftsmanship.

## Recent Changes

- Comprehensive SEO expansion with multi-page architecture (February 12, 2026)
  - Created 8 location-optimized pages (Omaha, Bellevue, Papillion, La Vista, Elkhorn, Gretna, Ralston, Council Bluffs)
  - Created 4 service pages with search-intent keywords (Interior, Exterior, Cabinet, Commercial Painting)
  - Created blog section with 4 educational articles and BlogPosting schema
  - Created citations/directory page listing 18+ local business directories
  - Built PageHead component for dynamic per-page meta tags and schema injection
  - Centralized SEO data in seo-data.ts for data-driven page templates
  - Updated Navigation with dropdown menus for Services and Areas
  - Updated Footer with full 5-column layout linking to all pages
  - Updated sitemap.xml with 21 URLs and robots.txt with new directives
  - Each page has unique title, meta description, canonical URL, and structured data

- Updated color scheme from green to sophisticated teal (December 8, 2025)
  - Replaced all green accent colors with custom HSL-based teal palette
  - Created custom CSS utility classes for teal-50 through teal-900
  - Updated CallToActionBanner, LeadCapture, Contact, ServiceArea, and TrustSignals components
  - Updated theme-color meta tag and manifest.json to #0d7377

- Added visible FAQ section for enhanced SEO (December 8, 2025)
  - Created accessible accordion-style FAQ component with 6 common questions
  - Added proper ARIA attributes (aria-expanded, aria-controls, role="region")
  - FAQ content supports existing FAQPage structured data schema

- Added Google Maps Service Area integration (December 5, 2025)
  - Created ServiceArea component with interactive Google Maps display
  - Shows Omaha metropolitan service coverage with 8 marked locations (Omaha, Bellevue, Papillion, La Vista, Elkhorn, Gretna, Ralston, Council Bluffs)
  - Includes graceful fallback when Google Maps API key is not available
  - Added "Free On-Site Estimates" call-to-action with direct phone link

- Enhanced SEO with validated Schema.org structured data (December 5, 2025)
  - Added PaintingContractor LocalBusiness schema with complete service area targeting
  - Implemented BreadcrumbList, WebSite, and ProfessionalService schemas
  - Added comprehensive FAQPage schema with 10 common questions for rich snippets
  - Updated sitemap.xml and robots.txt with proper crawl directives
  - All structured data validated and cleaned of unverifiable claims

- Fixed TypeScript and sessionStorage issues (December 5, 2025)
  - Created centralized type declarations for gtag analytics
  - Added safe sessionStorage helpers with try-catch for iframe/privacy mode compatibility
  - Cleaned up unused imports and consolidated type definitions

- Added advanced lead generation and traffic conversion features (August 14, 2025)
  - Implemented exit-intent popup with $500 discount offer to capture leaving visitors
  - Added sticky call-to-action banner with phone number and estimate request
  - Created trust signals section highlighting licensing, experience, and guarantees
  - Enhanced contact form with urgency indicators and discount promotions
  - Added conversion tracking for all lead capture events
  - Implemented smart popup timing based on user engagement (30 sec delay or 50% scroll)

- Implemented comprehensive SEO optimization for local Omaha area searches (August 14, 2025)
  - Added location-specific meta tags, structured data (Schema.org), and local business markup
  - Enhanced all content with Omaha-specific keywords and geographical targeting
  - Optimized titles, descriptions, and headings for "Omaha painting contractor" and related local terms

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **UI Components**: Comprehensive component system using Radix UI primitives for accessibility
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API endpoints for contact form submissions
- **Data Validation**: Zod schemas shared between frontend and backend
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot reload and development middleware integration

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory
- **Database**: PostgreSQL configured via Neon serverless database connection
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Current Implementation**: Memory-based storage for development with database-ready infrastructure

### Authentication and Authorization
- **Current State**: No authentication system implemented
- **Contact Forms**: Public submission endpoint with validation
- **Admin Access**: Prepared endpoint structure for future admin functionality

### External Service Integrations
- **Database**: Neon PostgreSQL serverless database (configured but using memory storage)
- **Fonts**: Google Fonts integration (Playfair Display and Inter)
- **Images**: Unsplash CDN for high-quality stock photography
- **Development**: Replit-specific development tooling and error handling

The architecture prioritizes scalability, maintainability, and professional presentation while maintaining the flexibility to add features like user authentication, email notifications, and content management as the business grows.