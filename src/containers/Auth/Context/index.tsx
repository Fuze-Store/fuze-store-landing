/**
 * @module AuthProvider
 * @category Providers
 *
 */

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { addSeconds, getUnixTime } from 'date-fns';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'sonner';
// import { useIntl } from 'react-intl';

import type {
  Auth,
  AuthProviderProps,
  TokenResponse,
} from '@/containers/Auth/Context/types';
import type { ApiErrorResponse } from '@/types';

import AuthContext, { AUTH_KEY } from '@/containers/Auth/Context/Context';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';
// import { resetGlobalFields } from '@rtk/global/slice';
// import { useLogoutMutation } from '@rtk/logout/apiSlice';

/**
 * Auth Provider
 *
 * @category Provider
 * @param Props
 *
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  // const intl = useIntl();
  // const dispatch = useAppDispatch();
  // const [logoutApi] = useLogoutMutation();
  // const { setFlashMessage } = useFlashMessageContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authSession, setAuthSession] = useState<Auth | undefined>();

  const { mutate } = useMutation<void, AxiosError<ApiErrorResponse>, void>({
    mutationFn: async () => {
      await axiosPrivate.post<void>(endpoints.auth.logout);
    },
  });

  // Get and save persisted data
  const initializeAuth = useCallback(() => {
    const value = localStorage.getItem(AUTH_KEY);
    if (value) {
      const auth = JSON.parse(value) as Auth;
      setAuthSession(auth);
    }
  }, []);

  // Check if auth session is expired
  const isExpired = useMemo(() => {
    if (authSession?.expiresAt) {
      const currentTime = getUnixTime(new Date());
      return currentTime > authSession?.expiresAt;
    }
    return false;
  }, [authSession]);

  const initializeAuthenticate = useCallback(
    (auth?: Auth) => {
      if (auth) {
        const {
          data: { access_token: accessToken },
          expiresAt,
        } = auth;
        setIsAuthenticated(
          Boolean(expiresAt ? accessToken && !isExpired : accessToken),
        );

        if (isExpired) {
          // show message expired
          // setFlashMessage({
          //   success: false,
          //   message: intl.formatMessage(messages.expired),
          // });

          localStorage.removeItem(AUTH_KEY);
        }
      } else {
        setIsAuthenticated(false);
      }

      setIsLoading(false);
    },
    [isExpired],
  );

  // Run initializeAuth
  useLayoutEffect(() => {
    void initializeAuth();
  }, [initializeAuth]);

  // check if it is authenticated
  useEffect(() => {
    void initializeAuthenticate(authSession);
  }, [authSession, initializeAuthenticate]);

  // Save Auth Session
  const storeAuth = useCallback((auth: Auth) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
    setAuthSession(auth);
  }, []);

  // Destroy Auth Session
  const destroyAuth = () => {
    localStorage.removeItem(AUTH_KEY);
    setAuthSession(undefined);
  };

  // Capture and process TokenResponse
  const handleCaptureToken = useCallback(
    (responseClientId = '', response?: TokenResponse) => {
      if (response) {
        console.log(response);
        const auth: Auth = {
          data: {
            access_token: response.accessToken,
            refresh_token: response.refreshToken,
            client_id: responseClientId,
            expires_in: response.expiresIn,
            scope: response.scope,
            token_type: response.tokenType,
          },
          expiresAt: response.expiresIn
            ? getUnixTime(addSeconds(new Date(), response.expiresIn))
            : null,
        };

        storeAuth(auth);
        // @ts-ignore: Typescript issue
        // dispatch(resetGlobalFields(['loading', 'showSessionExpiredPrompt']));
        return true;
      }
      return false;
    },
    [storeAuth],
  );

  // Logout
  const logout = useCallback(() => {
    try {
      // dispatch(updateGlobalFields({ key: 'loading', value: { show: true } }));
      if (authSession) {
        mutate();
        destroyAuth();
      }
    } catch (err) {
      // dispatch(resetGlobalFields(['loading']));
      const error = err as ApiErrorResponse;
      toast.error(error.message);
      throw err;
    } finally {
      // dispatch(resetGlobalFields(['loading']));
    }
  }, [authSession, mutate]);

  const value = useMemo(
    () => ({
      isLoading,
      auth: authSession,
      isAuthenticated,
      logout,
      destroyAuth,
      setToken: handleCaptureToken,
      setIsAuthenticated,
    }),
    [isLoading, authSession, handleCaptureToken, isAuthenticated, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
