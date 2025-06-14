import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, LogOut, Shield, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RootState } from '../store';
import { logout } from '../store/authSlice';

const Challenges = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const clansData = [
    {
      id: 'A',
      name: 'Clan A',
      xp: 800,
      banner: '🦁',
      color: 'bg-gradient-to-br from-amber-900/40 to-yellow-900/40',
      borderColor: 'border-amber-600',
      president: {
        name: 'President',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
      },
      vicePresident: {
        name: 'Vice President',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'
      },
      isUserClan: true,
      actions: ['Fight', 'Surrender']
    },
    {
      id: 'B',
      name: 'Clan B',
      xp: 950,
      color: 'bg-gradient-to-br from-gray-800/60 to-gray-900/60',
      borderColor: 'border-amber-600',
      president: {
        name: 'President',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
      },
      members: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
      ],
      actions: ['Challenge Clan']
    },
    {
      id: 'C',
      name: 'Clan C',
      xp: 760,
      color: 'bg-gradient-to-br from-gray-800/60 to-gray-900/60',
      borderColor: 'border-amber-600',
      vicePresident: {
        name: 'Vice President',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'
      },
      members: [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
      ],
      actions: ['Challenge Clan']
    },
    {
      id: 'D1',
      name: 'Clan D',
      xp: 650,
      color: 'bg-gradient-to-br from-gray-800/60 to-gray-900/60',
      borderColor: 'border-amber-600',
      president: {
        name: 'President',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
      },
      vicePresident: {
        name: 'Vice President',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
      },
      members: [
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
      ],
      actions: ['Challenge Clan']
    },
    {
      id: 'D2',
      name: 'Clan D',
      xp: 720,
      color: 'bg-gradient-to-br from-gray-800/60 to-gray-900/60',
      borderColor: 'border-amber-600',
      president: {
        name: 'President',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
      },
      vicePresident: {
        name: 'Vice President',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
      },
      members: [
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
      ],
      actions: ['Challenge Clan']
    },
    {
      id: 'E',
      name: 'Clan E',
      xp: 580,
      color: 'bg-gradient-to-br from-gray-800/60 to-gray-900/60',
      borderColor: 'border-amber-600',
      president: {
        name: 'President',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
      },
      members: [
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
      ],
      actions: ['Challenge Clan']
    }
  ];

  const renderMainClanCard = (clan) => (
    <div 
      key={clan.id} 
      className={`${clan.color} ${clan.borderColor} border-4 rounded-2xl p-8 backdrop-blur-sm col-span-full shadow-2xl relative overflow-hidden`}
      style={{
        boxShadow: '0 0 30px rgba(217, 119, 6, 0.3), inset 0 0 20px rgba(217, 119, 6, 0.1)'
      }}
    >
      {/* Ornate corner decorations */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-amber-600 rounded-tl-lg"></div>
      <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-amber-600 rounded-tr-lg"></div>
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-amber-600 rounded-bl-lg"></div>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-amber-600 rounded-br-lg"></div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Banner and Info */}
        <div className="flex items-start space-x-6">
          {/* Clan Banner */}
          <div className="relative">
            <div className="w-24 h-32 bg-gradient-to-b from-amber-800 to-amber-900 rounded-xl flex items-center justify-center text-5xl border-4 border-amber-600 shadow-lg">
              {clan.banner}
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-amber-800 rounded-b-lg border-2 border-amber-600"></div>
          </div>

          {/* Clan Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-5xl font-bold text-amber-300 mb-4 tracking-wider font-cinzel">{clan.name}</h3>
              <div className="text-right">
                <span className="text-amber-300 text-2xl font-bold font-inter">XP: {clan.xp}</span>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="space-y-4">
              {clan.president && (
                <div className="flex items-center space-x-4">
                  <Crown className="w-6 h-6 text-amber-400" />
                  <span className="text-amber-300 text-lg font-semibold font-inter">President</span>
                  <div className="flex items-center space-x-3">
                    <Crown className="w-5 h-5 text-amber-400" />
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-amber-500 shadow-lg">
                      <img src={clan.president.avatar} alt="President" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-amber-100 text-lg font-medium font-inter">President</span>
                  </div>
                </div>
              )}
              
              {clan.vicePresident && (
                <div className="flex items-center space-x-4">
                  <Shield className="w-6 h-6 text-amber-400" />
                  <span className="text-amber-300 text-lg font-semibold font-inter">Vice President</span>
                  <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-amber-400">
                    <img src={clan.vicePresident.avatar} alt="Vice President" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex flex-col justify-center space-y-4 lg:min-w-[300px]">
          {clan.actions.map((action, index) => (
            <Button
              key={index}
              className={`px-12 py-4 rounded-xl text-lg font-bold tracking-wider transition-all duration-300 shadow-lg font-inter ${
                action === 'Fight' 
                  ? 'bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white border-4 border-blue-500' 
                  : action === 'Surrender'
                  ? 'bg-gradient-to-r from-orange-700 to-orange-800 hover:from-orange-600 hover:to-orange-700 text-white border-4 border-orange-500'
                  : 'bg-transparent border-4 border-amber-500 text-amber-300 hover:bg-amber-600 hover:text-black'
              }`}
              style={{
                boxShadow: action === 'Fight' ? '0 4px 15px rgba(59, 130, 246, 0.4)' : 
                           action === 'Surrender' ? '0 4px 15px rgba(249, 115, 22, 0.4)' :
                           '0 4px 15px rgba(217, 119, 6, 0.4)'
              }}
            >
              {action}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderClanCard = (clan) => (
    <div 
      key={clan.id} 
      className={`${clan.color} ${clan.borderColor} border-3 rounded-xl p-6 backdrop-blur-sm shadow-xl relative`}
      style={{
        boxShadow: '0 0 20px rgba(217, 119, 6, 0.2), inset 0 0 10px rgba(217, 119, 6, 0.05)'
      }}
    >
      {/* Corner decorations */}
      <div className="absolute top-1 left-1 w-6 h-6 border-l-3 border-t-3 border-amber-600 rounded-tl-lg"></div>
      <div className="absolute top-1 right-1 w-6 h-6 border-r-3 border-t-3 border-amber-600 rounded-tr-lg"></div>
      <div className="absolute bottom-1 left-1 w-6 h-6 border-l-3 border-b-3 border-amber-600 rounded-bl-lg"></div>
      <div className="absolute bottom-1 right-1 w-6 h-6 border-r-3 border-b-3 border-amber-600 rounded-br-lg"></div>

      {/* Clan Header */}
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-3xl font-bold text-amber-300 tracking-wide font-cinzel">{clan.name}</h3>
        <div className="flex items-center space-x-2">
          <Crown className="w-5 h-5 text-amber-400" />
          <span className="text-amber-300 text-xl font-bold font-inter">{clan.xp}</span>
        </div>
      </div>

      {/* Leadership and Members */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          {clan.president && (
            <div className="flex items-center space-x-3">
              <span className="text-amber-300 text-sm font-semibold font-inter">President</span>
              <Crown className="w-4 h-4 text-amber-400" />
            </div>
          )}
          {clan.vicePresident && (
            <div className="flex items-center space-x-3">
              <span className="text-amber-300 text-sm font-semibold font-inter">Vice President</span>
              <Shield className="w-4 h-4 text-amber-400" />
            </div>
          )}
        </div>

        {/* Avatar Row */}
        <div className="flex space-x-3">
          {clan.president && (
            <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-amber-500">
              <img src={clan.president.avatar} alt="President" className="w-full h-full object-cover" />
            </div>
          )}
          {clan.vicePresident && (
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400">
              <img src={clan.vicePresident.avatar} alt="Vice President" className="w-full h-full object-cover" />
            </div>
          )}
          {clan.members && clan.members.map((memberAvatar, index) => (
            <div key={index} className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-400">
              <img src={memberAvatar} alt={`Member ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center">
        {clan.actions.map((action, index) => (
          <Button
            key={index}
            className="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent border-3 border-amber-500 text-amber-300 hover:bg-amber-600 hover:text-black shadow-lg font-inter"
            style={{
              boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)'
            }}
          >
            {action}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative font-inter">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')"
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6 border-b border-amber-800/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-yellow-600" />
              <span className="text-2xl font-bold text-yellow-600 font-cinzel">WizLearn</span>
            </div>
            
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm md:text-base font-inter">
              <button onClick={() => navigate('/home')} className="text-gray-300 hover:text-yellow-600 transition-colors">Home</button>
              <button onClick={() => navigate('/subjects')} className="text-gray-300 hover:text-yellow-600 transition-colors">Subjects</button>
              <button onClick={() => navigate('/clans')} className="text-gray-300 hover:text-yellow-600 transition-colors">Clans</button>
              <button className="text-yellow-600 font-semibold">Challenges</button>
              <button onClick={() => navigate('/leaderboard')} className="text-gray-300 hover:text-yellow-600 transition-colors">Leaderboard</button>
              <button onClick={() => navigate('/library')} className="text-gray-300 hover:text-yellow-600 transition-colors">Library</button>
              <button onClick={() => navigate('/profile')} className="text-gray-300 hover:text-yellow-600 transition-colors">Profile</button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 hidden sm:block text-sm md:text-base font-inter">Welcome, {user?.name}!</span>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm md:text-base font-inter">{user?.name?.charAt(0) || 'U'}</span>
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
          <h1 className="text-4xl md:text-6xl font-bold text-amber-300 mb-12 text-center tracking-wider font-cinzel">Clan Challenges</h1>
          
          {/* Main Clan Card */}
          <div className="mb-8">
            {renderMainClanCard(clansData[0])}
          </div>
          
          {/* Other Clans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clansData.slice(1).map((clan) => renderClanCard(clan))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Challenges;
