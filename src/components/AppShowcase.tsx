import React, { useEffect, useRef } from 'react';
import FullScreenshot from '../assets/FullScreenshot.png';

const AppShowcase: React.FC = () => {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }

    return () => {
      if (mockupRef.current) {
        observer.unobserve(mockupRef.current);
      }
    };
  }, []);

  return (
    <section id="interface" className="py-20 bg-gradient-to-r from-indigo-100 to-purple-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modern Interface For Modern Teams
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Beautiful, intuitive, and designed for efficiency. Chat the way you want to.
          </p>
        </div>
        <div 
          ref={mockupRef} 
          className="mockup-container opacity-0 transition-all duration-1000 transform translate-y-10"
        >
        <img className="max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden"
          src={FullScreenshot} />
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;