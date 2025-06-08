
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Brain, Users, Target, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '../components/FeatureCard';
import TypewriterEffect from '../components/TypewriterEffect';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Get personalized tutoring from advanced AI that adapts to your learning style and pace."
    },
    {
      icon: Users,
      title: "Join Your House",
      description: "Be sorted into magical houses and compete with fellow learners in exciting challenges."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Set clear objectives and track your progress with our comprehensive learning analytics."
    },
    {
      icon: BookOpen,
      title: "Vast Library",
      description: "Access thousands of courses across multiple subjects and skill levels."
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Earn badges, points, and recognition as you master new skills and knowledge."
    }
  ];

  const typewriterTexts = [
    "Learn at your own pace and achieve your goals",
    "Master new skills with AI-powered guidance",
    "Join a magical community of learners",
    "Transform your learning journey today",
    "Unlock your potential with personalized education"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/42ee77d6-a65b-4ae2-bf06-d09090895e66.png')"
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Magical particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-35" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-60 right-10 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-25" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Star className="w-10 h-10 text-yellow-600" />
            <span className="text-3xl font-bold text-yellow-600">WizLearn</span>
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
              className="bg-yellow-600 text-black hover:bg-yellow-700 transition-all duration-300"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-600 mb-8 leading-tight">
            Welcome to the<br />
            <span className="text-white">Magical World</span><br />
            of Learning
          </h1>
          
          <div className="mb-12 h-16 flex items-center justify-center">
            <TypewriterEffect 
              texts={typewriterTexts}
              speed={80}
              pauseTime={2500}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => navigate('/signup')}
              className="bg-yellow-600 text-black hover:bg-yellow-700 transition-all duration-300 text-xl px-10 py-6 font-bold group"
            >
              Start Your Journey
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => navigate('/login')}
              variant="outline"
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300 text-xl px-10 py-6 font-bold"
            >
              I Already Have an Account
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-6">
              Why Choose WizLearn?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the magic of personalized learning with cutting-edge AI technology
              and a supportive community of learners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Begin Your
            <span className="text-yellow-600"> Magical Learning Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of students who have already transformed their learning experience
          </p>
          <Button
            onClick={() => navigate('/signup')}
            className="bg-yellow-600 text-black hover:bg-yellow-700 transition-all duration-300 text-xl px-12 py-6 font-bold group"
          >
            Get Started Now
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
                <span className="text-2xl font-bold text-yellow-600">WizLearn</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming education through AI-powered personalized learning experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 WizLearn. All rights reserved. Made with ✨ for magical learning experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
