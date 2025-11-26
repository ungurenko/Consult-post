import React from 'react';
import { TESTIMONIALS } from '../constants';
import { FadeIn } from './FadeIn';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-display font-black text-3xl md:text-4xl text-center mb-16 text-olive-dark uppercase">Результаты клиентов</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <FadeIn key={t.id} delay={idx * 100}>
              <div className="group p-8 rounded-[2rem] bg-white border border-sand hover:border-sage hover:shadow-xl hover:shadow-olive/5 transition-all duration-300 h-full flex flex-col">
                 <div className="flex items-center gap-4 mb-6">
                   <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                   />
                   <div>
                     <div className="font-display font-bold text-lg text-olive-dark">{t.name}</div>
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.role}</div>
                   </div>
                 </div>
                 <div className="relative">
                   <p className="text-slate-600 font-medium relative z-10 leading-relaxed italic">"{t.insight}"</p>
                 </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};