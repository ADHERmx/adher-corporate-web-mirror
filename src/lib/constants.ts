/**
 * Site-wide constants for Acabados Adher corporate website
 */

import { BUSINESS_INFO } from "@/data/business-info";

// Site Configuration
export const SITE_CONFIG = {
  name: BUSINESS_INFO.brandName,
  fullName: BUSINESS_INFO.legalName,
  url: BUSINESS_INFO.contact.website.url,
  locale: "es_MX",
  localeISO: "es-MX",
  region: BUSINESS_INFO.locations.mainOffice.geoRegion,
  placename: BUSINESS_INFO.locations.mainOffice.city,

  // Default SEO
  defaultTitle: `${BUSINESS_INFO.brandName} - ${BUSINESS_INFO.tagline}`,
  titleTemplate: `%s | ${BUSINESS_INFO.brandName}`,
  defaultDescription: `Empresa líder en pintura electrostática en polvo. Certificación ${BUSINESS_INFO.certification}. Calidad, innovación y servicio desde ${BUSINESS_INFO.established}.`,

  // Open Graph
  ogImage: "/og-image.jpg", // Will be created
  ogImageAlt: `${BUSINESS_INFO.brandName} - Pintura Electrostática`,
  ogType: "website",

  // Twitter
  twitterCard: "summary_large_image",
  twitterSite: undefined, // Add when Twitter account is available

  // Theme
  themeColor: "#ea580c", // orange-600 from Tailwind config
  backgroundColor: "#ffffff",
} as const;

// Routes Configuration
export const ROUTES = {
  home: {
    path: "/",
    name: "Inicio",
    nameEN: "Home",
  },
  // Add more routes as they are created
} as const;

// SEO Meta Tags
export const DEFAULT_KEYWORDS = [
  "pintura electrostática",
  "powder coating",
  "acabados industriales",
  "Monterrey",
  "Nuevo León",
  "ISO 9001",
  "granallado",
  "shot blast",
  "pintura en polvo",
  "recubrimientos",
  "calidad industrial",
] as const;

// Structured Data Constants
export const SCHEMA_CONTEXT = "https://schema.org";

export const ORGANIZATION_TYPE = {
  main: "Organization",
  local: "LocalBusiness",
} as const;

// Image Specifications
export const OG_IMAGE_SPECS = {
  width: 1200,
  height: 630,
  type: "image/jpeg",
} as const;

export const TWITTER_IMAGE_SPECS = {
  width: 1200,
  height: 630,
  type: "image/jpeg",
} as const;

// Robots Configuration
export const ROBOTS_CONFIG = {
  production: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  development: {
    index: false,
    follow: false,
  },
} as const;

// Helper to determine if we're in production
export const isProduction = () => {
  return import.meta.env.PROD;
};

// Get canonical URL for a path
export const getCanonicalUrl = (path: string = "") => {
  const baseUrl = SITE_CONFIG.url;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

// Get absolute URL for an asset
export const getAbsoluteUrl = (path: string) => {
  if (path.startsWith("http")) return path;
  const baseUrl = SITE_CONFIG.url;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};
