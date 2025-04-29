import React from 'react';
import { Users, Code, Users2, Eye } from 'lucide-react';

type UseCaseCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
        <div className="mb-2">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="p-6 flex-1">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Startups",
      description: "Perfect for small teams that need quick, efficient communication without the overhead of complex tools. Stay connected from anywhere, anytime."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Developer Teams",
      description: "Share code snippets, discuss pull requests, and solve problems together in real-time. Integration with GitHub and other dev tools coming soon."
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Friend Groups",
      description: "Create private spaces for your friend circle to share moments, plan events, and stay connected with a platform that respects your privacy."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Anonymous Users",
      description: "Host feedback sessions, Q&As, or community discussions where participants can speak freely with optional anonymity features."
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Uses YapChat?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed for various communication needs, YapChat adapts to how you work and connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;