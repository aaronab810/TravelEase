import { Camera, MessageSquare, ArrowLeftRight } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import StudentBottomNav from '../components/StudentBottomNav';
import { useUserMode } from '../context/UserModeContext';

export default function TranslateScreen() {
  const { userMode } = useUserMode();

  const familyPhrases = ['Where is the gate?', 'I need help', 'Family restroom?', 'Where is baggage?'];
  const studentPhrases = ['Where is immigration?', 'I am an international student', 'Where can I collect my baggage?', 'Where is the taxi stand?'];
  const quickPhrases = userMode === 'student' ? studentPhrases : familyPhrases;

  const isStudent = userMode === 'student';
  const primaryColor = isStudent ? '#1A3A5C' : '#1A5C45';

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-20 max-w-[390px] mx-auto">
      <div style={{ backgroundColor: primaryColor }} className="px-6 pt-12 pb-6">
        <h1 className="text-white text-[28px] font-bold">Translate</h1>
        <p className="text-white/80 text-sm mt-1">Instant translation anywhere</p>
      </div>

      <div className="px-6 mt-6 space-y-6">
        <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-center gap-4">
            <button className="bg-gray-100 px-6 py-3 rounded-xl font-semibold text-gray-900">EN</button>
            <ArrowLeftRight className="w-5 h-5 text-gray-400" />
            <button className="bg-gray-100 px-6 py-3 rounded-xl font-semibold text-gray-900">DE</button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">English ↔ German</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <label className="text-xs text-gray-500 uppercase font-medium mb-2 block">Enter text</label>
          <textarea placeholder="Where is immigration?" defaultValue="Where is immigration?" className="w-full text-lg text-gray-900 outline-none resize-none min-h-[80px]" />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <label className="text-xs text-gray-500 uppercase font-medium mb-2 block">Translation</label>
          <p className="text-[22px] font-semibold leading-relaxed" style={{ color: primaryColor }}>Wo ist die Einwanderung?</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow flex flex-col items-center gap-3">
            <div className="text-white p-4 rounded-xl" style={{ backgroundColor: primaryColor }}><Camera className="w-6 h-6" /></div>
            <span className="text-sm font-medium text-gray-900">Scan Sign</span>
          </button>
          <button className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow flex flex-col items-center gap-3">
            <div className="text-white p-4 rounded-xl" style={{ backgroundColor: primaryColor }}><MessageSquare className="w-6 h-6" /></div>
            <span className="text-sm font-medium text-gray-900">Common Phrases</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Phrases</h3>
          <div className="flex flex-wrap gap-2">
            {quickPhrases.map((phrase) => (
              <button key={phrase} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm transition-colors hover:text-white" style={{ hover: { backgroundColor: primaryColor } }}>{phrase}</button>
            ))}
          </div>
        </div>
      </div>

      {isStudent ? <StudentBottomNav /> : <BottomNav />}
    </div>
  );
}
