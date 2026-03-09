import { RouterProvider } from 'react-router';
import { router } from './routes';
import { UserModeProvider } from './context/UserModeContext';

export default function App() {
  return (
    <UserModeProvider>
      <RouterProvider router={router} />
    </UserModeProvider>
  );
}