import { Plus, FileText, Check } from 'lucide-react';
import StudentBottomNav from '../components/StudentBottomNav';

// STUDENT MODE ONLY — Ayaan's visa & admission documents
export default function DocVaultScreen() {
  const documents = [
    { name: 'Passport', status: 'Confirmed', icon: '🛂' },
    { name: 'University Admission Letter', status: 'Confirmed', icon: '📧' },
    { name: 'Blocked Account Proof', status: 'Confirmed', icon: '🏦' },
    { name: 'Health Insurance', status: 'Confirmed', icon: '🏥' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-20 max-w-[390px] mx-auto">
      <div className="bg-[#1A3A5C] px-6 pt-12 pb-6">
        <h1 className="text-white text-[28px] font-bold">Your Documents 📁</h1>
        <p className="text-white/80 text-sm mt-1">Student Visa Application — Frankfurt</p>
      </div>
      <div className="px-6 mt-6">
        <div className="space-y-4 mb-24">
          {documents.map((doc) => (
            <div key={doc.name} className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-4 rounded-xl text-3xl">{doc.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{doc.name}</h3>
                  <div className="flex items-center gap-1 text-[#1A3A5C]">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">{doc.status}</span>
                  </div>
                </div>
                <FileText className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="fixed bottom-24 right-6 z-20 bg-[#1A3A5C] text-white p-4 rounded-full shadow-lg hover:bg-[#152d47] transition-colors hover:scale-110 transform">
        <Plus className="w-8 h-8" />
      </button>
      <StudentBottomNav />
    </div>
  );
}
