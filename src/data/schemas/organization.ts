/**
 * Organization Schema (JSON-LD) for Acabados Adher
 * Schema.org/Organization structured data
 */

import { BUSINESS_INFO, getSchemaAddress } from "../business-info";
import { SITE_CONFIG, getAbsoluteUrl } from "@/lib/constants";
import type { WithContext, Organization } from "schema-dts";

export const organizationSchema = (): WithContext<Organization> => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}#organization`,
    name: BUSINESS_INFO.legalName,
    alternateName: BUSINESS_INFO.brandName,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: getAbsoluteUrl("/adher-logo.png"),
      width: "674",
      height: "auto",
    },
    image: getAbsoluteUrl(SITE_CONFIG.ogImage),
    description: SITE_CONFIG.defaultDescription,
    email: BUSINESS_INFO.contact.emails.sales,
    telephone: BUSINESS_INFO.contact.phones.mainInternational,
    address: getSchemaAddress("mainOffice"),
    foundingDate: BUSINESS_INFO.established.toString(),
    slogan: BUSINESS_INFO.tagline,

    // Contact points
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.contact.phones.mainInternational,
        contactType: "customer service",
        areaServed: "MX",
        availableLanguage: ["Spanish", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.contact.phones.secondaryInternational,
        contactType: "sales",
        areaServed: "MX",
        availableLanguage: ["Spanish", "English"],
      },
    ],

    // Service area
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS_INFO.locations.mainOffice.coordinates.latitude,
        longitude: BUSINESS_INFO.locations.mainOffice.coordinates.longitude,
      },
      geoRadius: "100000", // 100km radius
    },

    // Services offered
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
  };
};
