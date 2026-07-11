import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CustomSelect({ value, onChange, options, placeholder, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div 
        className="flex items-center w-full px-6 py-4 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        {Icon && <Icon className="text-gold w-5 h-5 mr-3 flex-shrink-0" />}
        <span className={`flex-1 text-left select-none ${value ? 'text-charcoal font-medium' : 'text-gray-400 font-medium'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 origin-top">
          {options.map((option) => (
            <div 
              key={option.value}
              className={`px-6 py-3 cursor-pointer transition-colors hover:bg-gray-50 ${value === option.value ? 'bg-gray-50 text-gold font-medium border-l-2 border-gold' : 'text-charcoal border-l-2 border-transparent'}`}
              onClick={(e) => {
                e.stopPropagation();
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
