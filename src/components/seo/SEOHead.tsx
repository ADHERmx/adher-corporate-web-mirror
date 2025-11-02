/**
 * SEOHead Component
 * Comprehensive SEO meta tags manager using react-helmet-async
 */

import { Helmet } from "react-helmet-async";
import {
  generateTitle,
  generateDescription,
  generateCanonical,
  generateOpenGraph,
  generateTwitterCard,
  generateHreflangLinks,
  generateRobotsValue,
  generateGoogleBotValue,
  generateGeoTags,
  formatKeywords,
  type SEOProps,
} from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Main SEO Head component
 * Manages all meta tags, Open Graph, Twitter Cards, hreflang, and geo tags
 */
export const SEOHead = (props: SEOProps) => {
  const title = generateTitle(props.title);
  const description = generateDescription(props.description);
  const canonical = generateCanonical(props.canonical);
  const og = generateOpenGraph(props);
  const twitter = generateTwitterCard(props);
  const hreflangLinks = generateHreflangLinks(props.canonical);
  const robots = generateRobotsValue(props.noindex, props.nofollow);
  const googleBot = generateGoogleBotValue();
  const geo = generateGeoTags();
  const keywords = formatKeywords(props.keywords);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Language and Locale */}
      <html lang={SITE_CONFIG.localeISO} />

      {/* Robots */}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={googleBot} />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content={geo.region} />
      <meta name="geo.placename" content={geo.placename} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:image" content={og.image} />
      <meta property="og:image:alt" content={og.imageAlt} />
      <meta property="og:locale" content={og.locale} />
      <meta property="og:site_name" content={og.siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      <meta name="twitter:image" content={twitter.image} />
      <meta name="twitter:image:alt" content={twitter.imageAlt} />
      {twitter.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter.creator && <meta name="twitter:creator" content={twitter.creator} />}

      {/* Hreflang Links */}
      {hreflangLinks.map((link) => (
        <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} />
      ))}

      {/* Theme Color */}
      <meta name="theme-color" content={SITE_CONFIG.themeColor} />
      <meta name="msapplication-TileColor" content={SITE_CONFIG.themeColor} />

      {/* Additional Meta Tags */}
      <meta name="author" content={SITE_CONFIG.fullName} />
    </Helmet>
  );
};
