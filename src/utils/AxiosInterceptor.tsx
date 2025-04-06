/**
 * @module AxiosInterceptors
 * @category Interceptors
 *
 */

import { useEffect } from 'react';

import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import { useSession } from 'next-auth/react';

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
          if (session?.user.accessToken) {
            headers.Authorization = `Bearer ${session.user.accessToken}`;
          } else {
            // Do not proceed calling an api if there is no access token
            return Promise.reject(new Error('Request has been canceled'));
          }
        }

        return config;
      },
      async (error: AxiosError | Error) => Promise.reject(error),
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (res) => res,
      async (error: AxiosError) => Promise.reject(error),
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [session?.user.accessToken]);

  return null;
};

export default AxiosInterceptor;
