import React, { createContext, useState } from 'react';
import api from '@services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  setUser: Function;
  signIn(email: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.get('/login', {
        auth: {
          username: email,
          password,
        },
      });

      localStorage.setItem('@Aircnc:token', response.data.token);
      localStorage.setItem('@Aircnc:user', response.data.user._id);

      setUser(response.data.user);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, setUser, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
