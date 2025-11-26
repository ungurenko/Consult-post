import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { FadeIn } from './FadeIn';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display font-black text-3xl md:text-5xl text-olive-dark mb-6 uppercase leading-tight">
              Как проходит <br/><span className="text-olive">консультация</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Никакой абстрактной теории. Мы работаем в формате созвона и сразу создаём контент.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <FadeIn key={step.id} delay={index * 150}>
              <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-transparent hover:border-sage transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                   <div className="font-display font-black text-6xl md:text-8xl text-sage/50 group-hover:text-sage transition-colors leading-none">
                     0{step.id}
                   </div>
                   <div className="flex-1">
                     <h3 className="font-display font-bold text-2xl text-olive-dark mb-3">{step.title}</h3>
                     <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                   </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-12 bg-olive rounded-3xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto shadow-xl shadow-olive/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10">
              <h3 className="font-display font-bold text-2xl mb-4">Результат</h3>
              <p className="text-sage-light/90 text-lg leading-relaxed">
                Вы уходите с готовой системой. Больше не нужно сидеть часами над одним постом. 
                Вы запускаете процесс, получаете охваты, и новая аудитория переливается в ваш Telegram.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};