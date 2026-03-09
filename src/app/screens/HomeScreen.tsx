import { useNavigate } from 'react-router';
import { Search, Map, FileText, Languages } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import { useUserMode } from '../context/UserModeContext';

// FAMILY MODE ONLY — Sarah Anderson
export default function HomeScreen() {
  const navigate = useNavigate();
  const { userName } = useUserMode();

  const quickAccessItems = [
    { icon: <Map className="w-6 h-6" />, label: 'Indoor Map', path: '/navigate' },
    { icon: <FileText className="w-6 h-6" />, label: 'Doc Vault', path: '/family-docs' },
    { icon: <Languages className="w-6 h-6" />, label: 'Translate', path: '/translate' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-24 max-w-[390px] mx-auto">
      <div className="bg-[#1A5C45] px-6 pt-12 pb-8 rounded-b-3xl">
        <h1 className="text-white text-[28px] font-bold mb-6">Where to next, {userName}?</h1>
        <div className="bg-white rounded-xl flex items-center gap-3 px-4 py-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search destinations, flights..." className="flex-1 outline-none text-gray-900 placeholder:text-gray-400" />
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Quick Access */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h2 className="text-[22px] font-semibold text-gray-900 mb-4">Quick Access</h2>
          <div className="grid grid-cols-3 gap-4">
            {quickAccessItems.map((item) => (
              <button key={item.label} onClick={() => navigate(item.path)} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-[#1A5C45] text-white p-3 rounded-xl">{item.icon}</div>
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
                  <span className="text-lg font-semibold text-gray-900">London</span>
                </div>
                <p className="text-gray-600">Flight EK007 • Gate 12 • Terminal A</p>
              </div>
              <div className="bg-[#1A5C45] text-white px-3 py-1 rounded-full text-sm font-medium">4h 20m</div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-2">
                <span>Departure in</span><span>4 hours 20 minutes</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#1A5C45] w-[30%]" />
              </div>
            </div>
            <button onClick={() => navigate('/navigate')} className="w-full bg-[#1A5C45] text-white py-3 rounded-xl font-medium hover:bg-[#154835] transition-colors">
              Navigate to Gate
            </button>
          </div>
        </div>

        {/* Family-specific actions only */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => navigate('/budget')} className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow text-left">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-gray-900 mb-1">Budget</h3>
            <p className="text-xs text-gray-600">$320 / $500</p>
          </button>
          <button onClick={() => navigate('/kids-zone')} className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow text-left">
            <div className="text-2xl mb-2">🎮</div>
            <h3 className="font-semibold text-gray-900 mb-1">Kids Zone</h3>
            <p className="text-xs text-gray-600">Keep kids entertained</p>
          </button>
        </div>

        {/* Baggage tracker — family only */}
        <button onClick={() => navigate('/baggage')} className="w-full bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow text-left flex items-center gap-4">
          <div className="text-2xl">🧳</div>
          <div>
            <h3 className="font-semibold text-gray-900">Baggage Tracker</h3>
            <p className="text-xs text-gray-600">Check weight status</p>
          </div>
          <div className="ml-auto bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Under Limit</div>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
