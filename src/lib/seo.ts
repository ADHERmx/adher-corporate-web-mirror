/**
 * SEO utility functions and TypeScript types for meta tag generation
 */

import { SITE_CONFIG, getCanonicalUrl, getAbsoluteUrl, ROBOTS_CONFIG, isProduction } from "./constants";

// Types for SEO configuration
export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
  noindex?: boolean;
  nofollow?: boolean;
  keywords?: string[];
}

export interface OpenGraphProps {
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  type: string;
  locale: string;
  siteName: string;
}

export interface TwitterCardProps {
  card: "summary" | "summary_large_image" | "app" | "player";
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  site?: string;
  creator?: string;
}

export interface HreflangLink {
  hreflang: string;
  href: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

/**
 * Generate page title with template
 */
export const generateTitle = (pageTitle?: string): string => {
  if (!pageTitle) {
    return SITE_CONFIG.defaultTitle;
  }

  // If the page title already includes the site name, return as is
  if (pageTitle.includes(SITE_CONFIG.name)) {
    return pageTitle;
  }

  return SITE_CONFIG.titleTemplate.replace("%s", pageTitle);
};

/**
 * Generate description with fallback
 */
export const generateDescription = (description?: string): string => {
  return description || SITE_CONFIG.defaultDescription;
};

/**
 * Generate canonical URL
 */
export const generateCanonical = (path?: string): string => {
  return path ? getCanonicalUrl(path) : getCanonicalUrl("/");
};

/**
 * Generate Open Graph meta tags configuration
 */
export const generateOpenGraph = (props: SEOProps): OpenGraphProps => {
  const title = generateTitle(props.title);
  const description = generateDescription(props.description);
  const url = generateCanonical(props.canonical);
  const image = props.image ? getAbsoluteUrl(props.image) : getAbsoluteUrl(SITE_CONFIG.ogImage);
  const imageAlt = props.imageAlt || SITE_CONFIG.ogImageAlt;
  const type = props.type || SITE_CONFIG.ogType;
  const locale = props.locale || SITE_CONFIG.locale;

  return {
    title,
    description,
    url,
    image,
    imageAlt,
    type,
    locale,
    siteName: SITE_CONFIG.name,
  };
};

/**
 * Generate Twitter Card meta tags configuration
 */
export const generateTwitterCard = (props: SEOProps): TwitterCardProps => {
  const title = generateTitle(props.title);
  const description = generateDescription(props.description);
  const image = props.image ? getAbsoluteUrl(props.image) : getAbsoluteUrl(SITE_CONFIG.ogImage);
  const imageAlt = props.imageAlt || SITE_CONFIG.ogImageAlt;

  return {
    card: SITE_CONFIG.twitterCard,
    title,
    description,
    image,
    imageAlt,
    site: SITE_CONFIG.twitterSite,
  };
};

/**
 * Generate hreflang links
 * Only includes es-MX and x-default (no English version)
 */
export const generateHreflangLinks = (path: string = "/"): HreflangLink[] => {
  const canonicalUrl = getCanonicalUrl(path);

  return [
    {
      hreflang: "es-MX",
      href: canonicalUrl,
    },
    {
      hreflang: "x-default",
      href: canonicalUrl,
    },
  ];
};

/**
 * Generate robots meta tag value
 */
export const generateRobotsValue = (noindex?: boolean, nofollow?: boolean): string => {
  const config = isProduction() ? ROBOTS_CONFIG.production : ROBOTS_CONFIG.development;

  const index = noindex === true ? false : config.index;
  const follow = nofollow === true ? false : config.follow;

  const parts: string[] = [];
  parts.push(index ? "index" : "noindex");
  parts.push(follow ? "follow" : "nofollow");

  return parts.join(", ");
};

/**
 * Generate Google Bot specific meta tag value
 */
export const generateGoogleBotValue = (): string => {
  if (!isProduction()) {
    return "noindex, nofollow";
  }

  const config = ROBOTS_CONFIG.production.googleBot;
  const parts: string[] = [];

  parts.push(config.index ? "index" : "noindex");
  parts.push(config.follow ? "follow" : "nofollow");
  parts.push(`max-video-preview:${config["max-video-preview"]}`);
  parts.push(`max-image-preview:${config["max-image-preview"]}`);
  parts.push(`max-snippet:${config["max-snippet"]}`);

  return parts.join(", ");
};

/**
 * Generate geographic meta tags for Monterrey, NL
 */
export const generateGeoTags = () => {
  return {
    region: SITE_CONFIG.region,
    placename: SITE_CONFIG.placename,
  };
};

/**
 * Create breadcrumb list for schema
 */
export const createBreadcrumbs = (items: BreadcrumbItem[]) => {
  return items.map((item) => ({
    "@type": "ListItem",
    position: item.position,
    name: item.name,
    item: getCanonicalUrl(item.url),
  }));
};

/**
 * Format keywords for meta tag
 */
export const formatKeywords = (keywords?: string[]): string | undefined => {
  if (!keywords || keywords.length === 0) return undefined;
  return keywords.join(", ");
};
