/**
 * JsonLd Component
 * Renders JSON-LD structured data for SEO
 */

import { Helmet } from "react-helmet-async";
import type { Thing, WithContext } from "schema-dts";

interface JsonLdProps {
  data: WithContext<Thing>;
}

/**
 * Component to inject JSON-LD structured data into the page head
 */
export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

/**
 * Utility to safely stringify JSON-LD data
 */
export const stringifyJsonLd = (data: WithContext<Thing>): string => {
  return JSON.stringify(data, null, 0);
};
