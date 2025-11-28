import React from 'react';
import { ArrowRight, TrendingUp, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-6 px-4 sm:px-6 lg:px-8">
          
          {/* Brand Header */}
          <div className="flex items-center gap-2 mb-8 sm:mb-16">
            <div className="bg-zeta-600 p-1.5 rounded-lg shadow-sm">
                <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              De Chirico <span className="text-zeta-600">Emanuele</span>
            </span>
          </div>

          <main className="mt-8 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-zeta-50 text-zeta-600 text-xs font-semibold uppercase tracking-wide mb-4 border border-zeta-100">
                <TrendingUp className="w-3 h-3 mr-1" />
                Consulenza Digital Marketing
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6">
                <span className="block xl:inline">Strategie di Marketing</span>{' '}
                <span className="block text-zeta-600 xl:inline">Per il Tuo Successo</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                Trasformo le tue idee in campagne pubblicitarie performanti. De Chirico Emanuele è il partner ideale per la conduzione di campagne di marketing e servizi pubblicitari su misura.
              </p>
              
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-start gap-3">
                <div className="rounded-md shadow w-full sm:w-auto">
                  <a
                    href="#contatti"
                    onClick={(e) => scrollToSection(e, 'contatti')}
                    className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-zeta-600 hover:bg-zeta-700 md:text-lg transition-all shadow-lg shadow-zeta-200 transform hover:-translate-y-0.5"
                  >
                    Richiedi Consulenza
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto">
                  <a
                    href="#servizi"
                    onClick={(e) => scrollToSection(e, 'servizi')}
                    className="w-full flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 md:text-lg transition-all"
                  >
                    Scopri i Servizi
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Image Section - Optimized for Mobile stacking */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-50 flex items-center justify-center overflow-hidden h-64 sm:h-72 md:h-96 lg:h-full">
        <img
          className="h-full w-full object-cover opacity-95 hover:scale-105 transition-transform duration-700 ease-out"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Team di marketing al lavoro"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-white/40 lg:to-white"></div>
      </div>
    </div>
  );
};

export default Hero;