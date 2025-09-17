import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Shield } from "lucide-react";
const AboutUs = () => {
  return <section id="nosotros" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Quiénes somos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una empresa comprometida con la excelencia y la innovación en el sector 
            de acabados industriales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <Card className="card-hover card-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading">Visión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser la empresa líder en pintura electrostática, reconocida por nuestros 
                clientes y comprometida con el medio ambiente. Buscamos establecer el 
                estándar de excelencia en nuestra industria a través de la innovación 
                continua y prácticas sostenibles.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="card-hover card-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading">Misión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecer el mejor servicio de pintura electrostática siendo un proveedor 
                confiable y competitivo. Nos comprometemos a superar las expectativas 
                de nuestros clientes mediante la entrega de soluciones de alta calidad 
                y un servicio excepcional.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Nuestros valores</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2">Calidad</h4>
              <p className="text-sm text-muted-foreground">
                Compromiso inquebrantable con los más altos estándares de calidad en 
                todos nuestros procesos y servicios.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2">Innovación</h4>
              <p className="text-sm text-muted-foreground">
                Búsqueda constante de nuevas tecnologías y métodos para mejorar 
                nuestros servicios y procesos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2">Servicio</h4>
              <p className="text-sm text-muted-foreground">
                Dedicación total a satisfacer las necesidades de nuestros clientes 
                con un servicio personalizado y eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;