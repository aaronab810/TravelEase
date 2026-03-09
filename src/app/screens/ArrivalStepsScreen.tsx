import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import StudentBottomNav from '../components/StudentBottomNav';

// STUDENT MODE ONLY — Ayaan's arrival confidence checklist
export default function ArrivalStepsScreen() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: '🛂', title: 'Immigration', desc: 'Have passport, visa & admission letter ready. Follow signs to "Einreise / Immigration".' },
    { icon: '🧳', title: 'Collect Baggage', desc: 'Go to baggage carousel. Check the flight number on the board — LH631 from Dubai.' },
    { icon: '📱', title: 'Buy SIM Card', desc: 'Get a German SIM at the airport (Telekom or Vodafone kiosk near arrivals exit).' },
    { icon: '🎓', title: 'Travel to University', desc: 'Take S-Bahn S8 from Terminal 1 to Frankfurt Hauptbahnhof, then U4 to Bockenheimer Warte.' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-20 max-w-[390px] mx-auto">
      <div className="bg-[#1A3A5C] px-6 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate(-1)} className="text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"><ArrowLeft className="w-6 h-6" /></button>
          <div>
            <h1 className="text-white text-[28px] font-bold">Your Next Steps ✅</h1>
            <p className="text-white/80 text-sm">Step {Math.min(currentStep + 1, steps.length)} of {steps.length}</p>
          </div>
        </div>
        {/* Progress tracker */}
        <div className="flex gap-2 mt-2">
          {steps.map((_, i) => (
            <div key={i} className={`flex-1 h-2 rounded-full transition-all ${i <= currentStep ? 'bg-white' : 'bg-white/30'}`} />
          ))}
        </div>
      </div>

      <div className="px-6 mt-6 space-y-4">
        {steps.map((step, i) => (
          <div key={step.title} className={`bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all ${i === currentStep ? 'ring-2 ring-[#1A3A5C] ring-offset-2' : ''}`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${i < currentStep ? 'bg-green-100' : i === currentStep ? 'bg-blue-100' : 'bg-gray-100'}`}>
                {i < currentStep ? '✓' : step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-gray-400">Step {i + 1}</span>
                  {i < currentStep && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Done</span>}
                  {i === currentStep && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Current</span>}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </div>
            {i === currentStep && (
              <button onClick={() => setCurrentStep(Math.min(i + 1, steps.length - 1))} className="w-full mt-4 bg-[#1A3A5C] text-white py-3 rounded-xl font-semibold hover:bg-[#152d47] transition-colors">
                Mark as Done →
              </button>
            )}
          </div>
        ))}

        {currentStep === steps.length - 1 && (
          <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome to Germany, Ayaan!</h3>
            <p className="text-gray-600 text-sm">You've completed all arrival steps.</p>
          </div>
        )}
      </div>

      <StudentBottomNav />
    </div>
  );
}
