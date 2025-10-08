import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Grip, Package, Clock, CheckCircle, Wrench, Flame, Shield, Sparkles } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Palette,
    title: "Pintura en Polvo",
    description: "Amplia variedad de metales, texturas y colores para satisfacer cualquier necesidad de acabado industrial.",
    features: ["Múltiples texturas", "Amplia gama de colores", "Diferentes tipos de metal", "Acabados personalizados"]
  }, {
    icon: Grip,
    title: "Granallado/Shot Blast",
    description: "Preparación de superficies mediante granallado para garantizar la mejor adherencia y calidad del acabado.",
    features: ["Limpieza profunda", "Preparación óptima", "Mejor adherencia", "Acabado duradero"]
  }, {
    icon: Package,
    title: "Empaque Especializado",
    description: "Servicios de empaque profesional que protegen sus productos durante el transporte y almacenamiento.",
    features: ["Protección garantizada", "Empaque personalizado", "Materiales de calidad", "Proceso cuidadoso"]
  }, {
    icon: Clock,
    title: "Just In Time",
    description: "Entregas programadas según sus necesidades de producción para optimizar su cadena de suministro. Servicio disponible en horario diurno y nocturno.",
    features: ["Entregas puntuales", "Horario diurno y nocturno", "Logística optimizada", "Reducción de inventarios"]
  }, {
    icon: CheckCircle,
    title: "Aseguramiento de Calidad",
    description: "Pruebas de adherencia cuadrática, impacto, flexibilidad, dureza, curado, cámara salina, brillo y colorimetría.",
    features: ["Pruebas especializadas", "Control riguroso", "Certificación de procesos", "Trazabilidad completa"]
  }, {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description: "Servicios de mantenimiento para equipos de pintura y sistemas de acabados industriales.",
    features: ["Mantenimiento programado", "Diagnósticos precisos", "Reparaciones especializadas", "Optimización de equipos"]
  }, {
    icon: Flame,
    title: "Quemado de Piezas",
    description: "Ofrecemos servicios de quemado de piezas, racks, ganchos metálicos por medio de un horno de pirólisis.",
    features: ["Horno de pirólisis", "Limpieza profunda", "Recuperación de piezas", "Proceso eficiente"]
  }];
  return <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Soluciones integrales de acabados</h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className="card-hover card-shadow group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-orange rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              ¿Necesita una cotización personalizada?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Nuestro equipo de expertos está listo para ayudarle con sus proyectos
            </p>
            <button onClick={() => {
            const element = document.getElementById('contacto');
            if (element) element.scrollIntoView({
              behavior: "smooth"
            });
          }} className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;