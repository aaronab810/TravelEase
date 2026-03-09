import { useNavigate } from 'react-router';
import { Phone } from 'lucide-react';

// SENIOR MODE ONLY — Meena's arrival in Dubai
export default function SeniorArrivalScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F5F2] max-w-[390px] mx-auto">
      {/* Success banner */}
      <div className="bg-[#1A5C45] px-6 pt-12 pb-8">
        <div className="bg-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 mb-4">
          <span className="text-2xl">✓</span>
          <p className="text-white text-xl font-semibold">Message sent to son: "Your mother has landed."</p>
        </div>
        <h1 className="text-white text-[32px] font-bold">You've Arrived! 🎉</h1>
        <p className="text-white/80 text-xl mt-1">Welcome to Dubai, Meena Ji</p>
      </div>

      <div className="px-6 mt-8 space-y-6">
        {/* Main direction card */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h2 className="text-[26px] font-bold text-gray-900 mb-6">What to do now</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1A5C45] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
              <div>
                <p className="text-2xl text-gray-900 font-semibold">Collect your baggage</p>
                <p className="text-xl text-gray-600 mt-1">Carousel 4 — Flight EK</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold">3</span>
              </div>
              <div>
                <p className="text-2xl text-gray-900 font-semibold">Go to Exit 3</p>
                <p className="text-xl text-gray-600 mt-1">Your son is waiting there</p>
              </div>
            </div>
          </div>
          {/* Big arrow */}
          <div className="mt-6 bg-orange-50 rounded-2xl p-6 flex items-center justify-center gap-4">
            <span className="text-6xl">→</span>
            <span className="text-[28px] font-bold text-orange-700">EXIT 3</span>
          </div>
        </div>

        {/* Call Son */}
        <button className="w-full bg-[#1A5C45] text-white rounded-2xl py-8 shadow-lg hover:bg-[#154835] transition-colors flex items-center justify-center gap-4">
          <Phone className="w-12 h-12" />
          <span className="text-[28px] font-bold">Call Son Now</span>
        </button>
      </div>

      {/* Simplified nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-6 py-4 max-w-[390px] mx-auto">
        <div className="flex justify-around items-center">
          <button onClick={() => navigate('/senior-home')} className="flex flex-col items-center gap-2">
            <span className="text-3xl">🏠</span><span className="text-lg text-gray-500">Home</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <span className="text-3xl text-[#1A5C45]">📍</span><span className="text-lg font-semibold text-[#1A5C45]">Arrival</span>
          </button>
          <button onClick={() => navigate('/senior-profile')} className="flex flex-col items-center gap-2">
            <span className="text-3xl">👤</span><span className="text-lg text-gray-500">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
