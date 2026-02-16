import React, { useState, useEffect } from 'react';
import { Cpu, Code, Brain, Sparkles, Zap, ChevronRight, Menu, X } from 'lucide-react';

export default function AISoftwareLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Inteligencia Artificial",
      description: "Soluciones de ML y Deep Learning personalizadas para automatizar y optimizar tus procesos de negocio."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo Web & Móvil",
      description: "Aplicaciones escalables y de alto rendimiento con las últimas tecnologías del mercado."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización Inteligente",
      description: "Workflows automatizados con IA que ahorran tiempo y reducen errores operacionales."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Chatbots & Asistentes IA",
      description: "Agentes conversacionales inteligentes que mejoran la experiencia de tus clientes."
    }
  ];

  const features = [
    { title: "Innovación Constante", desc: "Tecnología de vanguardia en cada proyecto" },
    { title: "Soluciones a Medida", desc: "Desarrollo personalizado según tus necesidades" },
    { title: "Experiencia Comprobada", desc: "Equipo experto en IA y desarrollo de software" }
  ];

  const technologies = ['Python', 'TensorFlow', 'React', 'Node.js', 'PyTorch', 'AWS', 'Docker', 'OpenAI'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cpu className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI.DEV
            </span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-cyan-400 transition-colors">Nosotros</a>
            <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#contacto" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Contacto
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-cyan-500/20 px-6 py-4 space-y-4">
            <a href="#servicios" className="block hover:text-cyan-400">Servicios</a>
            <a href="#nosotros" className="block hover:text-cyan-400">Nosotros</a>
            <a href="#proyectos" className="block hover:text-cyan-400">Proyectos</a>
            <a href="#contacto" className="block text-cyan-400">Contacto</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.02}% ${50 + scrollY * 0.02}%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`
          }}
        />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-cyan-400 text-sm font-medium">🚀 Transformando ideas en soluciones inteligentes</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Desarrollo de Software
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Impulsado por IA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Creamos soluciones tecnológicas de próxima generación que combinan ingeniería de software 
            de élite con inteligencia artificial avanzada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contacto"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
            >
              Iniciar Proyecto
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios"
              className="px-8 py-4 border-2 border-cyan-500/50 rounded-full font-semibold hover:bg-cyan-500/10 transition-all"
            >
              Ver Servicios
            </a>
          </div>

          {/* Floating animation elements */}
          <div className="mt-20 flex justify-center gap-8 flex-wrap">
            {[Brain, Cpu, Code, Sparkles].map((Icon, i) => (
              <div 
                key={i}
                className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-110"
                style={{
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                <Icon className="w-8 h-8 text-cyan-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Nuestros Servicios
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Soluciones tecnológicas completas que impulsan el crecimiento de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="nosotros" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ¿Por Qué Elegirnos?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-2xl font-bold mb-12 text-slate-400">
            Tecnologías que dominamos
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/20 hover:border-cyan-500/50 hover:scale-110 transition-all font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="proyectos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Casos de Éxito
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "E-Commerce con IA", category: "Retail", metric: "+150% conversión" },
              { title: "Chatbot Inteligente", category: "Customer Service", metric: "10K usuarios/día" },
              { title: "Análisis Predictivo", category: "FinTech", metric: "95% precisión" }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <span className="text-sm text-cyan-400 mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-3xl font-black text-cyan-400">{project.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hablemos de tu Proyecto
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Estamos listos para convertir tu visión en realidad
            </p>
          </div>

          <form className="space-y-6 bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-6 py-4 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Empresa (opcional)"
              className="w-full px-6 py-4 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <textarea
              rows="5"
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full px-6 py-4 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Enviar Mensaje
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span className="font-bold">AI.DEV</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2026 AI.DEV - Desarrollo de Software con IA
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">GitHub</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}