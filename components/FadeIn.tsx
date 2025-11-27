import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'none';
  enableParallax?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  direction = 'up',
  enableParallax = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!enableParallax) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            const distance = elementCenter - viewportCenter;
            
            // Subtle parallax factor (-0.05 means element moves slightly slower than scroll)
            setOffsetY(distance * -0.05); 
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax]);

  const getTransform = () => {
    if (!isVisible && direction === 'up') return 'translate-y-8';
    return 'translate-y-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getTransform()} ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {enableParallax ? (
        <div style={{ transform: `translateY(${offsetY}px)`, willChange: 'transform' }} className="h-full w-full">
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};