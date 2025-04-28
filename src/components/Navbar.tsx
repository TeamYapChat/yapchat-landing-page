import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare className="h-6 w-6 text-indigo-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">YapChat</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#use-cases" className="text-gray-700 hover:text-indigo-600 transition-colors">Use Cases</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors">How It Works</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Try YapChat
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4 top-16">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
                Features
              </a>
              <a href="#use-cases" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
                Use Cases
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
                How It Works
              </a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-full">
                Try YapChat
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;