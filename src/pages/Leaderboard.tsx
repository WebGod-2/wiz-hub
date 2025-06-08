
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, LogOut, Trophy, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RootState } from '../store';
import { logout } from '../store/authSlice';

const Leaderboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState('Class');

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const leaderboardData = [
    { rank: 1, name: 'James Smith', points: '2540 XP', icon: Trophy },
    { rank: 2, name: 'Emma Johnson', points: '2300 XP', icon: Award },
    { rank: 3, name: 'Olivia Williams', points: '2190 XP' },
    { rank: 4, name: 'Janes Acaga', points: '1925 XP' },
    { rank: 5, name: 'Sazana Garier', points: '1780 XP' },
    { rank: 6, name: 'Eden Rinekhur', points: '1650 XP' },
    { rank: 7, name: 'Marina Janssen', points: '1540 XP' }
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
              <button className="text-yellow-600 font-semibold">Leaderboard</button>
              <button onClick={() => navigate('/library')} className="text-gray-300 hover:text-yellow-600 transition-colors">Library</button>
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-8">Leaderboard</h1>
          
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <Button 
              onClick={() => setActiveTab('Class')}
              className={`px-8 py-3 ${activeTab === 'Class' ? 'bg-yellow-600 text-black' : 'bg-transparent border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black'} transition-all duration-300`}
            >
              Class
            </Button>
            <Button 
              onClick={() => setActiveTab('Overall')}
              className={`px-8 py-3 ${activeTab === 'Overall' ? 'bg-yellow-600 text-black' : 'bg-transparent border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black'} transition-all duration-300`}
            >
              Overall
            </Button>
          </div>

          {/* Leaderboard List */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="space-y-4">
              {leaderboardData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 border-b border-gray-700 last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 flex justify-center">
                        {IconComponent ? (
                          <IconComponent className={`w-6 h-6 ${item.rank === 1 ? 'text-yellow-500' : 'text-gray-400'}`} />
                        ) : (
                          <span className="text-gray-400 text-lg font-bold">{item.rank}</span>
                        )}
                      </div>
                      <span className="text-white text-lg font-medium">{item.name}</span>
                    </div>
                    <span className="text-white text-lg font-bold">{item.points}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
