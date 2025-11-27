import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column - Editorial Style */}
          <FadeIn className="relative order-2 md:order-1" enableParallax>
            <div className="relative group cursor-none-ish">
               {/* Decorative Frame line */}
               <div className="absolute -inset-4 border border-olive/20 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 rounded-sm" />
               
               <div className="relative overflow-hidden rounded-sm aspect-[3/4] shadow-2xl shadow-olive/5">
                 <img 
                   src="https://i.imgur.com/0IoJvQ4.png" 
                   alt="Александр Унгуренко" 
                   className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
                 />
                 {/* Grain overlay for texture */}
                 <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
               </div>
            </div>
          </FadeIn>

          {/* Text Column */}
          <FadeIn direction="up" delay={200} className="order-1 md:order-2">
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-olive uppercase mb-6 block">
              Об Авторе
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl text-olive-dark mb-8 leading-tight">
              Создаю контент, <br/> 
              <span className="italic font-serif text-olive">который продаёт</span> <br/>
              без давления.
            </h2>

            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed border-l border-olive/20 pl-6">
              <p>
                Привет! Меня зовут Александр Унгуренко. Я помогаю экспертам и бизнесу выходить из "операционки" создания контента.
              </p>
              <p>
                Мой подход — это не просто набор промптов. Это <strong className="font-medium text-olive-dark">системное мышление</strong>, которое объединяет маркетинг, психологию и технологии искусственного интеллекта.
              </p>
              <p>
                Я верю, что социальные сети должны быть активом, а не второй работой.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 opacity-80 text-olive-dark">
              <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40C25 35 30 10 50 20C60 25 55 50 70 45C85 40 90 20 100 30C110 40 105 55 120 50C135 45 140 25 160 35C170 40 180 45 190 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="path-drawing" />
              </svg>
              <span className="block text-xs font-sans tracking-widest text-slate-400 mt-2 ml-2">ВАШ ПРОВОДНИК В МИР AI</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};