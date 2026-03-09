import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, RefreshCw, CheckCircle2 } from 'lucide-react';
import BottomNav from '../components/BottomNav';

// FAMILY MODE ONLY — Sarah's baggage weight tracker (before/after evaluation change)
export default function BaggageTrackerScreen() {
  const navigate = useNavigate();

  // Initial state with overweight carry-on
  const [bags, setBags] = useState([
    { id: 1, label: 'Sarah\'s Bag', weight: 18.2, limit: 23, status: 'green' },
    { id: 2, label: 'Kids\' Bag', weight: 20.8, limit: 23, status: 'yellow' },
    { id: 3, label: 'Carry-on', weight: 7.1, limit: 7, status: 'red' },
  ]);

  const [hasRepacked, setHasRepacked] = useState(false);

  // Action to distribute weight to simulate fixing the issue
  const handleRepack = () => {
    setBags(current => current.map(bag => {
      if (bag.id === 1) return { ...bag, weight: 18.3 }; // moved 100g to check-in
      if (bag.id === 3) return { ...bag, weight: 6.9, status: 'green' }; // taken out/moved 200g
      return bag;
    }));
    setHasRepacked(true);
  };

  const statusConfig = {
    green: { label: 'Under Limit', bg: 'bg-green-100', text: 'text-green-800', bar: 'bg-green-500', border: 'border-green-300' },
    yellow: { label: 'Near Limit', bg: 'bg-yellow-100', text: 'text-yellow-800', bar: 'bg-yellow-500', border: 'border-yellow-300' },
    red: { label: 'Overweight!', bg: 'bg-red-100', text: 'text-red-800', bar: 'bg-red-500', border: 'border-red-300' },
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-20 max-w-[390px] mx-auto">
      <div className="bg-[#1A5C45] px-6 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"><ArrowLeft className="w-6 h-6" /></button>
          <h1 className="text-white text-[28px] font-bold">Baggage Status 🧳</h1>
        </div>
        <p className="text-white/80 text-sm ml-10">Flight EK007 — Dubai to London</p>
      </div>

      <div className="px-6 mt-6 space-y-4">
        {hasRepacked && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex gap-3 animate-fade-in shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-green-900 font-semibold">Ready for check-in!</p>
              <p className="text-green-700 text-sm">All bags are within limits.</p>
            </div>
          </div>
        )}

        {bags.map((bag) => {
          const config = statusConfig[bag.status as keyof typeof statusConfig];
          const pct = Math.min((bag.weight / bag.limit) * 100, 100);
          return (
            <div key={bag.id} className={`bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border-2 transition-colors duration-500 ${config.border}`}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{bag.label}</h3>
                <span className={`text-base font-bold px-3 py-1 rounded-full ${config.bg} ${config.text} transition-colors duration-500`}>{config.label}</span>
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-[36px] font-bold text-gray-900">{bag.weight.toFixed(1)}</span>
                <span className="text-gray-500 text-lg mb-1">kg / {bag.limit} kg limit</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-1000 ease-in-out ${config.bar}`} style={{ width: `${pct}%` }} />
              </div>
              {bag.status === 'red' && !hasRepacked && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-red-600 font-semibold text-base mb-3">⚠️ Remove {(bag.weight - bag.limit).toFixed(1)} kg before check-in</p>
                  <button 
                    onClick={handleRepack}
                    className="w-full bg-red-50 text-red-700 py-3 flex items-center justify-center gap-2 rounded-xl font-semibold hover:bg-red-100 transition-colors"
                  >
                    <RefreshCw className="w-5 h-5" /> Repack & Update
                  </button>
                </div>
              )}
            </div>
          );
        })}

        <div className="bg-blue-50 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2"><span>💡</span> Baggage Tips</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Move heavier items to checked baggage</li>
            <li>• Wear your heaviest clothes at boarding</li>
            <li>• Extra baggage fees: ~$15/kg with EK</li>
          </ul>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
