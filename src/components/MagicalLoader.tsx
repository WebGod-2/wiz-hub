
import React from 'react';

const MagicalLoader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-6">
          {/* Sorting Hat SVG */}
          <div className="w-24 h-24 mx-auto animate-bounce">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-yellow-600 drop-shadow-lg"
              fill="currentColor"
            >
              <path d="M50 15 C30 15, 20 25, 20 35 C20 45, 25 55, 30 65 L35 75 L65 75 L70 65 C75 55, 80 45, 80 35 C80 25, 70 15, 50 15 Z" />
              <path d="M35 75 L40 85 L60 85 L65 75" fill="currentColor" opacity="0.8" />
              <circle cx="45" cy="40" r="2" fill="#1a1a1a" />
              <circle cx="55" cy="40" r="2" fill="#1a1a1a" />
              <path d="M45 50 Q50 55 55 50" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          
          {/* Magical sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-6 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        <div className="text-yellow-600 text-lg font-semibold animate-pulse">
          Summoning Magic...
        </div>
        
        <div className="mt-2 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MagicalLoader;
