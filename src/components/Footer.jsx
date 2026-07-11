import { Home, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gold text-white p-2 rounded-lg">
                <Home size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                T&T Inmobiliaria
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Redefiniendo la experiencia de encontrar tu hogar ideal con tecnología y atención premium.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explorar</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Propiedades en Venta</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Alquileres</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Tasaciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Desarrollos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Nosotros</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Aviso Legal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Av. del Libertador 1234, Piso 5<br/>C1001ABN, Buenos Aires</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-400">+54 11 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-400">contacto@ttinmobiliaria.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} T&T Inmobiliaria. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Diseñado con precisión.
          </p>
        </div>
      </div>
    </footer>
  );
}
