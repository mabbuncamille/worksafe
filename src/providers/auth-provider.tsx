import axios from '@/utils/axios';
import { useCallback, useMemo, createContext, useContext } from 'react';

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
  login: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Props) {
  const registerUser = useCallback(
    async (fullName: string, email: string, password: string, role: string) => {
      await axios.post('/api/auth/register', {
        fullName,
        email,
        password,
        role,
      });
    },
    []
  );

  const login = useCallback(async (email: string, password: string) => {
    const response = await axios.post('/api/auth/login', {
      email,
      password,
    });

    console.log(response, 'RESPONSE');
  }, []);

  const memoizedValue = useMemo(
    () => ({
      registerUser,
      login,
    }),
    [registerUser, login]
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
