/**
 * @module AxiosInterceptors
 * @category Interceptors
 *
 */

import { useEffect } from 'react';

import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

import useSession from '@/hooks/useSession';
import { axiosPrivate } from '@/utils/axios';

/**
 * Intercept Axios http Incoming Request and Response
 *
 * @category Interceptors
 * @see https://axios-http.com/docs/interceptors
 *
 */
const AxiosInterceptor = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const { headers } = config;

        if (!config.headers?.Authorization) {
          if (session?.fuze.accessToken) {
            headers.Authorization = `Bearer ${session.fuze.accessToken}`;
          }
        }

        return config;
      },
      async (error: AxiosError | Error) => Promise.reject(error),
    );

    // TODO: call signOut when api returns 401
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (res) => res,
      async (error: AxiosError) => Promise.reject(error),
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [session?.fuze.accessToken]);

  return null;
};

export default AxiosInterceptor;
