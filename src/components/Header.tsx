import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import adherLogo from "@/assets/adher-logo-color-new.png";
import { BUSINESS_INFO } from "@/data/business-info";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={adherLogo} alt="Adher Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-foreground hover:text-primary transition-colors">
              Quiénes Somos
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-foreground hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('instalaciones')} className="text-foreground hover:text-primary transition-colors">
              Instalaciones
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-foreground hover:text-primary transition-colors">
              Contacto
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone size={16} className="text-primary" />
              <span>{BUSINESS_INFO.contact.phones.main}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail size={16} className="text-primary" />
              <span>{BUSINESS_INFO.contact.emails.sales}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-foreground hover:text-primary transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-left text-foreground hover:text-primary transition-colors">
                Quiénes Somos
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-left text-foreground hover:text-primary transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('instalaciones')} className="text-left text-foreground hover:text-primary transition-colors">
                Instalaciones
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-left text-foreground hover:text-primary transition-colors">
                Contacto
              </button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;