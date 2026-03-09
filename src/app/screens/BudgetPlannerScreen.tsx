import { useNavigate } from 'react-router';
import { Check } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function BudgetPlannerScreen() {
  const navigate = useNavigate();

  const budgetItems = [
    { category: 'Flights', amount: 180, status: 'booked', icon: '✈️' },
    { category: 'Hotel', amount: 140, status: 'booked', icon: '🏨' },
    { category: 'Activities', amount: 0, status: 'pending', icon: '🎡' },
  ];

  const totalSpent = 320;
  const totalBudget = 500;
  const percentage = (totalSpent / totalBudget) * 100;

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-[#1A5C45] px-6 pt-12 pb-6">
        <h1 className="text-white text-[28px] font-bold">Budget Planner</h1>
        <p className="text-white/80 text-sm mt-1">Track your travel expenses</p>
      </div>

      {/* Budget Met Banner */}
      <div className="mx-6 -mt-3 bg-green-50 border-2 border-green-500 rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg">
        <div className="bg-green-500 rounded-full p-1">
          <Check className="w-4 h-4 text-white" />
        </div>
        <span className="text-green-900 font-semibold">Budget Met ✓</span>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Budget Overview Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Spent</p>
              <p className="text-[32px] font-bold text-gray-900">
                ${totalSpent}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 text-sm mb-1">Budget</p>
              <p className="text-[24px] font-semibold text-gray-700">
                ${totalBudget}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{percentage.toFixed(0)}% used</span>
              <span>${totalBudget - totalSpent} remaining</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1A5C45] rounded-full transition-all"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Budget Items */}
        <div className="space-y-4">
          <h2 className="text-[22px] font-semibold text-gray-900">
            Expense Breakdown
          </h2>
          {budgetItems.map((item) => (
            <div
              key={item.category}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.category}
                  </h3>
                  <div className="flex items-center gap-2">
                    {item.status === 'booked' ? (
                      <>
                        <Check className="w-4 h-4 text-[#1A5C45]" />
                        <span className="text-sm text-[#1A5C45] font-medium">
                          Booked
                        </span>
                      </>
                    ) : (
                      <span className="text-sm text-gray-500">
                        Not yet booked
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-xl font-bold ${
                      item.status === 'booked'
                        ? 'text-[#1A5C45]'
                        : 'text-gray-400'
                    }`}
                  >
                    ${item.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/stay')}
          className="w-full bg-[#1A5C45] text-white text-lg font-semibold py-4 rounded-xl hover:bg-[#154835] transition-colors shadow-lg"
        >
          Find Deals Under $150
        </button>

        {/* Tips Card */}
        <div className="bg-blue-50 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-xl">💡</span>
            Budget Tips
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Book activities in advance for better deals</li>
            <li>• Consider off-peak travel dates</li>
            <li>• Use public transport to save on transfers</li>
          </ul>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
