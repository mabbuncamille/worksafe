import { User } from '@/auth/type';
import executeQuery from '@/lib/db';

import axios from '@/utils/axios';
import {
  useCallback,
  useMemo,
  useState,
  createContext,
  useContext,
} from 'react';

type Props = {
  children: React.ReactNode;
};

type AuthContextType = {
  registerUser: (
    fullName: string,
    email: string,
    password: string,
    role: string
  ) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState(null);

  const registerUser = useCallback(
    async (fullName: string, email: string, password: string, role: string) => {
      const data = { fullName, email, password, role };
      await axios.post('/api/auth/register', data);
    },
    []
  );

  const memoizedValue = useMemo(
    () => ({
      registerUser,
    }),
    [registerUser]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext context must be use inside AuthProvider');
  }

  return context;
};
