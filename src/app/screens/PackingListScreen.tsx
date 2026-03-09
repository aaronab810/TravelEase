import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, Trash2, Sparkles } from 'lucide-react';
import BottomNav from '../components/BottomNav';

interface PackingItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}

export default function PackingListScreen() {
  const navigate = useNavigate();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [items, setItems] = useState<PackingItem[]>([
    { id: '1', name: 'Passport', category: 'Documents', checked: true },
    { id: '2', name: 'University Admission Letter', category: 'Documents', checked: true },
    { id: '3', name: 'Blocked Account Proof', category: 'Documents', checked: true },
    { id: '4', name: 'Health Insurance', category: 'Documents', checked: true },
    { id: '5', name: 'Winter Jacket', category: 'Clothing', checked: true },
    { id: '6', name: 'Warm Boots', category: 'Clothing', checked: true },
    { id: '7', name: 'Thermal Layers', category: 'Clothing', checked: false },
    { id: '8', name: 'Gloves', category: 'Clothing', checked: false },
    { id: '9', name: 'Laptop & Charger', category: 'Electronics', checked: true },
    { id: '10', name: 'Travel Adapter', category: 'Electronics', checked: false },
  ]);

  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'Documents',
    'Clothing',
    'Electronics',
  ]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addSuggestedItems = () => {
    const newItems: PackingItem[] = [
      { id: 'new-1', name: 'Thermal Layers', category: 'Clothing', checked: false },
      { id: 'new-2', name: 'Gloves', category: 'Clothing', checked: false },
      { id: 'new-3', name: 'Travel Adapter', category: 'Electronics', checked: false },
    ];

    // Only add items that don't already exist
    const existingNames = items.map((item) => item.name);
    const itemsToAdd = newItems.filter(
      (item) => !existingNames.includes(item.name)
    );

    if (itemsToAdd.length > 0) {
      setItems((prev) => [...prev, ...itemsToAdd]);
    }
    setShowSuggestions(false);
  };

  const categories = ['Documents', 'Clothing', 'Electronics'];
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.checked).length;
  const progress = (packedItems / totalItems) * 100;

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-[#1A3A5C] px-6 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[28px] font-bold">
              Packing Assistant 🎒
            </h1>
            <p className="text-white/80 text-base mt-1">
              Frankfurt, Germany — Winter
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/10 rounded-full p-1">
          <div className="flex items-center justify-between mb-2 px-2">
            <span className="text-white text-sm font-medium">
              {packedItems} of {totalItems} items packed
            </span>
            <span className="text-white text-sm font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#10B981] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-4">
        {/* Category Sections */}
        {categories.map((category) => {
          const categoryItems = items.filter((item) => item.category === category);
          const isExpanded = expandedCategories.includes(category);
          const categoryPacked = categoryItems.filter((item) => item.checked).length;

          return (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-gray-900">
                    {category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {categoryPacked}/{categoryItems.length}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Category Items */}
              {isExpanded && (
                <div className="border-t border-gray-100">
                  {categoryItems.map((item) => (
                    <div
                      key={item.id}
                      className="px-6 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                    >
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                          item.checked
                            ? 'bg-[#10B981] border-[#10B981]'
                            : 'border-gray-300'
                        }`}
                      >
                        {item.checked && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>

                      {/* Item Name */}
                      <span
                        className={`flex-1 text-base ${
                          item.checked
                            ? 'text-[#10B981] font-medium'
                            : 'text-gray-700'
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Delete Button */}
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Smart Suggest Button */}
        <button
          onClick={() => setShowSuggestions(!showSuggestions)}
          className="w-full border-2 border-[#10B981] text-[#10B981] py-4 rounded-xl font-semibold hover:bg-[#10B981]/5 transition-colors flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Smart Suggest
        </button>

        {/* Smart Suggestions Popup */}
        {showSuggestions && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Going to Germany in winter?
                </h3>
                <p className="text-gray-700 mb-3">We suggest:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Thermal Layers</li>
                  <li>• Gloves</li>
                  <li>• Travel Adapter</li>
                </ul>
              </div>
            </div>
            <button
              onClick={addSuggestedItems}
              className="w-full bg-[#1A3A5C] text-white py-3 rounded-xl font-semibold hover:bg-[#152d47] transition-colors"
            >
              Add All
            </button>
          </div>
        )}
      </div>

      {/* Floating Add Button */}
      <button className="fixed bottom-24 right-6 bg-[#10B981] text-white w-14 h-14 rounded-full shadow-xl hover:bg-[#0ea472] transition-colors flex items-center justify-center">
        <Plus className="w-7 h-7" />
      </button>

      <BottomNav />
    </div>
  );
}
