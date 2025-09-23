import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Thermometer, Microscope, Truck } from "lucide-react";
import batchOvenImage from "@/assets/facility-batch-oven.jpg";
import curingOvenImage from "@/assets/facility-curing-oven.jpg";
import qualityControlImage from "@/assets/facility-quality-control.jpg";
import shippingAreaImage from "@/assets/facility-shipping-area.jpg";
const Facilities = () => {
  const facilities = [{
    title: "Horno de Batch",
    description: "Horno de lotes de alta capacidad para el procesamiento eficiente de grandes volúmenes de piezas con control preciso de temperatura.",
    image: batchOvenImage,
    icon: Factory,
    specs: ["Capacidad: 500kg", "Temperatura: hasta 220°C", "Control automático", "Eficiencia energética"]
  }, {
    title: "Horno de Curado",
    description: "Sistema de curado continuo con tecnología avanzada que garantiza el acabado perfecto de la pintura electrostática.",
    image: curingOvenImage,
    icon: Thermometer,
    specs: ["Curado uniforme", "Control de temperatura", "Sistema continuo", "Tecnología avanzada"]
  }, {
    title: "Área de Secado e Inspección",
    description: "Zona especializada para el secado controlado y inspección de calidad, asegurando que cada pieza cumpla con nuestros altos estándares.",
    image: qualityControlImage,
    icon: Microscope,
    specs: ["Secado controlado", "Inspección rigurosa", "Control de calidad", "Certificación de procesos"]
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instalaciones modernas equipadas con la más alta tecnología para 
            garantizar la calidad y eficiencia en todos nuestros procesos
          </p>
        </div>

        {/* Main Facilities Gallery */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
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
                  
                </CardHeader>
                
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