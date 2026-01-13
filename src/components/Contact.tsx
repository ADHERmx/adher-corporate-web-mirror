import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Globe, Clock, Send, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import equipoAdher from "@/assets/equipo-adher.jpg";
const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("_gotcha")) {
      return;
    }

    try {
      setStatus("sending");
      const response = await fetch("https://formspree.io/f/xbddjplr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
          
          {/* Team Photo */}
          <div className="max-w-4xl mx-auto mt-8">
            <img src={equipoAdher} alt="Equipo Acabados Adher - Nuestro equipo profesional de trabajo" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Nuestra Ubicación</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <div className="font-medium text-foreground mb-1">Oficinas Generales</div>
                    <p>Amado Nervo No. 2916
Col. Bella Vista
64410 Monterrey, N.L.
México</p>
                    
                    
                  </div>
                  <div>
                    
                    
                    
                    
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
                  <a href="tel:8183510648" className="block text-muted-foreground hover:text-primary transition-colors">
                    (81) 8351 0648
                  </a>
                  <a href="tel:8183514881" className="block text-muted-foreground hover:text-primary transition-colors">
                    (81) 8351 4881
                  </a>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <FaWhatsapp className="w-5 h-5 text-primary" />
                    <span>WhatsApp</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="https://wa.me/528119103216" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <FaWhatsapp className="w-4 h-4" />
                    (81) 1910 3216
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Correo</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:ventas@adher.com.mx" className="text-muted-foreground hover:text-primary transition-colors">
                  ventas@adher.com.mx
                </a>
              </CardContent>
            </Card>

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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre *</label>
                      <Input name="nombre" placeholder="Tu nombre completo" required minLength={2} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Empresa</label>
                      <Input name="empresa" placeholder="Nombre de tu empresa" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Teléfono *</label>
                      <Input
                        name="telefono"
                        placeholder="+52 (55) 1234-5678"
                        required
                        pattern="^[+()0-9\\s-]{7,}$"
                        title="Ingresa un teléfono válido."
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input name="email" type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Servicio de Interés</label>
                    <select name="servicio" className="w-full px-3 py-2 border border-input rounded-md bg-background">
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
                    <Textarea name="mensaje" placeholder="Describe tu proyecto o consulta..." rows={4} required minLength={10} />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-orange hover:bg-gradient-orange/90 text-white" disabled={status === "sending"}>
                    <Send className="w-4 h-4 mr-2" />
                    {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>

                {status === "success" && (
                  <p className="text-sm text-green-600 text-center" role="status" aria-live="polite">
                    ¡Gracias! Tu mensaje se envió correctamente. Te contactaremos pronto.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600 text-center" role="status" aria-live="polite">
                    Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </p>
                )}

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
