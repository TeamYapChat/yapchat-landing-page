import React from 'react';
import { UserPlus, MessageSquarePlus, Share2, MessageSquareText } from 'lucide-react';

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create an account in seconds with just your email. No personal info required.",
      icon: <UserPlus size={20} />
    },
    {
      number: 2,
      title: "Create a Room",
      description: "Start a new chat room for your team, project, or friends.",
      icon: <MessageSquarePlus size={20} />
    },
    {
      number: 3,
      title: "Invite Other Users",
      description: "Invite others with a simple invitation, no need for complex codes.",
      icon: <Share2 size={20} />
    },
    {
      number: 4,
      title: "Start Chatting",
      description: "Begin real-time conversations with texts, images, files, and more.",
      icon: <MessageSquareText size={20} />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with YapChat is simple. Just follow these steps:
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;