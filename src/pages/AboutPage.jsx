import { useState, useEffect } from 'react';
import { CheckCircle, Users, Award, Shield, Star, Building, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    text: "La atención al detalle y el respaldo legal que ofrece T&T Inmobiliaria me dieron la tranquilidad absoluta para realizar la mayor inversión de mi vida. Son verdaderos profesionales del lujo.",
    name: "Martín E. Rodríguez",
    img: "https://i.pravatar.cc/100?img=33"
  },
  {
    text: "Vendimos nuestra propiedad en tiempo récord y al valor esperado. La estrategia de marketing y el tour 360 hicieron toda la diferencia. Un servicio 100% recomendable y de élite.",
    name: "Sofía L. Mendizábal",
    img: "https://i.pravatar.cc/100?img=47"
  },
  {
    text: "Como inversor extranjero, buscaba una agencia que me brindara total confianza y transparencia. T&T superó mis expectativas con su impecable gestión legal y comercial.",
    name: "Carlos A. Santoro",
    img: "https://i.pravatar.cc/100?img=11"
  }
];

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-32 md:pt-40 pb-20 bg-gray-50 min-h-screen selection:bg-gold/30">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-xs font-bold uppercase tracking-widest">Conocé Nuestro Legado</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light text-charcoal mb-8 tracking-tight">
          Nuestra <span className="font-bold text-gold relative inline-block">
            Historia
            <svg className="absolute w-full h-3 -bottom-2 left-0 text-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto font-light leading-relaxed">
          En T&T Inmobiliaria, redefinimos el concepto de exclusividad y lujo en el mercado de bienes raíces. Con más de 15 años de trayectoria impecable, conectamos a nuestros clientes con las propiedades más distinguidas.
        </p>
      </section>

      {/* Stats/Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-charcoal rounded-[3rem] p-10 md:p-16 text-white grid grid-cols-1 md:grid-cols-4 gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden ring-1 ring-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/15 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          {[
            { icon: Users, num: "+5000", label: "Clientes Satisfechos" },
            { icon: Building, num: "+1200", label: "Inmuebles Gestionados" },
            { icon: Award, num: "15", label: "Años de Trayectoria" },
            { icon: Shield, num: "100%", label: "Auditoría Legal" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="relative z-10 text-center group cursor-default">
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-gold mb-6 border border-white/10 group-hover:bg-gold group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.4)]">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.num}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Story & Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            {/* Elegant Offset Frame */}
            <div className="absolute inset-0 border-2 border-gold/30 rounded-[3rem] transform translate-x-6 translate-y-6 -z-10 transition-transform duration-700 hover:translate-x-8 hover:translate-y-8"></div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Oficina T&T" 
                className="object-cover h-[500px] w-full transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            
            {/* Trust Badge */}
            <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-4 border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 ring-4 ring-green-50/50">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Certificación</p>
                <p className="font-bold text-charcoal text-lg">Firma Premium 2026</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8 mt-16 lg:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Más que una agencia, <br />
              <span className="text-gold font-light">tu aliado estratégico.</span>
            </h2>
            
            <div className="pl-6 border-l-2 border-gold space-y-6">
              <p className="text-gray-600 text-xl leading-relaxed font-light">
                No vendemos simples metros cuadrados; ofrecemos un estilo de vida y garantizamos inversiones seguras. Nuestro equipo está conformado por asesores premium, arquitectos y abogados especializados, altamente capacitados para entender y proteger los intereses de clientes exigentes.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed font-light">
                Cada propiedad en nuestro portafolio atraviesa un riguroso proceso de validación legal y estructural. Trabajamos con absoluta confidencialidad y ética profesional, valores que nos han posicionado como líderes del sector.
              </p>
            </div>
            
            <Link to="/servicios" className="inline-flex items-center text-gold font-bold text-lg group mt-4 px-6 py-3 rounded-full hover:bg-gold/5 transition-colors">
              Conocé nuestros servicios detallados
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Infinite Testimonial Marquee */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <Quote className="w-12 h-12 mx-auto text-gold mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">Experiencias de <span className="text-gold font-light">Clientes</span></h2>
        </div>

        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-64 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-64 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex whitespace-nowrap group">
          <div className="flex animate-marquee-right">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={idx}
                className="w-[320px] md:w-[400px] h-[300px] p-8 md:p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow mx-4 flex flex-col justify-between whitespace-normal flex-shrink-0 relative overflow-hidden group/card"
              >
                <Quote className="absolute top-6 right-6 w-24 h-24 text-gray-50 rotate-12 transition-transform group-hover/card:scale-110" />
                
                <div className="relative z-10">
                  <div className="flex text-gold mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current mr-1" />)}
                  </div>
                  <p className="text-gray-700 text-base md:text-lg italic leading-relaxed line-clamp-4 font-light">
                    "{t.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-6 relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-gold/20 flex-shrink-0 shadow-sm">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-base md:text-lg">{t.name}</p>
                    <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold mt-0.5">Cliente Premium</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-right">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={`second-${idx}`}
                className="w-[320px] md:w-[400px] h-[300px] p-8 md:p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow mx-4 flex flex-col justify-between whitespace-normal flex-shrink-0 relative overflow-hidden group/card"
              >
                <Quote className="absolute top-6 right-6 w-24 h-24 text-gray-50 rotate-12 transition-transform group-hover/card:scale-110" />
                
                <div className="relative z-10">
                  <div className="flex text-gold mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current mr-1" />)}
                  </div>
                  <p className="text-gray-700 text-base md:text-lg italic leading-relaxed line-clamp-4 font-light">
                    "{t.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-6 relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-gold/20 flex-shrink-0 shadow-sm">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-base md:text-lg">{t.name}</p>
                    <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold mt-0.5">Cliente Premium</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
