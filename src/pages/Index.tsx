import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Facilities from "@/components/Facilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SEOHead, JsonLd } from "@/components/seo";
import { organizationSchema } from "@/data/schemas/organization";
import { localBusinessSchema } from "@/data/schemas/local-business";
import { breadcrumbSchema, homeBreadcrumbs } from "@/data/schemas/breadcrumbs";
import { DEFAULT_KEYWORDS } from "@/lib/constants";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <SEOHead
        title="Pioneros en Pintura Electrostática desde 1978"
        description="Empresa líder en pintura electrostática en polvo. Certificación ISO 9001:2008. Servicios de acabados industriales, granallado y empaque especializado. Monterrey, Nuevo León."
        canonical="/"
        keywords={[...DEFAULT_KEYWORDS]}
      />

      {/* Structured Data (JSON-LD) */}
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema(homeBreadcrumbs())} />

      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;