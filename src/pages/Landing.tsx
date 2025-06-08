
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ClipboardCheck, Swords, Star } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import TypewriterEffect from '../components/TypewriterEffect';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const navigate = useNavigate();

  const typewriterTexts = [
    "Learn at your own pace and achieve your goals.",
    "Master any subject with AI-powered tutoring.",
    "Unlock your potential with personalized learning.",
    "Transform your knowledge with magical education.",
    "Discover the future of intelligent learning."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Star className="w-8 h-8 text-yellow-600" />
            <span className="text-2xl font-bold text-yellow-600">WizLearn</span>
          </div>
          
          <div className="flex space-x-4">
            <Button
              onClick={() => navigate('/login')}
              variant="outline"
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate('/signup')}
              className="bg-yellow-600 text-black hover:bg-yellow-700 transition-all duration-300 font-semibold"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 z-10">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-60 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-8">
            <Star className="w-12 h-12 text-yellow-600 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-600 mb-8 leading-tight">
            WizLearn
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Master Subjects
            <br />
            <span className="text-gray-300">with Personal AI Tutors</span>
          </h2>
          
          <div className="mb-12 max-w-3xl mx-auto min-h-[80px] flex items-center justify-center">
            <TypewriterEffect texts={typewriterTexts} speed={80} pauseTime={3000} />
          </div>
          
          <Button
            onClick={() => navigate('/signup')}
            size="lg"
            className="bg-yellow-600 text-black hover:bg-yellow-700 transition-all duration-300 text-lg px-12 py-6 rounded-xl font-bold shadow-2xl hover:shadow-yellow-600/25"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={BookOpen}
              title="Upskill"
              description="Explore a wide range of subjects with personalized AI tutoring"
            />
            <FeatureCard
              icon={ClipboardCheck}
              title="Assess"
              description="Test your knowledge with intelligent quizzes and assessments"
            />
            <FeatureCard
              icon={Swords}
              title="Compete"
              description="Challenge your friends and classmates in friendly competitions"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Magical Learning Journey?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students already mastering subjects with AI
          </p>
          <Button
            onClick={() => navigate('/signup')}
            size="lg"
            className="bg-yellow-600 text-black hover:bg-yellow-700 transition-all duration-300 text-lg px-12 py-6 rounded-xl font-bold"
          >
            Start Learning Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-600" />
            <span className="text-xl font-bold text-yellow-600">WizLearn</span>
          </div>
          <p className="text-gray-400">© 2024 WizLearn. Empowering minds with magical AI tutoring.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
