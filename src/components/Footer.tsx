import { Badge } from "@/components/ui/badge";
import { Award, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Acabados Adher</h3>
                <p className="text-sm text-gray-400">S.A. de C.V.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Pioneros en pintura electrostática desde 1978. Calidad, innovación y 
              servicio de excelencia.
            </p>
            <Badge className="bg-primary/20 text-primary-foreground border-primary/30">
              <Award className="w-3 h-3 mr-1" />
              ISO 9001:2008
            </Badge>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Pintura en Polvo
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Granallado/Shot Blast
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Empaque Especializado
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Just In Time
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Control de Calidad
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-primary transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#instalaciones" className="hover:text-primary transition-colors">
                  Instalaciones
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <span>Tlalnepantla, Estado de México</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <span>info@adher.com.mx</span>
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <a 
                  href="https://www.adher.com.mx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.adher.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Acabados Adher S.A. de C.V. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-primary transition-colors">Certificaciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;