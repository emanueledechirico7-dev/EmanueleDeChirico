import React from 'react';
import { Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-zeta-600 p-1.5 rounded-lg">
                <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              De Chirico <span className="text-zeta-500">Emanuele</span>
            </span>
          </div>
          
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} De Chirico Emanuele - Ditta Individuale - P.IVA 13346050019 - Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;