import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Globe, Clock, Send, MessageSquare } from "lucide-react";
const Contact = () => {
  return <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contáctanos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Hablemos de tu Proyecto
          </h2>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Nuestras Ubicaciones</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <div className="font-medium text-foreground mb-1">Oficinas Generales</div>
                    <p>Amado Nervo 2910 Norte</p>
                    <p>Col. Bella Vista</p>
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Planta</div>
                    <p>Amado Nervo 2902 Norte</p>
                    <p>Col. Bella Vista</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Teléfonos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <div className="font-medium">Oficinas Generales:</div>
                    <div className="text-muted-foreground">(81) 83 514881</div>
                    <div className="text-muted-foreground">(81) 81150184</div>
                  </div>
                  <div>
                    
                    <div className="text-muted-foreground">(81) 84005241</div>
                    <div className="text-muted-foreground">(81) 83514881</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Correos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <div className="font-medium">Oficinas Generales:</div>
                    <div className="text-muted-foreground">adher@webtelmex.net.mx</div>
                  </div>
                  <div>
                    
                    <div className="text-muted-foreground">flopez@adher.com.mx</div>
                    <div className="text-muted-foreground">mlecuona@adher.com.mx</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <Globe className="w-5 h-5 text-primary" />
                    <span>Sitio Web</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="https://www.adher.com.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.adher.com.mx
                  </a>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Horarios</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <div>Lun - Vie: 7:00 - 18:00</div>
                  <div>Sábado: 8:00 - 14:00</div>
                  <div>Domingo: Cerrado</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Envíanos un Mensaje</CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre *</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Empresa</label>
                    <Input placeholder="Nombre de tu empresa" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono *</label>
                    <Input placeholder="+52 (55) 1234-5678" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Servicio de Interés</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Selecciona un servicio</option>
                    <option value="pintura-polvo">Pintura en Polvo</option>
                    <option value="granallado">Granallado/Shot Blast</option>
                    <option value="empaque">Empaque</option>
                    <option value="just-in-time">Just In Time</option>
                    <option value="calidad">Aseguramiento de Calidad</option>
                    <option value="cotizacion">Cotización General</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensaje *</label>
                  <Textarea placeholder="Describe tu proyecto o consulta..." rows={4} />
                </div>

                <Button className="w-full bg-gradient-orange hover:bg-gradient-orange/90 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obligatorios. Nos comprometemos a proteger tu privacidad y 
                  responder en un plazo máximo de 24 horas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;