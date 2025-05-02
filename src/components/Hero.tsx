import React from 'react';
import { Play } from 'lucide-react';
import ChatScreenshot from '../assets/ChatScreenshot.png';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle-1"></div>
        <div className="particle-2"></div>
        <div className="particle-3"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 pt-24 pb-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 animate-fade-in">
              Say it. Send it.<br/>
              See it. <span className="text-indigo-600">Instantly.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-100">
              The easiest way to build real-time conversations — whether you're a team, a community, or just having fun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-200">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl" onClick={() => {
                window.location.href="https://app.yapchat.xyz"
              }}>
                Try YapChat
              </button>
            </div>
          </div>
          <div className="md:w-1/2 animate-float">
            <img className="p-4 h-auto flex flex-col rounded-xl opacity-90 object-contain"
              src={ChatScreenshot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;