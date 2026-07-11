import { MapPin, Maximize, BedDouble, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';

export default function FeaturedProperties() {
  return (
    <section className="py-24 bg-gray-50" id="propiedades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Propiedades Destacadas</h2>
            <p className="text-gray-500 text-lg">Explorá nuestra selección de las mejores propiedades disponibles en el mercado, pensadas para tu estilo de vida.</p>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-6 md:mt-0 text-gold font-medium hover:text-gold-light transition-colors flex items-center group"
          >
            Nueva Búsqueda
            <span className="ml-2 transform group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.filter(p => p.tag === 'Destacado' || p.tag === 'Premium' || p.id <= 3).slice(0, 6).map((property) => (
            <Link to={`/propiedad/${property.id}`} key={property.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block">
              <div className="relative h-64 overflow-hidden">
                {property.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-gold text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {property.tag}
                  </div>
                )}
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <span className="text-white font-bold text-2xl">{property.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1 text-gold flex-shrink-0" />
                  {property.location}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-6 line-clamp-1 group-hover:text-gold transition-colors">{property.title}</h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-gray-500 text-sm">
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-2 opacity-70" />
                    <span>{property.sqm} m²</span>
                  </div>
                  <div className="flex items-center">
                    <BedDouble className="w-4 h-4 mr-2 opacity-70" />
                    <span>{property.rooms} Amb</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-2 opacity-70" />
                    <span>{property.baths} Baños</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
