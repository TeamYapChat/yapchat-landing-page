import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="text-indigo-600 mb-4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3333 13.3333H8.33333V23.3333H18.3333V13.3333Z" fill="currentColor" />
          <path d="M31.6667 13.3333H21.6667V23.3333H31.6667V13.3333Z" fill="currentColor" />
          <path d="M8.33333 26.6667H18.3333V36.6667H8.33333V26.6667Z" fill="currentColor" />
          <path d="M21.6667 26.6667H31.6667V36.6667H21.6667V26.6667Z" fill="currentColor" />
        </svg>
      </div>
      <p className="text-gray-800 text-lg mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This app is snappy and perfect for our dev standups. We've completely replaced our old messaging system with YapChat.",
      author: "Alex Rodriguez",
      role: "CTO at DevFlow"
    },
    {
      quote: "I replaced Slack with YapChat for our side project. Love the reactions and how lightweight it feels!",
      author: "Jessica Chen",
      role: "Product Designer"
    },
    {
      quote: "YapChat has become essential for our remote team. The real-time nature makes it feel like we're all in the same room.",
      author: "Michael Johnson",
      role: "Team Lead at RemoteFirst"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying about YapChat.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Testimonial
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10 hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10 hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;