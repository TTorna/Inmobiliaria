import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Maximize, BedDouble, Bath, ArrowLeft, Check, Phone, Mail, User, Shield, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { properties } from '../data/properties';
import { useEffect, useState } from 'react';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === parseInt(id, 10));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-charcoal mb-4">Propiedad no encontrada</h1>
        <button onClick={() => navigate('/')} className="text-gold font-bold hover:underline flex items-center">
          <ArrowLeft className="w-5 h-5 mr-2" /> Volver al inicio
        </button>
      </div>
    );
  }

  // Combinar la imagen principal con la galería para el carrusel
  const allImages = [property.image, ...(property.gallery || [])];

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Premium Hero Header with Carousel */}
      <div className="relative h-[75vh] min-h-[600px] w-full flex items-end group overflow-hidden">
        <img 
          key={currentImageIndex}
          src={allImages[currentImageIndex]} 
          alt={`${property.title} - Foto ${currentImageIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover animate-fade-in-up cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        {/* Gradient overlays for readability - Made lighter */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent z-10 pointer-events-none"></div>
        
        {/* Enlarge Icon hint (Desktop Hover) */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-charcoal/50 backdrop-blur-md p-4 rounded-full text-white">
            <ZoomIn className="w-8 h-8" />
          </div>
        </div>

        {/* Persistent 'Ver Galeria' Badge (Clearer for mobile) */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="absolute top-24 right-4 md:top-auto md:bottom-32 md:right-8 lg:bottom-24 lg:right-12 z-30 flex items-center bg-black/40 backdrop-blur-md text-white text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full cursor-pointer hover:bg-black/60 transition-colors shadow-lg border border-white/20"
        >
          <ZoomIn className="w-4 h-4 mr-1.5 md:mr-2" />
          Ver Galería ({allImages.length})
        </div>

        {/* Carousel Controls */}
        {allImages.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-gold backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-gold backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/20"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-12 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
              {allImages.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-gold w-4 md:w-6' : 'bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Back Button */}
        <div className="absolute top-24 md:top-28 left-4 md:left-12 z-30">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-white bg-white/10 hover:bg-gold backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 rounded-full transition-all duration-300 text-xs md:text-base font-medium border border-white/20 shadow-lg hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" /> 
            Volver
          </button>
        </div>

        {/* Hero Content - Reduced Text Sizes */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-20 pointer-events-none">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-gold text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
                {property.operation}
              </span>
              {property.tag && (
                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                  {property.tag}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-md">
              {property.title}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center text-gray-200 text-base md:text-lg gap-3 md:gap-6 drop-shadow-md">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-1.5 text-gold" />
                {property.location}
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold"></div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                {property.price}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal (Lightbox) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm">
          {/* Close Button */}
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Controls */}
          {allImages.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}

          {/* Image */}
          <img 
            key={`modal-${currentImageIndex}`}
            src={allImages[currentImageIndex]} 
            alt={`${property.title} - Ampliada`}
            className="max-w-[90vw] max-h-[90vh] object-contain animate-fade-in-up"
          />
          
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-widest bg-black/50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {allImages.length}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Property Details */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            
            {/* Highlights Bar */}
            <div className="grid grid-cols-3 gap-2 md:gap-6 bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex flex-col items-center justify-center p-2 md:p-4 text-center border-r border-gray-100">
                <div className="bg-gold/10 p-3 md:p-4 rounded-full mb-2 md:mb-3">
                  <Maximize className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                </div>
                <span className="text-xl md:text-2xl font-bold text-charcoal">{property.sqm}</span>
                <span className="text-gray-500 text-xs md:text-base font-medium">Metros</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 md:p-4 text-center border-r border-gray-100">
                <div className="bg-gold/10 p-3 md:p-4 rounded-full mb-2 md:mb-3">
                  <BedDouble className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                </div>
                <span className="text-xl md:text-2xl font-bold text-charcoal">{property.rooms}</span>
                <span className="text-gray-500 text-xs md:text-base font-medium">Ambientes</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 md:p-4 text-center">
                <div className="bg-gold/10 p-3 md:p-4 rounded-full mb-2 md:mb-3">
                  <Bath className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                </div>
                <span className="text-xl md:text-2xl font-bold text-charcoal">{property.baths}</span>
                <span className="text-gray-500 text-xs md:text-base font-medium">Baños</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">Descripción del Inmueble</h3>
                <div className="ml-4 md:ml-6 flex-grow h-px bg-gray-200"></div>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>
            
            {/* Features */}
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">Características y Amenities</h3>
                <div className="ml-4 md:ml-6 flex-grow h-px bg-gray-200"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {['Apto Profesional', 'Muy Luminoso', 'Seguridad 24hs', 'Balcón Terrazado', 'Cochera Incluida', 'Aire Acondicionado', 'SUM', 'Piscina', 'Parrilla'].map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-700 font-medium text-sm md:text-base">
                    <div className="bg-gold p-1.5 rounded-lg mr-3 md:mr-4 text-white shadow-md shadow-gold/30">
                      <Check className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Contact Sidebar */}
          <div className="lg:col-span-4" id="contacto-form">
            <div className="sticky top-28 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Sidebar Header */}
              <div className="bg-charcoal p-6 md:p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <h4 className="text-white text-xl font-bold relative z-10">Agendar una visita</h4>
                <p className="text-gray-400 text-sm mt-2 relative z-10">Contactá a un asesor de T&T</p>
              </div>

              {/* Sidebar Body */}
              <div className="p-6 md:p-8">
                {/* Agent Info */}
                <div className="flex items-center mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gray-100">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-full overflow-hidden mr-4 border-2 border-gold p-1 flex-shrink-0">
                    <img src="https://ui-avatars.com/api/?name=Asesor+T%26T&background=d4af37&color=fff&size=128" alt="Agente" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-base md:text-lg">Asesor Destacado</div>
                    <div className="flex items-center text-xs md:text-sm text-gray-500 mt-1">
                      <Shield className="w-3 h-3 md:w-4 md:h-4 text-gold mr-1" />
                      Agente Verificado
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-4 md:space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5 md:mb-2">Nombre completo</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="text" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm md:text-base" placeholder="Juan Pérez" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5 md:mb-2">Teléfono</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="tel" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-sm md:text-base" placeholder="+54 11 1234-5678" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5 md:mb-2">Mensaje</label>
                    <textarea rows="3" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none text-sm md:text-base" defaultValue={`Hola, me interesa la propiedad "${property.title}". Quiero más información.`}></textarea>
                  </div>
                  
                  <button type="button" className="w-full bg-gold hover:bg-gold-light text-white font-bold py-3.5 md:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-gold/30 hover:shadow-xl transform hover:-translate-y-1 flex justify-center items-center mt-4 md:mt-6 text-sm md:text-base">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <span className="text-xs md:text-sm text-gray-500">O llamanos directamente al</span>
                  <a href="tel:08001234567" className="block text-charcoal font-bold text-base md:text-lg mt-1 hover:text-gold transition-colors">
                    0800 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Mobile Sticky Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-40 flex items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex-1 truncate pl-2">
          <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block">{property.operation}</span>
          <div className="text-lg font-bold text-charcoal leading-none mt-1 truncate">{property.price}</div>
        </div>
        <button 
          onClick={() => {
            const form = document.getElementById('contacto-form');
            if (form) {
              const y = form.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({top: y, behavior: 'smooth'});
            }
          }} 
          className="bg-gold text-white px-5 py-3 rounded-xl font-bold shadow-md shadow-gold/20 flex items-center flex-shrink-0 ml-4"
        >
          <Mail className="w-4 h-4 mr-2" />
          Contactar
        </button>
      </div>
    </div>
  );
}
