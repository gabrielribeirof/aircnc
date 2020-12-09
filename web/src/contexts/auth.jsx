import React, { createContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storageToken = localStorage.getItem('@Aircnc:token');
    const storageUser = localStorage.getItem('@Aircnc:user');

    if (storageToken && storageUser) {
      let isTokenExpired;
      const decodedToken = jwt.decode(storageToken);

      const tokenExpiresTime = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);

      if (tokenExpiresTime < currentTime) {
        isTokenExpired = true;
      }

      if (isTokenExpired) {
        return null;
      }

      api.defaults.headers.authorization = `Bearer ${storageToken}`;

      return JSON.parse(storageUser);
    }

    return null;
  });

  async function signIn(email, password) {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      localStorage.setItem('@Aircnc:token', response.data.token);
      localStorage.setItem('@Aircnc:user', JSON.stringify(response.data.user));

      api.defaults.headers.authorization = `Bearer ${response.data.token}`;

      setUser(response.data.user);
    } catch (err) {
      alert(err);
    }
  }

  function signOut() {
    localStorage.removeItem('@Aircnc:token');
    localStorage.removeItem('@Aircnc:user');

    setUser({});
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user, user, setUser, signIn, signOut,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
