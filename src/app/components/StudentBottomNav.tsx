import { useNavigate, useLocation } from 'react-router';
import { Plane, FileText, Navigation, Languages, User } from 'lucide-react';

const navItems = [
  { icon: <Plane className="w-6 h-6" />, label: 'Home', path: '/student-home' },
  { icon: <Navigation className="w-6 h-6" />, label: 'Navigate', path: '/student-navigate' },
  { icon: <Languages className="w-6 h-6" />, label: 'Translate', path: '/translate' },
  { icon: <FileText className="w-6 h-6" />, label: 'Docs', path: '/docs' },
  { icon: <User className="w-6 h-6" />, label: 'Profile', path: '/student-profile' },
];

export default function StudentBottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 max-w-[390px] mx-auto">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button key={item.path} onClick={() => navigate(item.path)} className="flex flex-col items-center gap-1 py-2 px-3 min-w-[60px]">
              <div className={isActive ? 'text-[#1A3A5C]' : 'text-gray-500'}>{item.icon}</div>
              <span className={`text-xs ${isActive ? 'text-[#1A3A5C] font-semibold' : 'text-gray-500'}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
