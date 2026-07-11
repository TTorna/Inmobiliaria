import { useState } from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import CustomSelect from './CustomSelect';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [operation, setOperation] = useState('Comprar');
  const navigate = useNavigate();

  const propertyTypes = [
    { value: '', label: 'Cualquiera' },
    { value: 'Casa', label: 'Casa' },
    { value: 'Departamento', label: 'Departamento' },
    { value: 'PH', label: 'PH' },
    { value: 'Loft', label: 'Loft' },
  ];

  const handleSearchClick = () => {
    const params = new URLSearchParams();
    if (operation) params.append('operation', operation);
    if (location) params.append('location', location);
    if (type) params.append('type', type);
    
    navigate(`/buscar?${params.toString()}`);
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-visible z-10">
      {/* Background Image Placeholder with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Home" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80"></div>
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 animate-fade-in-up">
          Encontrá tu próximo hogar
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up delay-100">
          Descubrí propiedades exclusivas con la mejor atención personalizada del mercado.
        </p>

        {/* Operation Toggle (Comprar / Alquilar) */}
        <div className="flex bg-charcoal/50 backdrop-blur-md rounded-full p-1 mb-4 animate-fade-in-up delay-200 shadow-lg">
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

        {/* Minimalist Search Bar */}
        <div className="relative z-50 w-full max-w-4xl p-2 md:p-3 animate-fade-in-up delay-200">
          {/* Glassmorphism Background layer (separated to prevent backdrop-filter clipping absolute dropdowns) */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl md:rounded-full shadow-2xl pointer-events-none z-0"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center bg-white rounded-xl md:rounded-full overflow-visible">
            
            <div className="flex items-center w-full md:w-1/3 md:h-[60px] border-b md:border-b-0 md:border-r border-gray-100">
              <CustomSelect 
                value={type}
                onChange={setType}
                options={propertyTypes}
                placeholder="Tipo de Propiedad"
                icon={Home}
              />
            </div>

            <div className="flex items-center w-full md:flex-1 px-6 py-4 md:py-0 md:h-[60px]">
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
              className="w-full md:w-auto h-full bg-charcoal hover:bg-gray-800 text-white px-10 py-4 md:py-0 md:m-1 rounded-b-xl md:rounded-full transition-colors flex items-center justify-center group flex-shrink-0 min-h-[52px]"
            >
              <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Buscar</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
