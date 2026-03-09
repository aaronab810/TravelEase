import { useNavigate } from 'react-router';
import { Phone } from 'lucide-react';

// SENIOR MODE ONLY — Meena's in-flight screen
export default function SeniorInFlightScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#1a2744] max-w-[390px] mx-auto flex flex-col">
      {/* Stars decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white rounded-full opacity-60" style={{ top: `${Math.random() * 40}%`, left: `${Math.random() * 100}%` }} />
        ))}
      </div>

      <div className="relative z-10 flex flex-col flex-1 px-6 pt-16 pb-10">
        {/* Status */}
        <div className="text-center mb-10">
          <div className="text-7xl mb-4">✈️</div>
          <h1 className="text-white text-[32px] font-bold leading-tight mb-2">Safely Boarded<br />the Plane</h1>
          <p className="text-white/70 text-xl">Flight to Dubai is on its way</p>
        </div>

        {/* Message preview */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8">
          <p className="text-white/70 text-lg mb-2">Pre-written message:</p>
          <p className="text-white text-[22px] font-semibold">"I have boarded safely. ✓"</p>
        </div>

        {/* Giant Call Son button */}
        <button
          onClick={() => navigate('/senior-arrival')}
          className="w-full bg-[#1A5C45] text-white rounded-2xl py-8 shadow-2xl hover:bg-[#154835] transition-colors flex items-center justify-center gap-4 mb-6"
        >
          <Phone className="w-14 h-14" />
          <span className="text-[32px] font-bold">CALL SON</span>
        </button>

        <p className="text-white/50 text-center text-lg">Tap to send message & call</p>
      </div>

      {/* Simplified nav — 3 tabs only, large */}
      <div className="bg-black/30 border-t border-white/10 px-6 py-4">
        <div className="flex justify-around items-center">
          <button onClick={() => navigate('/senior-home')} className="flex flex-col items-center gap-2">
            <span className="text-3xl">🏠</span>
            <span className="text-white text-lg">Home</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <span className="text-3xl">✈️</span>
            <span className="text-white font-semibold text-lg">Flight</span>
          </button>
          <button onClick={() => navigate('/senior-profile')} className="flex flex-col items-center gap-2">
            <span className="text-3xl">👤</span>
            <span className="text-white text-lg">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
