import React from 'react';
import { BENEFITS } from '../constants';
import { FadeIn } from './FadeIn';

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn className="sticky top-24">
            <div className="inline-block px-4 py-1 bg-terracotta/10 text-terracotta font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
              Что внутри
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-olive-dark mb-8 uppercase leading-tight">
              Что вы <br />
              <span className="text-olive">получаете</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              2 часа плотной работы. Вы получаете не просто знания, а готовые активы для вашего блога.
            </p>
          </FadeIn>

          <div className="grid gap-6">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={index} delay={index * 100} direction="up">
                  <div className="flex gap-6 p-8 rounded-3xl bg-white border border-sand shadow-sm hover:shadow-md hover:border-sage transition-all">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-sage/30 flex items-center justify-center text-olive-dark">
                        <Icon className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-olive-dark mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};