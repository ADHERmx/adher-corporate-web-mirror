import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import adherLogo from "@/assets/adher-logo.png";
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
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
              <img src={adherLogo} alt="Adher Logo" className="w-full h-full object-contain" />
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-heading font-semibold">Acabados Adher, S.A. de C</h1>
              <p className="text-xs text-muted-foreground">S.A. de C.V.</p>
            </div>
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
              <span>+52 (55) 1234-5678</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail size={16} className="text-primary" />
              <span>info@adher.com.mx</span>
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