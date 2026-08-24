import { useEffect } from "react";

interface PageHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export default function PageHead({ title, description, canonical, schema }: PageHeadProps) {
  useEffect(() => {
    document.title = title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && canonical) {
      canonicalLink.setAttribute("href", canonical);
    }

    let existingSchema = document.getElementById("page-schema") as HTMLScriptElement | null;
    if (schema) {
      if (!existingSchema) {
        const scriptEl = document.createElement("script");
        scriptEl.id = "page-schema";
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
        existingSchema = scriptEl;
      }
      existingSchema.textContent = JSON.stringify(schema);
    }

    return () => {
      document.title = "Ted Croft Painting LLC - Professional Painters Omaha, NE | Licensed & Insured";
      if (metaDesc) {
        metaDesc.setAttribute("content", "Expert painting services in Omaha, Nebraska & surrounding areas. Ted Croft Painting LLC offers 25+ years of professional interior, exterior & cabinet painting. Licensed, insured & trusted. Free estimates!");
      }
      const schemaEl = document.getElementById("page-schema");
      if (schemaEl) {
        schemaEl.remove();
      }
    };
  }, [title, description, canonical, schema]);

  return null;
}
