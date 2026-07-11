import { useState, useEffect } from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import CustomSelect from './CustomSelect';

export default function PropertySearch({ onSearch, initialFilters = {} }) {
  const [location, setLocation] = useState(initialFilters.location || '');
  const [type, setType] = useState(initialFilters.type || '');
  const [operation, setOperation] = useState(initialFilters.operation || 'Comprar');

  useEffect(() => {
    if (initialFilters.location !== undefined) setLocation(initialFilters.location);
    if (initialFilters.type !== undefined) setType(initialFilters.type);
    if (initialFilters.operation !== undefined) setOperation(initialFilters.operation);
  }, [initialFilters.location, initialFilters.type, initialFilters.operation]);

  const propertyTypes = [
    { value: '', label: 'Cualquiera' },
    { value: 'Casa', label: 'Casa' },
    { value: 'Departamento', label: 'Departamento' },
    { value: 'PH', label: 'PH' },
    { value: 'Loft', label: 'Loft' },
  ];

  const handleSearchClick = () => {
    onSearch({ operation, location, type });
    
    const propertiesSection = document.getElementById('propiedades');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-charcoal pt-32 pb-12 relative z-20 shadow-2xl" id="buscador">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Encontrá tu propiedad ideal</h2>
          <p className="text-gray-400">Filtrá por ubicación, tipo y presupuesto para descubrir las mejores opciones.</p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          {/* Operation Toggle (Comprar / Alquilar) */}
          <div className="flex justify-center mb-4">
            <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 shadow-lg">
              {['Comprar', 'Alquilar'].map((op) => (
                <button
                  key={op}
                  onClick={() => setOperation(op)}
                  className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    operation === op 
                      ? 'bg-white text-charcoal shadow-md scale-105' 
                      : 'text-white hover:text-gold'
                  }`}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>

          <div className="relative z-50 flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full overflow-visible shadow-xl">
            
            {/* Tipo de Propiedad (Custom Select) */}
            <div className="flex items-center w-full md:w-1/3 md:h-[72px] border-b md:border-b-0 md:border-r border-gray-100">
              <CustomSelect 
                value={type}
                onChange={setType}
                options={propertyTypes}
                placeholder="Tipo de Propiedad"
                icon={Home}
              />
            </div>

            {/* Ubicación */}
            <div className="flex items-center w-full md:flex-1 px-6 py-4 md:py-0 md:h-[72px]">
              <MapPin className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Ubicación (ej. Palermo)" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent outline-none text-charcoal placeholder-gray-400 font-medium" 
              />
            </div>

            <button 
              onClick={handleSearchClick}
              className="w-full md:w-auto bg-gold hover:bg-gold-light text-white px-10 py-4 md:py-0 md:m-2 rounded-b-2xl md:rounded-full transition-colors flex items-center justify-center group flex-shrink-0 md:min-h-[56px]"
            >
              <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">Buscar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
