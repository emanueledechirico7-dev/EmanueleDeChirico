import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = formData;
    
    // Construct email body
    const subject = `Richiesta Consulenza dal sito web: ${firstName} ${lastName}`;
    const body = `Nome: ${firstName}\nCognome: ${lastName}\nEmail: ${email}\nTelefono: ${phone}\n\nMessaggio:\n${message}`;
    
    // Open default mail client
    window.location.href = `mailto:emanueledechirico7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contatti" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-base text-zeta-600 font-semibold tracking-wide uppercase">Contattami</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Parliamo del tuo Progetto
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Compila il form sottostante per richiedere una consulenza gratuita. Ti risponderò entro 24 ore.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Contact Info Side - Darker background for contrast */}
          <div className="bg-slate-900 p-8 lg:p-12 lg:w-2/5 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">De Chirico Emanuele</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Sono pronto ad analizzare il tuo business e a proporti le migliori strategie di marketing digitale per raggiungere i tuoi obiettivi.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-zeta-500 mt-1" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-400">Chiama</p>
                    <p className="text-lg font-semibold">+39 389 635 4734</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-zeta-500 mt-1" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-400">Scrivi</p>
                    <p className="text-lg font-semibold">emanueledechirico7@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-zeta-500 mt-1" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-400">Vieni a trovarmi</p>
                    <p className="text-lg font-semibold">Via Oslavia 36<br/>Torino</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 pt-8 border-t border-slate-700">
               <p className="text-sm text-slate-500">
                Ditta Individuale<br/>
                P.IVA: 13346050019
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 lg:p-12 lg:w-3/5 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-zeta-500 focus:ring-2 focus:ring-zeta-200 outline-none transition-all"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                    Cognome
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-zeta-500 focus:ring-2 focus:ring-zeta-200 outline-none transition-all"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Aziendale
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-zeta-500 focus:ring-2 focus:ring-zeta-200 outline-none transition-all"
                  placeholder="nome@azienda.it"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-zeta-500 focus:ring-2 focus:ring-zeta-200 outline-none transition-all"
                  placeholder="+39 333 1234567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Di cosa hai bisogno?
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-zeta-500 focus:ring-2 focus:ring-zeta-200 outline-none transition-all resize-none"
                  placeholder="Raccontami brevemente i tuoi obiettivi..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-zeta-600 hover:bg-zeta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zeta-500 transition-all shadow-lg shadow-zeta-200 hover:-translate-y-1"
                >
                  Invia Richiesta
                  <Send className="ml-2 h-5 w-5" />
                </button>
                <p className="mt-4 text-xs text-center text-slate-400">
                  Cliccando su Invia verrà preparata una email nel tuo client di posta predefinito.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;