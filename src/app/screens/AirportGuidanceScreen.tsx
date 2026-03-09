import { useNavigate } from 'react-router';
import { ArrowRight, Check, Mic } from 'lucide-react';

export default function AirportGuidanceScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F5F2] max-w-[390px] mx-auto">
      {/* Active Banner */}
      <div className="bg-[#1A5C45] px-6 py-6 text-center">
        <p className="text-white text-[24px] font-bold">
          Airport Guidance Mode — Active
        </p>
      </div>

      <div className="px-6 mt-8 space-y-6">
        {/* Large Arrow */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-12 shadow-xl">
            <ArrowRight className="w-24 h-24 text-[#1A5C45]" strokeWidth={3} />
          </div>
        </div>

        {/* Direction Card */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <h1 className="text-[32px] font-bold text-gray-900 leading-tight mb-4">
            Meena Ji,
            <br />
            Gate 12
          </h1>
          <p className="text-[24px] text-gray-700 leading-relaxed">
            Walk straight for 3 minutes
          </p>
        </div>

        {/* Keep Ready Checklist */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-yellow-200 p-2 rounded-lg">
              <span className="text-2xl">⚠️</span>
            </div>
            <div>
              <h3 className="text-[24px] font-bold text-gray-900 mb-1">
                Keep Ready
              </h3>
              <p className="text-lg text-gray-600">Reducing Anxiety</p>
            </div>
          </div>
          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#1A5C45] rounded-lg flex items-center justify-center">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-xl text-gray-900">Passport</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#1A5C45] rounded-lg flex items-center justify-center">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-xl text-gray-900">Visa</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#1A5C45] rounded-lg flex items-center justify-center">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-xl text-gray-900">Boarding Pass</span>
            </div>
          </div>
        </div>

        {/* Voice Assistant Active */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center justify-center gap-4">
          <Mic className="w-10 h-10 text-[#1A5C45]" />
          <div>
            <p className="text-xl font-bold text-gray-900">Voice Assistant</p>
            <div className="flex gap-1 mt-2">
              <div className="w-2 h-6 bg-[#1A5C45] rounded-full animate-pulse" />
              <div
                className="w-2 h-8 bg-[#1A5C45] rounded-full animate-pulse"
                style={{ animationDelay: '0.1s' }}
              />
              <div
                className="w-2 h-6 bg-[#1A5C45] rounded-full animate-pulse"
                style={{ animationDelay: '0.2s' }}
              />
              <div
                className="w-2 h-8 bg-[#1A5C45] rounded-full animate-pulse"
                style={{ animationDelay: '0.3s' }}
              />
              <div
                className="w-2 h-6 bg-[#1A5C45] rounded-full animate-pulse"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>
        </div>

        {/* Return Button */}
        <button
          onClick={() => navigate("/senior-inflight")}
          className="w-full bg-[#1A5C45] text-white text-[22px] font-bold py-6 rounded-2xl hover:bg-[#154835] transition-colors"
        >
          Continue to In-Flight
        </button>
      </div>
    </div>
  );
}
