import { useNavigate } from 'react-router';
import { User, GraduationCap, Users } from 'lucide-react';
import { useUserMode } from '../context/UserModeContext';

export default function OnboardingScreen() {
  const navigate = useNavigate();
  const { setUserMode, setUserName } = useUserMode();

  const modes = [
    {
      icon: <User className="w-12 h-12" />,
      title: 'Senior Travel Mode',
      subtitle: 'Simplified interface with larger text & voice help',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
      path: '/senior-home',
      mode: 'senior' as const,
      name: 'Meena',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Student Travel Mode',
      subtitle: 'Visa help, packing list & translation tools',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      path: '/student-home',
      mode: 'student' as const,
      name: 'Ayaan',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Family Travel Mode',
      subtitle: 'Kid-friendly stays, budget planner & Kids Zone',
      color: 'bg-green-50',
      iconColor: 'text-[#1A5C45]',
      path: '/home',
      mode: 'family' as const,
      name: 'Sarah',
    },
  ];

  const handleModeSelect = (path: string, mode: 'senior' | 'student' | 'family', name: string) => {
    setUserMode(mode);
    setUserName(name);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] flex flex-col max-w-[390px] mx-auto">
      <div className="relative h-[280px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBzdW5zZXR8ZW58MXx8fHwxNzczMDExMDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F7F5F2]" />
      </div>
      <div className="flex-1 px-6 -mt-8 pb-8">
        <h1 className="text-[28px] font-bold text-gray-900 mb-2">Welcome to TravelEase</h1>
        <p className="text-gray-600 mb-6">Select your travel profile to get a personalised experience</p>
        <div className="space-y-4">
          {modes.map((mode) => (
            <button
              key={mode.title}
              onClick={() => handleModeSelect(mode.path, mode.mode, mode.name)}
              className="w-full bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all hover:scale-[1.01] flex items-start gap-4 text-left"
            >
              <div className={`${mode.color} ${mode.iconColor} p-4 rounded-xl flex-shrink-0`}>{mode.icon}</div>
              <div className="flex-1">
                <h3 className="text-[20px] font-semibold text-gray-900 mb-1">{mode.title}</h3>
                <p className="text-gray-500 text-sm">{mode.subtitle}</p>
              </div>
              <div className="text-gray-300 self-center text-2xl">›</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
