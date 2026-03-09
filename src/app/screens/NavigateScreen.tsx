import { Camera, MapPin, ArrowRight } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function NavigateScreen() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-24 max-w-[390px] mx-auto relative">
      {/* Map Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1762801157192-04ed43daa37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBtYXB8ZW58MXx8fHwxNzczMDExMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Airport Map"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Status Bar */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-[#1A5C45]" />
        <span className="text-sm font-medium text-gray-900">
          Current location confirmed
        </span>
      </div>

      {/* AR Toggle Button */}
      <button className="absolute top-20 right-6 z-10 bg-[#1A5C45] text-white p-4 rounded-full shadow-lg hover:bg-[#154835] transition-colors">
        <Camera className="w-6 h-6" />
      </button>

      {/* Map Overlay - Directional Arrow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          <div className="w-24 h-24 bg-[#1A5C45]/20 rounded-full flex items-center justify-center animate-pulse">
            <ArrowRight className="w-16 h-16 text-[#1A5C45] rotate-45" strokeWidth={3} />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
            Family Restroom
          </div>
        </div>
      </div>

      {/* Bottom Info Card */}
      <div className="absolute bottom-20 left-0 right-0 z-10 px-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="bg-[#1A5C45] text-white px-4 py-2 rounded-xl font-semibold text-lg">
              12
            </div>
            <div className="flex-1">
              <h2 className="text-[22px] font-semibold text-gray-900 mb-1">
                Gate 12 — Terminal A
              </h2>
              <p className="text-gray-700 mb-4">
                Walk straight 100m, then turn right
              </p>
              <div className="flex gap-2">
                <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center">
                  ⏱️ 3 min walk
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center">
                  📍 100m away
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Points */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-2">Nearby facilities:</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                🚻 Restroom - 20m
              </span>
              <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">
                ☕ Café - 45m
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                🛒 Duty Free - 60m
              </span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
