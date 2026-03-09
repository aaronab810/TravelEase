import { useNavigate } from 'react-router';
import { Lock, Gamepad2, Film, BookOpen, Palette } from 'lucide-react';

export default function KidsZoneScreen() {
  const navigate = useNavigate();

  const activities = [
    { icon: <Gamepad2 className="w-12 h-12" />, label: 'Games', color: 'bg-purple-500' },
    { icon: <Film className="w-12 h-12" />, label: 'Movies', color: 'bg-red-500' },
    { icon: <BookOpen className="w-12 h-12" />, label: 'Stories', color: 'bg-blue-500' },
    { icon: <Palette className="w-12 h-12" />, label: 'Drawing', color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 max-w-[390px] mx-auto relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Parental Lock Badge */}
      <div className="absolute top-6 right-6 z-10 bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
        <Lock className="w-4 h-4" />
        <span className="text-sm font-bold">Parental Lock: ON</span>
      </div>

      <div className="relative z-10 px-6 pt-20">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-white text-[36px] font-bold mb-2">
            Kids Zone 🎮
          </h1>
          <p className="text-white/80 text-lg">Fun activities for the little ones!</p>
        </div>

        {/* Mascot Character */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/20">
            <div className="text-7xl animate-bounce">✈️</div>
          </div>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {activities.map((activity) => (
            <button
              key={activity.label}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all hover:scale-105 transform shadow-xl"
            >
              <div className={`${activity.color} text-white p-6 rounded-2xl mb-4 flex items-center justify-center`}>
                {activity.icon}
              </div>
              <p className="text-white text-xl font-bold text-center">
                {activity.label}
              </p>
            </button>
          ))}
        </div>

        {/* Screen Locked Banner */}
        <div className="bg-red-500 text-white rounded-2xl px-6 py-4 flex items-center justify-center gap-3 shadow-xl animate-pulse mb-8">
          <Lock className="w-6 h-6" />
          <span className="text-xl font-bold">Screen Locked 🔒</span>
        </div>

        {/* Exit for Parents */}
        <button
          onClick={() => navigate('/home')}
          className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold py-4 rounded-xl hover:bg-white/30 transition-colors"
        >
          Exit to Main Menu
        </button>

        {/* Fun Facts */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6">
          <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
            <span className="text-2xl">🌟</span>
            Did you know?
          </h3>
          <p className="text-white/90">
            Airplanes can fly over 30,000 feet high - that's higher than most mountains!
          </p>
        </div>
      </div>
    </div>
  );
}
