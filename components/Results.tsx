import React from 'react';
import { RESULTS } from '../constants';
import { FadeIn } from './FadeIn';

export const Results: React.FC = () => {
  return (
    <section className="py-20 bg-olive text-white rounded-b-[3rem] mb-[-2rem] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h2 className="font-display font-black text-3xl md:text-5xl mb-6 uppercase">Мои результаты</h2>
              <p className="text-lg text-sage-light mb-10 leading-relaxed opacity-90">
                Эта методика работает. Карусели попадают в рекомендации, алгоритм выводит контент к новой аудитории. 
                Люди подписываются и переходят в Telegram.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {RESULTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={idx} delay={idx * 100}>
                    <div className="flex items-center gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10">
                      <div className="w-14 h-14 rounded-full bg-sage flex items-center justify-center shrink-0 text-olive-dark">
                        <Icon size={28} />
                      </div>
                      <div>
                        <div className="text-3xl font-display font-black text-white">{item.value}</div>
                        <div className="text-sage-light">{item.description}</div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
             <FadeIn delay={200} enableParallax>
               <div className="relative max-w-[280px] md:max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
                 <div className="bg-cream rounded-[2.5rem] border-8 border-white/20 shadow-2xl overflow-hidden">
                    <img 
                      src="https://i.imgur.com/SFHULeU.jpeg" 
                      alt="Статистика охватов Instagram" 
                      className="w-full h-auto object-cover block"
                    />
                 </div>
               </div>
             </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};