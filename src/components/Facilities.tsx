import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Flame, Microscope, Truck, Grip, Building2 } from "lucide-react";
import curingOvenImage from "@/assets/facility-curing-oven.jpg";
import qualityControlImage from "@/assets/facility-quality-control.jpg";
import shippingAreaImage from "@/assets/facility-shipping-area.jpg";
import monorailLineImage from "@/assets/facility-monorail-line.jpg";
import blastingRoomImage from "@/assets/facility-blasting-room.jpg";
const Facilities = () => {
  const facilities = [{
    title: "Tecnología de Aplicación Continua con Línea en Monorriel",
    description: "Sistema automatizado de última generación para aplicación continua de pintura electrostática.",
    image: monorailLineImage,
    icon: Factory,
    specs: [
      "Túnel de Desengrase con 5 etapas, ofreciendo la mejor tecnología en químicos para maximizar la adherencia de pintura y proteger el metal contra la corrosión",
      "Cabina de aplicación de pintura con cambio de color rápido",
      "Horno de secado y curado de alta eficiencia energética"
    ]
  }, {
    title: "Horno de Quemado de la Más Alta Tecnología",
    description: "Sistema avanzado de pirólisis para limpieza y recuperación de piezas, racks y ganchos metálicos.",
    image: curingOvenImage,
    icon: Flame,
    specs: ["Tecnología de pirólisis", "Limpieza profunda", "Recuperación eficiente", "Control automatizado"]
  }, {
    title: "Cuarto de Granallado GOFF",
    description: "Equipo de granallado GOFF de la más alta tecnología para preparación óptima de superficies.",
    image: blastingRoomImage,
    icon: Grip,
    specs: ["Tecnología GOFF", "Preparación superior", "Limpieza profunda", "Mejor adherencia"]
  }, {
    title: "Laboratorio de Calidad",
    description: "Instalaciones especializadas para pruebas y control de calidad con equipos de última generación.",
    image: qualityControlImage,
    icon: Microscope,
    specs: ["Pruebas especializadas", "Equipos de precisión", "Certificación de procesos", "Control riguroso"]
  }, {
    title: "Área de Embarque",
    description: "Zona logística especializada para el empaque y embarque seguro de productos terminados con control de inventarios y entregas programadas.",
    image: shippingAreaImage,
    icon: Truck,
    specs: ["Logística optimizada", "Empaque especializado", "Control de inventarios", "Entregas programadas"]
  }];
  return <section id="instalaciones" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">
            <Factory className="w-4 h-4 mr-2" />
            Nuestras Instalaciones
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Tecnología de Vanguardia
          </h2>
          
        </div>

        {/* Main Facilities Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => {
          const IconComponent = facility.icon;
          return <Card key={index} className="card-hover card-shadow overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">{facility.title}</CardTitle>
                  <CardDescription>{facility.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {facility.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>;
        })}
        </div>


        {/* Capabilities Overview */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};
export default Facilities;