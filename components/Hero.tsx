import React from 'react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-sage/50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FadeIn direction="up" delay={0}>
             <div className="inline-block mb-6 transform -rotate-2">
                <div className="bg-terracotta text-white px-4 py-1 rounded-full text-sm font-bold shadow-md uppercase tracking-wider">
                  Instagram & Telegram
                </div>
             </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={100}>
            <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-olive-dark leading-[1.1] mb-8">
              Консультация по <br/>
              <span className="text-olive">постам-каруселям</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <p className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Система из 6 промптов за 2 часа. Адаптирую под ваш блог воронку, которая приводит аудиторию.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <div className="flex flex-col items-center justify-center gap-6">
               <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-sage/50">
                  <span className="text-slate-400 text-xl line-through font-bold">30 000 ₽</span>
                  <span className="text-3xl md:text-4xl font-black text-terracotta">15 000 ₽</span>
               </div>
              <a href="#pricing">
                <Button size="lg" variant="primary" className="shadow-xl shadow-olive/20">
                  Записаться на консультацию
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Carousel Screenshots */}
        <FadeIn delay={400} enableParallax>
          <div className="relative mx-auto max-w-sm md:max-w-md">
             {/* Decoration */}
             <div className="absolute top-4 -right-6 md:-right-12 w-20 h-20 md:w-24 md:h-24 bg-sage rounded-full flex items-center justify-center transform rotate-12 shadow-sm z-10 border-4 border-cream">
                <span className="font-display font-bold text-olive-dark text-center text-[10px] md:text-xs leading-tight">
                  6 готовых<br/>промптов
                </span>
             </div>

            <div className="bg-slate-50 rounded-3xl border-4 border-white shadow-2xl shadow-olive/10 overflow-hidden relative">
               <img 
                 src="https://i.imgur.com/iTqZFN5.jpeg"
                 alt="Скриншот карусели"
                 className="w-full h-auto object-contain"
               />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};