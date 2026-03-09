import { useNavigate } from 'react-router';
import { ArrowLeft, FileText } from 'lucide-react';

export default function SeniorDocsScreen() {
  const navigate = useNavigate();

  const documents = [
    { name: 'Passport', status: 'Ready', icon: '🛂' },
    { name: 'Boarding Pass', status: 'Ready', icon: '✈️' },
    { name: 'Visa', status: 'Ready', icon: '📝' },
  ];

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
          <h1 className="text-white text-[32px] font-bold">Documents 📄</h1>
        </div>
      </div>

      <div className="px-6 mt-8 space-y-6">
        {/* Important Notice */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
          <p className="text-2xl text-orange-900 font-semibold text-center">
            ⚠️ Keep these documents ready
          </p>
        </div>

        {/* Document Cards */}
        {documents.map((doc) => (
          <div
            key={doc.name}
            className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="text-6xl">{doc.icon}</div>
              <div className="flex-1">
                <h2 className="text-[26px] font-bold text-gray-900 mb-2">
                  {doc.name}
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <span className="text-2xl text-[#10B981] font-semibold">
                    {doc.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                This document is saved securely. Keep the physical copy with
                you at all times.
              </p>
            </div>
          </div>
        ))}

        {/* Reminder Card */}
        <div className="bg-[#1A5C45] text-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <FileText className="w-10 h-10 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-[24px] font-bold mb-4">
                Immigration Checkpoint
              </h3>
              <p className="text-xl leading-relaxed">
                Show your passport, visa, and boarding pass when asked by
                immigration officer.
              </p>
            </div>
          </div>
        </div>
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
          <button
            onClick={() => navigate('/senior-navigate')}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-gray-500">
              <span className="text-3xl">🗺️</span>
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
}
