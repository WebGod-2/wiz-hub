
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, LogOut, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RootState } from '../store';
import { logout } from '../store/authSlice';

const Library = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const resources = [
    {
      title: 'Spellcrafting',
      description: 'Learn the theory and casting of spells'
    },
    {
      title: 'Transfiguration',
      description: 'Study the art of changing the form of objects'
    },
    {
      title: 'Muggle Studies',
      description: 'Explore the customs of the non-magical world'
    }
  ];

  const chapters = [
    'Basics of Spellcasting',
    'Wand Movements',
    'Incantations',
    'Magical Focus'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop')"
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-yellow-600" />
              <span className="text-2xl font-bold text-yellow-600">WizLearn</span>
            </div>
            
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm md:text-base">
              <button onClick={() => navigate('/home')} className="text-gray-300 hover:text-yellow-600 transition-colors">Home</button>
              <button onClick={() => navigate('/subjects')} className="text-gray-300 hover:text-yellow-600 transition-colors">Subjects</button>
              <button onClick={() => navigate('/clans')} className="text-gray-300 hover:text-yellow-600 transition-colors">Clans</button>
              <button onClick={() => navigate('/challenges')} className="text-gray-300 hover:text-yellow-600 transition-colors">Challenges</button>
              <button onClick={() => navigate('/leaderboard')} className="text-gray-300 hover:text-yellow-600 transition-colors">Leaderboard</button>
              <button className="text-yellow-600 font-semibold">Library</button>
              <button onClick={() => navigate('/profile')} className="text-gray-300 hover:text-yellow-600 transition-colors">Profile</button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 hidden sm:block text-sm md:text-base">Welcome, {user?.name}!</span>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm md:text-base">{user?.name?.charAt(0) || 'U'}</span>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-8">Resources</h1>
          
          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-yellow-600/50 transition-all duration-300 cursor-pointer group">
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-yellow-600 mb-3">{resource.title}</h3>
                  <p className="text-gray-300 text-sm">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Spellcrafting Section */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">Spellcrafting</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Chapters</h3>
              <div className="space-y-3">
                {chapters.map((chapter, index) => (
                  <div key={index} className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-yellow-600/50 transition-all duration-300 cursor-pointer">
                    <h4 className="text-lg font-medium text-white">{chapter}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Basics of Spellcasting Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">Basics of Spellcasting</h2>
            
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Introduction to Spellcasting</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Spellcasting is the art of using gestures and incantations to achieve magical effects. This fundamental skill forms the backbone of all magical practice and requires dedication, precision, and understanding of magical theory.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Library;
