import React, { useEffect, useRef } from 'react';

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
    <section className="py-20 bg-gradient-to-r from-indigo-100 to-purple-100 overflow-hidden">
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
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="flex items-center justify-between bg-indigo-600 text-white p-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm font-medium">YapChat - Product Team</div>
              <div className="text-xs">24 members</div>
            </div>
            <div className="flex h-[500px]">
              {/* Sidebar */}
              <div className="w-1/4 bg-gray-50 border-r border-gray-200 p-3">
                <div className="mb-4">
                  <div className="text-xs uppercase text-gray-500 font-medium mb-2">Channels</div>
                  <div className="space-y-1">
                    <div className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded font-medium"># general</div>
                    <div className="text-gray-700 px-2 py-1 hover:bg-gray-100 rounded"># design</div>
                    <div className="text-gray-700 px-2 py-1 hover:bg-gray-100 rounded"># marketing</div>
                    <div className="text-gray-700 px-2 py-1 hover:bg-gray-100 rounded"># development</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase text-gray-500 font-medium mb-2">Direct Messages</div>
                  <div className="space-y-1">
                    <div className="flex items-center text-gray-700 px-2 py-1 hover:bg-gray-100 rounded">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Sarah Connor
                    </div>
                    <div className="flex items-center text-gray-700 px-2 py-1 hover:bg-gray-100 rounded">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      John Doe
                    </div>
                    <div className="flex items-center text-gray-700 px-2 py-1 hover:bg-gray-100 rounded">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                      Alex Smith
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Chat */}
              <div className="w-3/4 flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0 mr-3"></div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900 mr-2">Sarah Connor</span>
                          <span className="text-xs text-gray-500">10:32 AM</span>
                        </div>
                        <div className="mt-1 bg-gray-100 py-2 px-3 rounded-lg text-gray-800">
                          Hi team! I've just pushed the latest design mockups to Figma. Can everyone take a look and give feedback?
                        </div>
                        <div className="flex space-x-1 mt-1">
                          <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">👍 3</span>
                          <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">🔥 2</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0 mr-3"></div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900 mr-2">John Doe</span>
                          <span className="text-xs text-gray-500">10:34 AM</span>
                        </div>
                        <div className="mt-1 bg-gray-100 py-2 px-3 rounded-lg text-gray-800">
                          Looking at them now. The new dashboard layout is great! Much more intuitive.
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end">
                      <div>
                        <div className="flex items-center justify-end">
                          <span className="text-xs text-gray-500 mr-2">10:36 AM</span>
                          <span className="font-medium text-gray-900">You</span>
                        </div>
                        <div className="mt-1 bg-indigo-600 py-2 px-3 rounded-lg text-white">
                          Thanks for the quick feedback! I'll incorporate your suggestions in the next iteration.
                        </div>
                      </div>
                      <div className="bg-indigo-300 w-8 h-8 rounded-full flex-shrink-0 ml-3"></div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex-shrink-0 mr-3"></div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border-t border-gray-200">
                  <div className="bg-gray-100 rounded-lg flex items-center p-2">
                    <input
                      type="text"
                      placeholder="Message #general"
                      className="flex-1 bg-transparent focus:outline-none"
                    />
                    <button className="ml-2 text-indigo-600 hover:text-indigo-800">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;