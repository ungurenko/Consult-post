import React from 'react';
import { TARGET_AUDIENCE } from '../constants';
import { FadeIn } from './FadeIn';

export const Audience: React.FC = () => {
  return (
    <section id="audience" className="py-20 bg-white rounded-t-[3rem] mt-[-2rem]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-display font-black text-3xl md:text-5xl text-center text-olive-dark mb-4 uppercase">
            Для кого <span className="text-olive">эта система</span>
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto font-medium">
            Идеально подойдет, если вы узнаете себя в этих пунктах:
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_AUDIENCE.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={index} delay={index * 100} className="h-full">
                <div className="h-full p-8 rounded-3xl bg-cream border border-sand hover:border-sage hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-sage rounded-2xl flex items-center justify-center mb-6 transform -rotate-3 shadow-sm">
                    <Icon className="w-7 h-7 text-olive-dark" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-olive-dark mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};