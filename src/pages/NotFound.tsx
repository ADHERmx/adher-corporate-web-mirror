import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/seo";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="404 — Página no encontrada"
        description="La página que buscas no existe. Regresa a la página principal de Acabados Adher para encontrar nuestros servicios de pintura electrostática."
        canonical="/"
        noindex
        nofollow
      />

      <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-heading font-bold text-primary">404</h1>
          <p className="mb-2 text-2xl md:text-3xl font-semibold text-foreground">Página no encontrada</p>
          <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Button asChild size="lg" className="bg-gradient-orange hover:bg-gradient-orange/90">
            <a href="/">Volver al Inicio</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
