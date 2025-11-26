import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { FadeIn } from './FadeIn';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white rounded-t-[3rem]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-display font-black text-3xl md:text-4xl text-center mb-12 text-olive-dark uppercase">
            Частые вопросы
          </h2>
        </FadeIn>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className={`border border-sand rounded-2xl px-6 transition-all duration-300 ${openIndex === index ? 'bg-cream border-sage' : 'bg-white'}`}>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className={`font-display font-bold text-lg transition-colors ${openIndex === index ? 'text-olive-dark' : 'text-slate-700'}`}>
                    {item.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <div className="w-8 h-8 bg-olive rounded-full flex items-center justify-center text-white">
                        <Minus className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-sand rounded-full flex items-center justify-center text-slate-500 group-hover:bg-sage group-hover:text-olive-dark transition-colors">
                        <Plus className="w-5 h-5" />
                      </div>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed pr-8 font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};