import React, { createContext, useState, useEffect } from 'react';
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

  function loadStorageData() {
    const storageToken = localStorage.getItem('@Aircnc:token');
    const storageUser = localStorage.getItem('@Aircnc:user');

    if (storageToken && storageUser) {
      setUser(JSON.parse(storageUser));
    }
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.get('/login', {
        auth: {
          username: email,
          password,
        },
      });

      localStorage.setItem('@Aircnc:token', response.data.token);
      localStorage.setItem('@Aircnc:user', JSON.stringify(response.data.user));

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
