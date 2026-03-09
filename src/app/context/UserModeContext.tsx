import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserMode = 'senior' | 'student' | 'family';

interface UserModeContextType {
  userMode: UserMode;
  setUserMode: (mode: UserMode) => void;
  userName: string;
  setUserName: (name: string) => void;
}

const UserModeContext = createContext<UserModeContextType | undefined>(undefined);

export function UserModeProvider({ children }: { children: ReactNode }) {
  const [userMode, setUserModeState] = useState<UserMode>('family');
  const [userName, setUserNameState] = useState<string>('Sarah');

  const setUserMode = (mode: UserMode) => {
    setUserModeState(mode);
  };

  const setUserName = (name: string) => {
    setUserNameState(name);
  };

  return (
    <UserModeContext.Provider value={{ userMode, setUserMode, userName, setUserName }}>
      {children}
    </UserModeContext.Provider>
  );
}

export function useUserMode() {
  const context = useContext(UserModeContext);
  if (context === undefined) {
    throw new Error('useUserMode must be used within a UserModeProvider');
  }
  return context;
}
