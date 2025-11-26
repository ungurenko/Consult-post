import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-sand bg-white text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
           <span className="font-display font-black text-lg text-olive-dark">NeuroContent</span>
           <div className="flex gap-6 font-bold text-slate-600">
             <a href="#" className="hover:text-olive transition-colors">Instagram</a>
             <a href="#" className="hover:text-olive transition-colors">Telegram</a>
             <a href="mailto:hello@example.com" className="hover:text-olive transition-colors">hello@neurocontent.com</a>
           </div>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 font-bold hover:text-olive transition-colors bg-sand px-4 py-2 rounded-full"
        >
          Наверх
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};