import React from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-cream border-t border-sand">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-display font-black text-3xl md:text-5xl text-olive-dark mb-8 uppercase leading-tight">
            Запишитесь на консультацию <br/>
            <span className="text-olive">и получите систему</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium">
             Хватит тратить часы на контент без результата. Я покажу, как делать вирусные карусели быстро.
          </p>
          
          <div className="flex flex-col items-center gap-8">
             <div className="flex items-center gap-4">
                <span className="text-2xl text-slate-400 line-through font-bold">30 000 ₽</span>
                <span className="text-4xl font-black text-terracotta">15 000 ₽</span>
             </div>
             <a href="#pricing">
                <Button size="lg" variant="primary" className="text-lg px-10 py-5">Записаться сейчас</Button>
             </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};