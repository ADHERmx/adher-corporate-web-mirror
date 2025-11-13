import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Calendar, Clock } from "lucide-react";
import heroImage from "@/assets/hero-background-new.jpg";
import adherLogo from "@/assets/adher-logo-white-paint.png";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="inicio" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Pintura electrostática en polvo - Acabados Adher" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div>
          <Badge className="bg-primary/20 text-primary-foreground border-primary/30 mb-6">
            <Award className="w-4 h-4 mr-2" />
            Certificación ISO 9001:2008
          </Badge>
          
          <div className="flex justify-center mb-8">
            <img
              src={adherLogo}
              alt="Acabados Adher"
              className="w-full max-w-2xl h-auto animate-fade-in"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Pioneros en Pintura Electrostática desde 1978
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">Empresa líder en servicio de aplicación de pintura electrostática. Sirviendo a la industria metal mecánica general, con amplia experiencia en electrodomésticos, arquitectura, mueblería, automotríz, entre otros segmentos. Ubicado estratégicamente en el centro de Monterrey, Nuevo León</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button size="lg" className="bg-gradient-orange hover:bg-gradient-orange/90 text-white shadow-orange" onClick={() => scrollToSection('servicios')}>
              Ver Servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacto')} className="border-white/30 bg-zinc-200 hover:bg-zinc-100 text-zinc-950 text-sm">
              Contactar Ahora
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto py-8">
            <div className="flex items-center space-x-3 text-white justify-center md:justify-start">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">45+</div>
                <div className="text-sm text-gray-300">Años de experiencia</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white justify-center md:justify-start">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-300">Entregas diurnas y nocturnas</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white justify-center md:justify-start">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-sm text-gray-300">Certificación 9001:2008</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;