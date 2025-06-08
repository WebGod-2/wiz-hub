
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RootState } from '../store';
import { logout } from '../store/authSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const subjects = [
    {
      title: 'UPSC',
      description: 'Learn from your personal AI tutor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      title: 'Engineering',
      description: 'Learn from your personal AI tutor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      title: 'Medical',
      description: 'Learn from your personal AI tutor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      title: 'Aptitude',
      description: 'Learn from your personal AI tutor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      title: 'IELTS',
      description: 'Learn from your personal AI tutor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      title: 'Programming',
      description: 'Learn from your personal AI tutor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const clans = [
    { name: 'Drahendow', color: 'bg-blue-900', icon: '🐉' },
    { name: 'Locisdorm', color: 'bg-yellow-700', icon: '🦁' },
    { name: 'Bodgespett', color: 'bg-yellow-600', icon: '🦡' },
    { name: 'Gryphonline', color: 'bg-red-800', icon: '🐍' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/42ee77d6-a65b-4ae2-bf06-d09090895e66.png')"
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-yellow-600" />
              <span className="text-2xl font-bold text-yellow-600">WizLearn</span>
            </div>
            
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm md:text-base">
              <button className="text-yellow-600 font-semibold">Home</button>
              <button onClick={() => navigate('/subjects')} className="text-gray-300 hover:text-yellow-600 transition-colors">Subjects</button>
              <button className="text-gray-300 hover:text-yellow-600 transition-colors">My Clan</button>
              <button className="text-gray-300 hover:text-yellow-600 transition-colors">Challenges</button>
              <button className="text-gray-300 hover:text-yellow-600 transition-colors">Leaderboard</button>
              <button className="text-gray-300 hover:text-yellow-600 transition-colors">Library</button>
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-3">
              {/* Welcome Section */}
              <div className="mb-8 md:mb-12">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-600 mb-4 leading-tight">
                  Welcome to<br />WizLearn
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                  Learn with AI tutors and<br className="hidden md:block" />master your subjects.
                </p>
              </div>

              {/* Popular Subjects */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Popular Subjects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {subjects.map((subject, index) => (
                    <div key={index} className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 hover:border-yellow-600/50 transition-all duration-300 cursor-pointer group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-3 md:mb-4 overflow-hidden border-2 border-yellow-600/30 group-hover:border-yellow-600 transition-colors">
                          <img 
                            src={subject.image} 
                            alt={subject.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{subject.title}</h3>
                        <p className="text-gray-400 text-xs md:text-sm">{subject.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              {/* Your Clan */}
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Your Clan</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {clans.map((clan, index) => (
                    <div key={index} className={`${clan.color} rounded-lg p-3 md:p-4 text-center cursor-pointer hover:scale-105 transition-transform`}>
                      <div className="text-xl md:text-2xl mb-2">{clan.icon}</div>
                      <div className="text-white text-xs md:text-sm font-semibold">{clan.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge a Friend */}
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Challenge a Friend</h3>
                <Button className="w-full bg-yellow-600 text-black hover:bg-yellow-700 transition-all duration-300 font-semibold text-sm md:text-base py-2 md:py-3">
                  Start Challenge
                </Button>
                
                <div className="mt-4 md:mt-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full overflow-hidden border-2 border-yellow-600/30">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                      alt="Friend"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
