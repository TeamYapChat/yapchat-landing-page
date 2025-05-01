import React from 'react';
import { MessageSquareText, Lock, Smile, Flower } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="bg-indigo-100 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquareText className="h-6 w-6 text-indigo-600" />,
      title: 'Real-time Messaging',
      description: 'Messages appear instantly as they are sent. No refreshing, no delays—just seamless conversations.',
    },
    {
      icon: <Smile className="h-6 w-6 text-indigo-600" />,
      title: 'Minimal, Clean Interface',
      description: 'Enjoy a fast, lightweight, and intuitive interface for chatting with your friends.',
    },
    {
      icon: <Lock className="h-6 w-6 text-indigo-600" />,
      title: 'Secure Authentication',
      description: 'Authentication is secured by Clerk and protects your data, even in the event of a breach.',
    },
    {
      icon: <Flower className="h-6 w-6 text-indigo-600" />,
      title: 'Visual Design and User Comfort',
      description: 'Gentle, eye-friendly visuals designed to help you focus, stay relaxed, and enjoy every conversation.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features You'll Love</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed to make communication effortless, secure, and enjoyable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;