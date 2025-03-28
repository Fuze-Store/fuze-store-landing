/**
 * List of auth provider types
 *
 * @module ProviderAuthTypes
 * @category Types
 *
 */
import type { ReactNode } from 'react';

export type TokenResponse = {
  accessToken: string;
  expiresIn?: number;
  refreshToken?: string;
  tokenType: string;
  scope?: string;
};

export type AuthData = {
  access_token: string;
  refresh_token?: string;
  client_id: string;
  expires_in?: number;
  id_token?: string;
  scope?: string;
  token_type: string;
};

export type Auth = {
  data: AuthData;
  expiresAt: number | null;
};

export type AuthProviderProps = {
  children: ReactNode;
};

export interface IAuthContext {
  auth?: Auth;
  isLoading: boolean;
  isAuthenticated: boolean;
  logout: () => void;
  destroyAuth: () => void;
  setToken: (clientId?: string, response?: TokenResponse) => boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
