/**
 * Sitemap Generator for Acabados Adher Corporate Website
 * Generates sitemap.xml with all routes
 */

import { writeFileSync } from "fs";
import { join } from "path";

// Site configuration
const SITE_URL = "https://www.adher.com.mx";
const OUTPUT_PATH = join(process.cwd(), "public", "sitemap.xml");

// Route definitions
interface RouteConfig {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastmod?: string;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    priority: 1.0,
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  // Add more routes here as the site grows
  // Example:
  // {
  //   path: "/servicios",
  //   priority: 0.8,
  //   changefreq: "monthly",
  // },
];

/**
 * Generate XML sitemap from routes
 */
function generateSitemap(routes: RouteConfig[]): string {
  const urlEntries = routes
    .map((route) => {
      const url = `${SITE_URL}${route.path}`;
      const lastmod = route.lastmod || new Date().toISOString().split("T")[0];

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>`;
}

/**
 * Main function
 */
function main() {
  try {
    console.log("🗺️  Generating sitemap...");

    const sitemap = generateSitemap(routes);
    writeFileSync(OUTPUT_PATH, sitemap, "utf-8");

    console.log(`✅ Sitemap generated successfully!`);
    console.log(`📁 Location: ${OUTPUT_PATH}`);
    console.log(`🔗 URLs included: ${routes.length}`);
    console.log(`\nRoutes:`);
    routes.forEach((route) => {
      console.log(`   - ${SITE_URL}${route.path} (priority: ${route.priority})`);
    });
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

// Run the script
main();
