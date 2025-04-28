import React from 'react';

const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-indigo-600">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Yap? Start chatting in seconds.
        </h2>
        <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of teams and friends who are already using YapChat to communicate better.
        </p>
        <button className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl">
          Launch Chatroom
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;