
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RootState } from '../store';
import { logout } from '../store/authSlice';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const courseProgress = [
    { subject: 'UPSC', progress: 80 },
    { subject: 'Engineering', progress: 60 },
    { subject: 'Medical', progress: 45 },
    { subject: 'IELTS', progress: 30 }
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
              <button onClick={() => navigate('/library')} className="text-gray-300 hover:text-yellow-600 transition-colors">Library</button>
              <button className="text-yellow-600 font-semibold">Profile</button>
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Profile Info */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-64 h-80 rounded-xl mb-6 overflow-hidden border-2 border-yellow-600/30">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
                  {user?.name || 'James Smith'}
                </h1>
                <p className="text-gray-300 text-lg mb-2">{user?.email || 'james.smith@example.com'}</p>
                <p className="text-gray-400 mb-4">Student</p>
                
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                  <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center">
                    <span className="text-white text-xs">🦅</span>
                  </div>
                  <span className="text-white text-lg">Ravenclaw</span>
                </div>
                
                <p className="text-gray-300 text-lg">Total XP</p>
              </div>
            </div>

            {/* Course Progress */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-8">Course Progress</h2>
              
              <div className="space-y-6">
                {courseProgress.map((course, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-white">{course.subject}</h3>
                      <span className="text-yellow-600 font-bold text-lg">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-600 to-yellow-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
