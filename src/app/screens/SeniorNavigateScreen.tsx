import { useNavigate } from 'react-router';
import { ArrowLeft, Mic, MapPin } from 'lucide-react';

export default function SeniorNavigateScreen() {
  const navigate = useNavigate();

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
          <h1 className="text-white text-[32px] font-bold">Map 🗺️</h1>
        </div>
      </div>

      <div className="px-6 mt-8 space-y-6">
        {/* Current Location */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-4 mb-6">
            <MapPin className="w-10 h-10 text-[#1A5C45]" />
            <h2 className="text-[26px] font-bold text-gray-900">
              Your Location
            </h2>
          </div>
          <p className="text-2xl text-gray-700 mb-6">
            Terminal 3, Dubai Airport
          </p>
          <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-xl text-gray-600">You are here</p>
            </div>
          </div>
        </div>

        {/* Gate Information */}
        <div className="bg-[#1A5C45] text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-[26px] font-bold mb-6">Your Gate</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl">Gate Number:</span>
              <span className="text-[48px] font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl">Distance:</span>
              <span className="text-2xl font-bold">300 meters</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl">Walking Time:</span>
              <span className="text-2xl font-bold">5 minutes</span>
            </div>
          </div>
        </div>

        {/* Directions */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h2 className="text-[26px] font-bold text-gray-900 mb-6">
            Simple Directions
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1A5C45] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-2xl text-gray-900 font-semibold">
                  Walk straight ahead
                </p>
                <p className="text-xl text-gray-600 mt-2">200 meters</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1A5C45] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-2xl text-gray-900 font-semibold">
                  Turn right at Coffee Shop
                </p>
                <p className="text-xl text-gray-600 mt-2">Look for ☕ sign</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1A5C45] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="text-2xl text-gray-900 font-semibold">
                  Gate 12 on your left
                </p>
                <p className="text-xl text-gray-600 mt-2">100 meters ahead</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <button className="w-full bg-[#1A5C45] text-white py-6 rounded-2xl font-bold text-2xl hover:bg-[#154835] transition-colors flex items-center justify-center gap-3">
          <Mic className="w-8 h-8" />
          Voice Directions
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
          <button className="flex flex-col items-center gap-2">
            <div className="text-[#1A5C45]">
              <MapPin className="w-8 h-8" />
            </div>
            <span className="text-lg font-semibold text-[#1A5C45]">Map</span>
          </button>
          <button
            onClick={() => navigate('/senior-profile')}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-gray-500">
              <span className="text-3xl">👤</span>
            </div>
            <span className="text-lg text-gray-500">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
