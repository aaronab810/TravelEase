import { useNavigate } from 'react-router';
import { Phone, Map, Mic } from 'lucide-react';

export default function SeniorHomeScreen() {
  const navigate = useNavigate();

  const checklist = [
    { item: 'Passport', checked: true },
    { item: 'Ticket', checked: true },
    { item: "Son's Number", checked: true },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F2] max-w-[390px] mx-auto">
      {/* Header Banner */}
      <div className="bg-[#1A5C45] px-6 pt-12 pb-8">
        <h1 className="text-white text-[32px] font-bold leading-tight">
          Namaste, Meena Ji 🙏
        </h1>
        <p className="text-white text-xl mt-2">Senior Travel Mode Active</p>
      </div>

      <div className="px-6 mt-8 space-y-6">
        {/* Checklist Card */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h2 className="text-[26px] font-bold text-gray-900 mb-6">
            Your Checklist
          </h2>
          <div className="space-y-4">
            {checklist.map((item) => (
              <div key={item.item} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#1A5C45] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <span className="text-xl text-gray-900">{item.item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call Son Button */}
        <button
          onClick={() => navigate("/airport-guidance")}
          className="w-full bg-[#1A5C45] text-white rounded-2xl p-8 shadow-lg hover:bg-[#154835] transition-colors flex items-center justify-center gap-4"
        >
          <Phone className="w-12 h-12" />
          <span className="text-[28px] font-bold">AIRPORT HELP</span>
        </button>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-6">
          <button
            onClick={() => navigate('/senior-navigate')}
            className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow"
          >
            <Map className="w-12 h-12 text-[#1A5C45] mb-3" />
            <span className="text-xl font-semibold text-gray-900">Map</span>
          </button>
          <button
            onClick={() => navigate('/senior-docs')}
            className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow"
          >
            <span className="text-5xl mb-3">📄</span>
            <span className="text-xl font-semibold text-gray-900 block">
              Documents
            </span>
          </button>
        </div>

        {/* Trip Info */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h3 className="text-[24px] font-bold text-gray-900 mb-4">
            Your Flight
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xl text-gray-600">From:</span>
              <span className="text-xl font-bold text-gray-900">India</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-gray-600">To:</span>
              <span className="text-xl font-bold text-gray-900">Dubai</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-gray-600">Gate:</span>
              <span className="text-xl font-bold text-[#1A5C45]">12</span>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Assistant Button */}
      <button className="fixed bottom-6 right-6 bg-[#1A5C45] text-white p-6 rounded-full shadow-xl hover:bg-[#154835] transition-colors animate-pulse">
        <Mic className="w-10 h-10" />
      </button>

      {/* Simplified Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-6 py-4 max-w-[390px] mx-auto">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-2">
            <div className="text-[#1A5C45]">
              <span className="text-3xl">🏠</span>
            </div>
            <span className="text-lg font-semibold text-[#1A5C45]">Home</span>
          </button>
          <button
            onClick={() => navigate('/senior-navigate')}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-gray-500">
              <Map className="w-8 h-8" />
            </div>
            <span className="text-lg text-gray-500">Map</span>
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
}// Note: SeniorHomeScreen already has airport guidance. In-flight accessible via airport-guidance -> inflight -> arrival flow.
