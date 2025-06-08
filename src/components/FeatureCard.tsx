
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-yellow-600/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600/20 rounded-full mb-6 group-hover:bg-yellow-600/30 transition-colors duration-300">
          <Icon className="w-8 h-8 text-yellow-600" />
        </div>
        <h3 className="text-2xl font-bold text-yellow-600 mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
