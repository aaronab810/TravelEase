import { Search, Star, Check } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function StayScreen() {
  const hotels = [
    {
      id: 1,
      name: 'Rove Downtown Dubai',
      image: 'https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMwMTEwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.2,
      price: 128,
      verified: true,
    },
    {
      id: 2,
      name: 'Premier Inn Dubai International Airport',
      image: 'https://images.unsplash.com/photo-1722586664158-1d383cf3bf67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBmcmllbmRseSUyMGhvdGVsJTIwbG9iYnl8ZW58MXx8fHwxNzczMDExMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.5,
      price: 145,
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-24 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-[#1A5C45] px-6 pt-12 pb-6">
        <h1 className="text-white text-[22px] font-semibold">
          Family & Budget Stays
        </h1>
        <p className="text-white/80 text-sm mt-1">Dubai, UAE</p>
      </div>

      {/* Search & Filters Card */}
      <div className="bg-white mx-6 -mt-4 rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)] mb-4">
        {/* Search Bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl mb-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Dubai"
            defaultValue="Dubai"
            className="flex-1 outline-none bg-transparent text-gray-900"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-4 py-2 bg-[#1A5C45] text-white rounded-full text-sm font-medium">
            Kid-Friendly
          </span>
          <span className="px-4 py-2 bg-[#1A5C45] text-white rounded-full text-sm font-medium">
            Under $150
          </span>
          <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
            Accessible
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="px-6">
        <p className="text-gray-900 font-semibold mb-4">3 Properties Found</p>

        <div className="space-y-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow"
            >
              {/* Hotel Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                {hotel.verified && (
                  <div className="absolute top-3 right-3 bg-[#1A5C45] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Verified Safe for Kids
                  </div>
                )}
              </div>

              {/* Hotel Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-2">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-gray-900">
                      {hotel.rating}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-2xl font-bold text-[#1A5C45]">
                      ${hotel.price}
                    </span>
                    <span className="text-gray-600 text-sm">/night</span>
                  </div>
                  <button className="bg-[#1A5C45] text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-[#154835] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
