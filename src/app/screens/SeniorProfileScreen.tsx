import { useNavigate } from 'react-router';
import { User, GraduationCap, Users, ArrowLeft } from 'lucide-react';
import { useUserMode } from '../context/UserModeContext';

export default function SeniorProfileScreen() {
  const navigate = useNavigate();
  const { userMode, setUserMode, userName } = useUserMode();

  const modes = [
    {
      id: 'senior' as const,
      icon: <User className="w-10 h-10" />,
      title: 'Senior Travel Mode',
      subtitle: 'Large text, simplified',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-600',
    },
    {
      id: 'student' as const,
      icon: <GraduationCap className="w-10 h-10" />,
      title: 'Student Travel Mode',
      subtitle: 'Budget-friendly options',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-600',
    },
    {
      id: 'family' as const,
      icon: <Users className="w-10 h-10" />,
      title: 'Family Travel Mode',
      subtitle: 'Kid-friendly features',
      color: 'bg-green-50',
      iconColor: 'text-[#1A5C45]',
      borderColor: 'border-[#1A5C45]',
    },
  ];

  const handleModeChange = (modeId: 'senior' | 'student' | 'family') => {
    setUserMode(modeId);
    if (modeId === 'senior') {
      navigate('/senior-home');
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] max-w-[390px] mx-auto pb-24">
      {/* Header */}
      <div className="bg-[#1A5C45] px-6 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          <h1 className="text-white text-[32px] font-bold">Profile 👤</h1>
        </div>
      </div>

      <div className="px-6 mt-8 space-y-6">
        {/* User Info */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#1A5C45] rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {userName.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="text-[26px] font-bold text-gray-900">{userName}</h2>
              <p className="text-xl text-gray-600 capitalize mt-1">{userMode} Mode</p>
            </div>
          </div>
        </div>

        {/* Settings Options */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h2 className="text-[26px] font-bold text-gray-900 mb-6">
            Help & Settings
          </h2>
          <div className="space-y-4">
            <button className="w-full rounded-xl p-6 flex items-center gap-4 text-left transition-all bg-gray-50 border-2 border-transparent hover:bg-gray-100">
              <div className="bg-blue-50 text-blue-600 p-4 rounded-lg">
                <span className="text-2xl">🗣️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Voice Assistant</h3>
                <p className="text-lg text-gray-600 mt-1">Configure voice help</p>
              </div>
            </button>
            <button className="w-full rounded-xl p-6 flex items-center gap-4 text-left transition-all bg-gray-50 border-2 border-transparent hover:bg-gray-100">
              <div className="bg-orange-50 text-orange-600 p-4 rounded-lg">
                 <span className="text-2xl">🔍</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Text Size</h3>
                <p className="text-lg text-gray-600 mt-1">Make text bigger</p>
              </div>
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.clear();
            navigate('/');
          }}
          className="w-full bg-red-50 text-red-600 py-6 rounded-2xl font-bold text-2xl hover:bg-red-100 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Simplified Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-6 py-4 max-w-[390px] mx-auto">
        <div className="flex justify-around items-center">
          <button
            onClick={() => navigate('/senior-home')}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-gray-500">
              <span className="text-3xl">🏠</span>
            </div>
            <span className="text-lg text-gray-500">Home</span>
          </button>
          <button
            onClick={() => navigate('/senior-navigate')}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-gray-500">
              <span className="text-3xl">🗺️</span>
            </div>
            <span className="text-lg text-gray-500">Map</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="text-[#1A5C45]">
              <span className="text-3xl">👤</span>
            </div>
            <span className="text-lg font-semibold text-[#1A5C45]">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
