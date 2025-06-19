import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCounter } from '../hooks/useCounter';
import { statistics } from '../data/mockData';

const Statistics: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-white/10 rounded-full animate-blob"></div>
        <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-white/5 rounded-full animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const count = useCounter(stat.value, 2500, 0, isIntersecting);
            
            return (
              <div
                key={stat.id}
                className={`text-center transition-all duration-1000 transform hover:scale-110 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  {count}{stat.suffix}
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;