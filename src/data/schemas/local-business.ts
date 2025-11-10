/**
 * LocalBusiness Schema (JSON-LD) for Acabados Adher
 * Schema.org/LocalBusiness structured data
 */

import { BUSINESS_INFO, getSchemaAddress, getOpeningHours } from "../business-info";
import { SITE_CONFIG, getAbsoluteUrl } from "@/lib/constants";
import type { WithContext, LocalBusiness } from "schema-dts";

export const localBusinessSchema = (): WithContext<LocalBusiness> => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}#localbusiness`,
    name: BUSINESS_INFO.legalName,
    alternateName: BUSINESS_INFO.brandName,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: getAbsoluteUrl("/adher-logo.png"),
      width: "674",
      height: "auto",
    },
    image: [getAbsoluteUrl(SITE_CONFIG.ogImage)],
    description: SITE_CONFIG.defaultDescription,
    slogan: BUSINESS_INFO.tagline,

    // Contact Information
    email: BUSINESS_INFO.contact.emails.sales,
    telephone: BUSINESS_INFO.contact.phones.mainInternational,

    // Additional contact methods
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_INFO.contact.phones.mainInternational,
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["Spanish", "English"],
    },

    // Physical Address
    address: {
      "@type": "PostalAddress" as const,
      streetAddress: BUSINESS_INFO.locations.mainOffice.street,
      addressLocality: BUSINESS_INFO.locations.mainOffice.city,
      addressRegion: BUSINESS_INFO.locations.mainOffice.stateCode,
      postalCode: BUSINESS_INFO.locations.mainOffice.postalCode,
      addressCountry: BUSINESS_INFO.locations.mainOffice.countryCode,
    },

    // Geographic coordinates
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.locations.mainOffice.coordinates.latitude,
      longitude: BUSINESS_INFO.locations.mainOffice.coordinates.longitude,
    },

    // Opening hours
    openingHoursSpecification: getOpeningHours(),

    // Price range (adjust as needed)
    priceRange: "$$",

    // Area served
    areaServed: [
      {
        "@type": "City",
        name: "Monterrey",
      },
      {
        "@type": "State",
        name: "Nuevo León",
      },
      {
        "@type": "Country",
        name: "México",
      },
    ],

    // Services
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Acabados Industriales",
      itemListElement: BUSINESS_INFO.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
        position: index + 1,
      })),
    },

    // Same as relationship (if plant address is public-facing)
    subOrganization: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.locations.plant.name,
      address: {
        "@type": "PostalAddress" as const,
        streetAddress: BUSINESS_INFO.locations.plant.street,
        addressLocality: BUSINESS_INFO.locations.plant.city,
        addressRegion: BUSINESS_INFO.locations.plant.stateCode,
        postalCode: BUSINESS_INFO.locations.plant.postalCode,
        addressCountry: BUSINESS_INFO.locations.plant.countryCode,
      },
    },
  };
};
