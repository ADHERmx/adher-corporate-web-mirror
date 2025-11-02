/**
 * BreadcrumbList Schema (JSON-LD)
 * Schema.org/BreadcrumbList structured data
 */

import { getCanonicalUrl } from "@/lib/constants";
import type { WithContext, BreadcrumbList } from "schema-dts";
import type { BreadcrumbItem } from "@/lib/seo";

export const breadcrumbSchema = (items: BreadcrumbItem[]): WithContext<BreadcrumbList> => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: getCanonicalUrl(item.url),
    })),
  };
};

/**
 * Generate breadcrumbs for homepage
 */
export const homeBreadcrumbs = (): BreadcrumbItem[] => {
  return [
    {
      name: "Inicio",
      url: "/",
      position: 1,
    },
  ];
};

/**
 * Generate breadcrumbs for a page with hierarchy
 * Example: Home > About > Team
 */
export const generateBreadcrumbs = (
  currentPageName: string,
  currentPageUrl: string,
  parents: Array<{ name: string; url: string }> = []
): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: "Inicio",
      url: "/",
      position: 1,
    },
  ];

  // Add parent pages
  parents.forEach((parent, index) => {
    breadcrumbs.push({
      name: parent.name,
      url: parent.url,
      position: index + 2,
    });
  });

  // Add current page
  breadcrumbs.push({
    name: currentPageName,
    url: currentPageUrl,
    position: breadcrumbs.length + 1,
  });

  return breadcrumbs;
};
