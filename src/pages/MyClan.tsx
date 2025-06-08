
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, LogOut, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RootState } from '../store';
import { logout } from '../store/authSlice';

const MyClan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

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
              <button className="text-yellow-600 font-semibold">Clans</button>
              <button onClick={() => navigate('/challenges')} className="text-gray-300 hover:text-yellow-600 transition-colors">Challenges</button>
              <button onClick={() => navigate('/leaderboard')} className="text-gray-300 hover:text-yellow-600 transition-colors">Leaderboard</button>
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Section */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-8">My Clan</h1>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <Button className="bg-transparent border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300 px-8 py-3">
                    Create Clan
                  </Button>
                  <Button className="bg-transparent border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300 px-8 py-3">
                    Join Clan
                  </Button>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">Challenge a Clan</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-lg mb-2">Select Topic</label>
                    <Select>
                      <SelectTrigger className="w-full bg-gray-900/50 border border-gray-700 text-white">
                        <SelectValue placeholder="Select Topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white text-lg mb-2">Select Subject</label>
                    <Select>
                      <SelectTrigger className="w-full bg-gray-900/50 border border-gray-700 text-white">
                        <SelectValue placeholder="Select Chapter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chapter1">Chapter 1</SelectItem>
                        <SelectItem value="chapter2">Chapter 2</SelectItem>
                        <SelectItem value="chapter3">Chapter 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="bg-yellow-600 text-black hover:bg-yellow-700 transition-all duration-300 px-8 py-3 mt-6">
                    Send Challenge
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Section - Clan Cards */}
            <div className="space-y-6">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-40 bg-gradient-to-b from-red-900 to-red-800 rounded-lg mb-4 flex items-center justify-center border-2 border-yellow-600/30">
                    <Shield className="w-16 h-16 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-600 mb-2">Gryffindor</h3>
                  <p className="text-gray-300 mb-2">Members: 4</p>
                  <p className="text-gray-300">Rank: 1st</p>
                </div>
              </div>

              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-40 bg-gradient-to-b from-yellow-700 to-yellow-600 rounded-lg mb-4 flex items-center justify-center border-2 border-yellow-600/30">
                    <Shield className="w-16 h-16 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-600 mb-2">Gryffindor</h3>
                  <p className="text-gray-300">Rank: 1st</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyClan;
