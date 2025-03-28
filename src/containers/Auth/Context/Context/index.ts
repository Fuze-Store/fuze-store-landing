/**
 * @module AuthContext
 * @category Contexts
 *
 */

import { createContext, useContext } from 'react';

import type { IAuthContext } from '@/containers/Auth/Context/types';

export const AuthContext = createContext<IAuthContext>({
  isLoading: true,
  isAuthenticated: false,
  logout: () => undefined,
  destroyAuth: () => undefined,
  setToken: () => false,
  setIsAuthenticated: () => undefined,
});

export const useAuthContext = () => useContext(AuthContext);

export const AUTH_KEY = `auth.${process.env.NEXT_PUBLIC_APP_NAME}`
  .replace(/\s+/g, '_')
  .toLowerCase();

export default AuthContext;
