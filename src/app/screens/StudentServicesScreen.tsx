import { useNavigate } from 'react-router';
import { MapPin, ArrowLeft } from 'lucide-react';
import StudentBottomNav from '../components/StudentBottomNav';

// STUDENT MODE ONLY — Ayaan's transport to university
export default function StudentServicesScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F5F2] pb-20 max-w-[390px] mx-auto">
      <div className="bg-[#1A3A5C] px-6 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate(-1)} className="text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"><ArrowLeft className="w-6 h-6" /></button>
          <h1 className="text-white text-[28px] font-bold">Getting to University 🗺️</h1>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-4">
        {/* Map placeholder */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <div className="relative h-48 bg-gray-200 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100" />
            <div className="relative z-10 text-center">
              <MapPin className="w-12 h-12 text-[#1A3A5C] mx-auto mb-2" />
              <p className="font-semibold text-gray-900">Goethe University Frankfurt</p>
              <p className="text-sm text-gray-600">5.2 km from Frankfurt Airport</p>
            </div>
            <div className="absolute top-4 right-4 bg-[#1A3A5C] text-white text-xs px-3 py-1 rounded-full font-medium">5.2 km away</div>
          </div>
        </div>

        <h2 className="text-[20px] font-semibold text-gray-900">Available Services</h2>

        {[
          { icon: '🚕', title: 'Book a Taxi', subtitle: 'Est. €28 • 15 min', detail: 'Direct door-to-door' },
          { icon: '🚌', title: 'Find Public Transport', subtitle: 'Est. €5.60 • 35 min', detail: 'S-Bahn Line S8 + U4' },
          { icon: '🚗', title: 'Book a Shared Taxi', subtitle: 'Est. €14 • 20 min', detail: 'Share with other students' },
        ].map((service) => (
          <button key={service.title} className="w-full bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all text-left flex items-center gap-4">
            <div className="text-4xl">{service.icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.subtitle}</p>
              <p className="text-xs text-gray-400 mt-1">{service.detail}</p>
            </div>
            <div className="text-gray-300 text-2xl">›</div>
          </button>
        ))}

        <button className="w-full bg-[#1A3A5C] text-white py-4 rounded-xl font-semibold hover:bg-[#152d47] transition-colors">
          Navigate Now
        </button>
      </div>

      <StudentBottomNav />
    </div>
  );
}
