import { useNavigate } from 'react-router';
import { Search, Package, FileText, Languages, MapPin } from 'lucide-react';
import StudentBottomNav from '../components/StudentBottomNav';

// STUDENT MODE ONLY — Ayaan Verma
export default function StudentHomeScreen() {
  const navigate = useNavigate();

  const quickAccessItems = [
    { icon: <MapPin className="w-6 h-6" />, label: 'Navigate', path: '/student-navigate' },
    { icon: <FileText className="w-6 h-6" />, label: 'Doc Vault', path: '/docs' },
    { icon: <Languages className="w-6 h-6" />, label: 'Translate', path: '/translate' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-24 max-w-[390px] mx-auto">
      <div className="bg-[#1A3A5C] px-6 pt-12 pb-8 rounded-b-3xl">
        <h1 className="text-white text-[28px] font-bold mb-1">Ready to go, Ayaan? 🎓</h1>
        <p className="text-white/80 text-sm mb-6">Dubai → Frankfurt, Germany</p>
        <div className="bg-white rounded-xl flex items-center gap-3 px-4 py-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search flights, universities..." className="flex-1 outline-none text-gray-900 placeholder:text-gray-400" />
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Quick Access */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h2 className="text-[22px] font-semibold text-gray-900 mb-4">Quick Access</h2>
          <div className="grid grid-cols-3 gap-4">
            {quickAccessItems.map((item) => (
              <button key={item.label} onClick={() => navigate(item.path)} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-[#1A3A5C] text-white p-3 rounded-xl">{item.icon}</div>
                <span className="text-xs text-gray-700 text-center">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Your Journey */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h2 className="text-[22px] font-semibold text-gray-900 mb-4">Your Journey</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-semibold text-gray-900">Dubai</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-lg font-semibold text-gray-900">Frankfurt</span>
                </div>
                <p className="text-gray-600">Flight LH631 • Gate 7 • Terminal 3</p>
              </div>
              <div className="bg-[#1A3A5C] text-white px-3 py-1 rounded-full text-sm font-medium">7h 10m</div>
            </div>
            <button onClick={() => navigate('/student-navigate')} className="w-full bg-[#1A3A5C] text-white py-3 rounded-xl font-medium hover:bg-[#152d47] transition-colors">
              Navigate to Gate
            </button>
          </div>
        </div>

        {/* Student-specific actions only */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => navigate('/packing-list')} className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow text-left">
            <div className="text-2xl mb-2">🎒</div>
            <h3 className="font-semibold text-gray-900 mb-1">Packing List</h3>
            <p className="text-xs text-gray-600">8 of 12 packed</p>
          </button>
          <button onClick={() => navigate('/student-services')} className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow text-left">
            <div className="text-2xl mb-2">🚕</div>
            <h3 className="font-semibold text-gray-900 mb-1">Transport</h3>
            <p className="text-xs text-gray-600">Get to university</p>
          </button>
        </div>

        {/* Arrival checklist card */}
        <button onClick={() => navigate('/arrival-steps')} className="w-full bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow text-left flex items-center gap-4">
          <div className="text-2xl">✅</div>
          <div>
            <h3 className="font-semibold text-gray-900">Arrival Steps</h3>
            <p className="text-xs text-gray-600">Immigration → Baggage → SIM → Uni</p>
          </div>
          <div className="ml-auto bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">4 Steps</div>
        </button>
      </div>

      <StudentBottomNav />
    </div>
  );
}
