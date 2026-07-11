import { useState, useEffect } from 'react';
import { Menu, X, Home, Building } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Propiedades', href: '/buscar' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
  ];

  // En móvil abierto, la barra debe ser transparente para fundirse con el fondo oscuro, sin gradiente oscuro.
  const navClasses = `fixed w-full z-[70] transition-all duration-500 ${
    isMobileMenuOpen
      ? 'bg-transparent py-5'
      : isScrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3 md:py-5'
      : 'bg-gradient-to-b from-black/50 to-transparent py-5 md:py-8'
  }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 cursor-pointer group z-[70]">
              <Home className={`w-7 h-7 lg:w-8 lg:h-8 transition-colors duration-300 ${isScrolled && !isMobileMenuOpen ? 'text-charcoal group-hover:text-gold' : 'text-white group-hover:text-gold'}`} />
              <span className={`text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-300 ${isScrolled && !isMobileMenuOpen ? 'text-charcoal' : 'text-white'}`}>
                T<span className="text-gold">&</span>T <span className="font-light">Inmobiliaria</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`relative py-2 text-sm lg:text-base font-medium transition-colors group tracking-wide ${isScrolled ? 'text-gray-700 hover:text-gold' : 'text-gray-200 hover:text-white'}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gold transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 ${isScrolled ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                </Link>
              ))}
              
              <div className="pl-6 lg:pl-8 border-l border-gray-300/30">
                <a href="https://wa.me/5491100000000?text=Hola,%20quisiera%20tasar%20mi%20propiedad" target="_blank" rel="noopener noreferrer" className={`flex items-center px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl ${isScrolled ? 'bg-gold hover:bg-gold-light text-white shadow-gold/20' : 'bg-white text-charcoal hover:bg-gold hover:text-white border border-transparent'}`}>
                  <Building className="w-4 h-4 mr-2" />
                  Tasar Propiedad
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center z-[70]">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className={`p-1 transition-colors ${isScrolled && !isMobileMenuOpen ? 'text-charcoal' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X size={32} className="transform rotate-90 transition-transform duration-300" /> : <Menu size={32} className="transition-transform duration-300" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* UX/UI Luxury Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-charcoal flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col flex-1 px-8 pt-32 pb-12 overflow-y-auto">
          {/* Minimalist Typography Links */}
          <div className="flex flex-col space-y-8 mt-8">
            {navLinks.map((item, index) => (
              <Link 
                key={item.name} 
                to={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-light text-white tracking-wide transition-all duration-500 hover:text-gold ${
                  isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${isMobileMenuOpen ? 200 + index * 100 : 0}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Elegant Bottom Section */}
          <div 
            className={`mt-auto pt-16 flex flex-col items-start transition-all duration-700 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${isMobileMenuOpen ? 600 : 0}ms` }}
          >
            <a href="https://wa.me/5491100000000?text=Hola,%20quisiera%20tasar%20mi%20propiedad" target="_blank" rel="noopener noreferrer" className="bg-gold text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm mb-12 shadow-[0_0_20px_rgba(212,175,55,0.3)] inline-block text-center text-decoration-none">
              Tasar Propiedad
            </a>
            
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Línea Directa</span>
              <a href="tel:08001234567" className="text-xl font-light text-white">0800 123 4567</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
