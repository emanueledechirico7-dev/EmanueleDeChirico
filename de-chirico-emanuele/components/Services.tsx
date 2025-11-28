import React from 'react';
import { ServiceItem } from '../types';
import { Megaphone, Search, PenTool, BarChart3, Globe, Users } from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: "Campagne Pubblicitarie",
    description: "Gestione completa di campagne advertising su Meta, Google e LinkedIn per massimizzare il ROI.",
    icon: <Megaphone className="h-6 w-6 text-white" />,
  },
  {
    title: "SEO & SEM",
    description: "Ottimizzazione per i motori di ricerca e strategie di search marketing per farti trovare dai clienti giusti.",
    icon: <Search className="h-6 w-6 text-white" />,
  },
  {
    title: "Brand Identity",
    description: "Creazione di identità visive forti, dal logo al coordinato grafico aziendale.",
    icon: <PenTool className="h-6 w-6 text-white" />,
  },
  {
    title: "Analisi di Mercato",
    description: "Studio approfondito del target e dei competitor per definire strategie basate sui dati.",
    icon: <BarChart3 className="h-6 w-6 text-white" />,
  },
  {
    title: "Web Design",
    description: "Sviluppo di siti web ed e-commerce moderni, veloci e ottimizzati per la conversione.",
    icon: <Globe className="h-6 w-6 text-white" />,
  },
  {
    title: "Social Media Management",
    description: "Pianificazione editoriale e gestione community per far crescere la tua presenza social.",
    icon: <Users className="h-6 w-6 text-white" />,
  }
];

const Services: React.FC = () => {
  return (
    <section id="servizi" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-zeta-600 font-semibold tracking-wide uppercase">Cosa Faccio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Servizi di Marketing a 360°
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Offro consulenza strategica e operativa per far decollare il tuo business con soluzioni creative e su misura.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-zeta-600 mb-6 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;