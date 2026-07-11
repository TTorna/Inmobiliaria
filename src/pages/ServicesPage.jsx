import { Home, Key, FileText, Camera, ShieldCheck, PenTool, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      title: 'Tasaciones Premium',
      description: 'Evaluamos su propiedad con precisión absoluta utilizando análisis de mercado en tiempo real, big data y la experiencia de nuestros tasadores matriculados.',
      icon: Home
    },
    {
      title: 'Venta y Alquiler',
      description: 'Estrategias de comercialización exclusivas y acceso directo a nuestra cartera de clientes VIP y corporativos para asegurar operaciones rápidas y al mejor precio.',
      icon: Key
    },
    {
      title: 'Asesoramiento Legal',
      description: 'Nuestro bufete de abogados especializado en bienes raíces interviene en cada etapa para garantizar que la transacción sea 100% segura y blindada.',
      icon: ShieldCheck
    },
    {
      title: 'Marketing Inmobiliario',
      description: 'Producción audiovisual con drones 4K, tours virtuales 360º y fotografía profesional arquitectónica para destacar su propiedad por sobre el resto.',
      icon: Camera
    },
    {
      title: 'Administración Integral',
      description: 'Gestión completa de alquileres: cobros, mantenimiento preventivo, pago de expensas e impuestos, para que usted solo disfrute de su rentabilidad sin preocupaciones.',
      icon: FileText
    },
    {
      title: 'Home Staging y Diseño',
      description: 'Servicio de preparación estética y alianzas con estudios de arquitectura de primer nivel para revalorizar su inversión hasta un 20% antes de vender.',
      icon: PenTool
    }
  ];

  return (
    <div className="min-h-screen selection:bg-gold/30">
      {/* Dark Theme Header and Grid Section */}
      <div className="pt-32 md:pt-40 pb-24 bg-gradient-to-br from-charcoal via-[#1a1a1a] to-[#0a0a0a] text-white rounded-b-[3rem] shadow-2xl relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-gray-300 mb-6 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest">Excelencia Inmobiliaria</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
            Nuestros <span className="font-bold text-gold relative inline-block">
              Servicios
              <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Brindamos soluciones integrales de extrema calidad y personalizadas para cada etapa de su inversión inmobiliaria, asegurando resultados impecables.
          </p>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 group hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(197,160,89,0.1)] hover:border-gold/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-charcoal to-[#2a2a2a] rounded-2xl flex items-center justify-center text-white mb-8 border border-white/5 group-hover:border-gold/30 group-hover:text-gold transition-all duration-500 group-hover:scale-110 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-base group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Light Theme Transparencia Section */}
      <div className="bg-gray-50 text-charcoal pt-24 pb-20 -mt-10 relative z-0">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-4 border border-gold/20 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal tracking-tight">
              Transparencia en <span className="text-gold font-light">Cada Paso</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Nuestro compromiso máximo es su tranquilidad. Implementamos procesos auditados, rigurosos y estandarizados para que su única ocupación sea disfrutar de su próximo hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mb-6 border border-gold/20">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Blindaje Jurídico</h3>
              <p className="text-gray-600 leading-relaxed font-light text-base">
                Revisión exhaustiva de títulos, contratos y garantías por nuestro bufete interno de abogados antes de cada firma, garantizando riesgo cero en su inversión.
              </p>
            </div>

            {/* Card 2 - Carta de Acento (Oscura) */}
            <div className="bg-charcoal p-8 md:p-10 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reportes de Avance</h3>
                <p className="text-gray-300 leading-relaxed font-light text-base">
                  Métricas detalladas y transparentes enviadas quincenalmente sobre el desempeño comercial, consultas y visualizaciones de su propiedad en el mercado.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mb-6 border border-gold/20">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Soporte VIP 24/7</h3>
              <p className="text-gray-600 leading-relaxed font-light text-base">
                Contará con un asesor personal senior asignado exclusivamente a su cartera de propiedades, disponible de forma prioritaria en todo momento.
              </p>
            </div>
          </div>

          {/* Banner Imagen Panorámica */}
          <div className="relative w-full h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Mansion Luxury" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-4 border border-white/30 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span className="text-xs font-bold uppercase tracking-widest">Sello de Calidad</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Garantía de Satisfacción T&T</h3>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <p className="text-gray-200 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                    Descubra el estándar más alto en gestión inmobiliaria. Brindamos operaciones rápidas, altamente rentables y completamente blindadas legalmente.
                  </p>
                  <Link to="/buscar" className="bg-gold text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white hover:text-charcoal shadow-lg whitespace-nowrap inline-flex items-center flex-shrink-0 group/btn">
                    Ver Propiedades
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
