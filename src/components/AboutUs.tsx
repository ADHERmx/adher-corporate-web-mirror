import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Shield } from "lucide-react";
const AboutUs = () => {
  return <section id="nosotros" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Quiénes somos</h2>
          
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
              <p className="text-muted-foreground leading-relaxed">Ser la empresa líder en la aplicación de pintura electrostática, con el reconocimiento de nuestros clientes y el compromiso de mantener la calidad y el cuidado del medio ambiente.</p>
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
              <p className="text-muted-foreground leading-relaxed">Proporcionar a nuestros clientes el mejor servicio con la seguridad de que cuentan con un proveedor confiable que se preocupa por mantener los recursos humanos, materiales y técnicos necesarios que nos permiten ser competitivos.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutUs;