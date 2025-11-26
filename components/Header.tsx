import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-sand py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="font-display font-black text-xl tracking-tight text-olive-dark">
          NeuroContent
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <a href="#audience" className="hover:text-olive transition-colors">Для кого</a>
          <a href="#process" className="hover:text-olive transition-colors">Процесс</a>
          <a href="#pricing" className="hover:text-olive transition-colors">Стоимость</a>
        </nav>
        <a href="#pricing">
           <Button variant="outline" size="md" className="!py-2 !px-5 !text-xs">
             Записаться
           </Button>
        </a>
      </div>
    </header>
  );
};