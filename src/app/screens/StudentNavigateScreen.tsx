import { Camera, MapPin, ArrowRight } from 'lucide-react';
import StudentBottomNav from '../components/StudentBottomNav';

// STUDENT MODE ONLY — Ayaan's airport navigation
export default function StudentNavigateScreen() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-24 max-w-[390px] mx-auto relative">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1762801157192-04ed43daa37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBtYXB8ZW58MXx8fHwxNzczMDExMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Airport Map" className="w-full h-full object-cover opacity-40" />
      </div>

      <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-[#1A3A5C]" />
        <span className="text-sm font-medium text-gray-900">Frankfurt Airport — Terminal 1</span>
      </div>

      {/* AR toggle */}
      <button className="absolute top-20 right-6 z-10 bg-[#1A3A5C] text-white p-4 rounded-full shadow-lg hover:bg-[#152d47] transition-colors">
        <Camera className="w-6 h-6" />
      </button>

      {/* Quick Translate floating button */}
      <button className="absolute top-20 left-6 z-10 bg-yellow-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors flex items-center gap-2 text-sm font-semibold">
        🌐 Quick Translate
      </button>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          <div className="w-24 h-24 bg-[#1A3A5C]/20 rounded-full flex items-center justify-center animate-pulse">
            <ArrowRight className="w-16 h-16 text-[#1A3A5C] rotate-45" strokeWidth={3} />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full text-xs font-medium shadow-md">Gate 7</div>
        </div>
      </div>

      <div className="absolute bottom-20 left-0 right-0 z-10 px-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="bg-[#1A3A5C] text-white px-4 py-2 rounded-xl font-semibold text-lg">7</div>
            <div className="flex-1">
              <h2 className="text-[22px] font-semibold text-gray-900 mb-1">Gate 7 — Terminal 1</h2>
              <p className="text-gray-700 mb-4">Walk straight 150m, then turn left</p>
              <div className="flex gap-2">
                <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center">⏱️ 4 min walk</div>
                <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center">📍 150m away</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StudentBottomNav />
    </div>
  );
}
