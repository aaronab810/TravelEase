import { useNavigate } from 'react-router';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { useUserMode } from '../context/UserModeContext';
import BottomNav from '../components/BottomNav';

// FAMILY MODE ONLY — Sarah's profile
export default function ProfileScreen() {
  const navigate = useNavigate();
  const { userName } = useUserMode();

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-24 max-w-[390px] mx-auto">
      <div className="bg-[#1A5C45] px-6 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"><ArrowLeft className="w-6 h-6" /></button>
          <h1 className="text-white text-[28px] font-bold">Profile & Settings</h1>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#1A5C45] rounded-full flex items-center justify-center text-white text-2xl font-bold">{userName.charAt(0)}</div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900">{userName} Anderson</h2>
              <p className="text-gray-500 text-sm">Family Travel Mode • Dubai → London</p>
              <p className="text-gray-400 text-xs mt-1">2 children • Flight EK007</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden">
          {['Notifications', 'Privacy & Security', 'Language', 'Help & Support'].map((item, i, arr) => (
            <button key={item} className={`w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <span className="text-gray-900 font-medium">{item}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>

        <button onClick={() => navigate('/')} className="w-full bg-red-50 text-red-600 py-4 rounded-xl font-semibold hover:bg-red-100 transition-colors">
          End Journey / Logout
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
