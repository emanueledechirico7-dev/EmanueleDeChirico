import React, { useState } from 'react';
import { generateMarketingContent } from '../services/geminiService';
import { MarketingIdea, LoadingState } from '../types';
import { Sparkles, Loader2, Copy, CheckCircle } from 'lucide-react';

const AiGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<MarketingIdea | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(LoadingState.LOADING);
    setResult(null);

    try {
      const data = await generateMarketingContent(input);
      setResult(data);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="ai-lab" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-zeta-500 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-slate-800 rounded-full mb-6 border border-slate-700">
             <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
             <span className="text-sm font-medium text-slate-200">Powered by Gemini 2.5</span>
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
            Zeta AI Creative Lab
          </h2>
          <p className="text-lg text-slate-300">
            Hai bisogno di ispirazione immediata? Descrivi la tua attività e la nostra AI genererà idee di marketing istantanee per te.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="business-desc" className="block text-sm font-medium text-slate-300 mb-2">
                Descrivi la tua attività (es. "Pizzeria gourmet a Napoli", "Software house per dentisti")
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="business-desc"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inserisci qui la tua descrizione..."
                  className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-zeta-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={status === LoadingState.LOADING || !input.trim()}
                  className="bg-zeta-600 hover:bg-zeta-500 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === LoadingState.LOADING ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Generando...
                    </>
                  ) : (
                    <>
                      Genera Idee
                      <Sparkles className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {status === LoadingState.ERROR && (
            <div className="mt-6 p-4 bg-red-900/30 border border-red-800 rounded-lg text-red-200 text-center">
              Si è verificato un errore. Assicurati che la chiave API sia configurata correttamente o riprova più tardi.
            </div>
          )}

          {result && status === LoadingState.SUCCESS && (
            <div className="mt-10 space-y-8 animate-fade-in">
              
              {/* Slogans */}
              <div>
                <h3 className="text-lg font-semibold text-zeta-400 mb-4 flex items-center">
                  <span className="w-1.5 h-6 bg-zeta-500 mr-2 rounded-full"></span>
                  Slogan Suggeriti
                </h3>
                <div className="grid gap-3">
                  {result.slogans.map((slogan, idx) => (
                    <div key={idx} className="group flex justify-between items-center bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-zeta-500 transition-all">
                      <p className="font-medium text-slate-100">"{slogan}"</p>
                      <button 
                        onClick={() => copyToClipboard(slogan, `slogan-${idx}`)}
                        className="text-slate-400 hover:text-white transition-colors p-1"
                        title="Copia"
                      >
                        {copiedIndex === `slogan-${idx}` ? <CheckCircle className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hashtags */}
              <div>
                <h3 className="text-lg font-semibold text-zeta-400 mb-4 flex items-center">
                   <span className="w-1.5 h-6 bg-purple-500 mr-2 rounded-full"></span>
                   Hashtag Strategici
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.hashtags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full text-sm font-mono border border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strategy Tip */}
              <div className="bg-gradient-to-r from-zeta-900 to-slate-800 p-5 rounded-lg border border-zeta-800">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                  💡 Zeta Tip
                </h3>
                <p className="text-slate-300 italic">
                  {result.strategyTip}
                </p>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiGenerator;