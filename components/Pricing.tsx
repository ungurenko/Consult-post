import React from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';
import { MessageCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-sand text-center shadow-2xl shadow-olive/5 relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-sage/30 rounded-full blur-3xl -z-10" />
            
            <h2 className="font-display font-black text-4xl text-olive-dark mb-6">Стоимость</h2>
            
            <p className="text-slate-600 mb-12 text-lg leading-relaxed font-medium max-w-lg mx-auto">
              За 2 часа вы получаете готовую систему. Это не разовый пост, а методика для регулярного создания контента.
            </p>

            {/* Value Stack - Quiet Luxury Style */}
            <div className="max-w-sm mx-auto bg-cream/40 rounded-3xl p-8 mb-12 border border-sand">
               <ul className="space-y-4 text-left">
                  <li className="flex justify-between items-end pb-3 border-b border-dashed border-sand/80">
                    <span className="text-slate-600 font-medium text-sm flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-olive"></span>
                       Работа дизайнера
                    </span>
                    <span className="font-display font-bold text-slate-400">10 000 ₽</span>
                  </li>
                  <li className="flex justify-between items-end pb-3 border-b border-dashed border-sand/80">
                    <span className="text-slate-600 font-medium text-sm flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-olive"></span>
                       Услуги копирайтера
                    </span>
                    <span className="font-display font-bold text-slate-400">5 000 ₽</span>
                  </li>
                  <li className="flex justify-between items-end pb-3 border-b border-dashed border-sand/80">
                     <span className="text-slate-600 font-medium text-sm flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-olive"></span>
                       Стратегия
                    </span>
                    <span className="font-display font-bold text-slate-400">15 000 ₽</span>
                  </li>
                  <li className="flex justify-between items-end pt-2 opacity-60">
                     <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Ценность</span>
                     <span className="font-display font-bold text-lg line-through decoration-2 decoration-terracotta/50 text-slate-400">30 000 ₽</span>
                  </li>
               </ul>
            </div>
            
            {/* Final Price */}
            <div className="flex flex-col items-center justify-center gap-3 mb-10">
               <span className="text-xs font-sans font-bold tracking-[0.2em] text-olive uppercase">Ваша инвестиция</span>
               <div className="px-10 py-4 bg-terracotta text-white rounded-2xl text-4xl md:text-5xl font-display font-black shadow-2xl shadow-terracotta/30 transform hover:scale-105 transition-transform duration-300">
                 15 000 ₽
               </div>
            </div>
            
            <div className="flex flex-col gap-5 max-w-xs mx-auto">
              <a href="https://t.me/m/AZYmwWuEZjgy" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="primary" className="w-full shadow-xl">
                  Записаться
                </Button>
              </a>
              <a
                href="https://t.me/m/AZYmwWuEZjgy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold text-olive hover:text-olive-dark transition-colors py-2 group"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                Задать вопрос в Telegram
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};