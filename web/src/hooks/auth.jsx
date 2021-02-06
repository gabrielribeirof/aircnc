import React, {
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';
import jwt from 'jsonwebtoken';
import api from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@Aircnc:user');
    const token = localStorage.getItem('@Aircnc:token');

    if (user && token) {
      let isTokenExpired;
      const decodedToken = jwt.decode(token);

      const tokenExpiresTime = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);

      if (currentTime > tokenExpiresTime) {
        isTokenExpired = true;
      }

      if (isTokenExpired) {
        return null;
      }

      api.defaults.headers.authorization = `Bearer ${token}`;

      return { user: JSON.parse(user), token };
    }

    return null;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@Aircnc:user', JSON.stringify(user));
    localStorage.setItem('@Aircnc:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user, token });
  }, []);

  const signUp = useCallback(async ({ name, email, password }) => {
    const response = await api.post('users', {
      name,
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@Aircnc:user', JSON.stringify(user));
    localStorage.setItem('@Aircnc:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Aircnc:token');
    localStorage.removeItem('@Aircnc:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data?.user, signIn, signOut, signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
