/**
 * @module AxiosInterceptors
 * @category Interceptors
 *
 */

import { useEffect } from 'react';

// import { useAuthContext } from '@providers/Auth/Context';

import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import { usePathname } from 'next/navigation';

/**
 * Intercept Axios http Incoming Request and Response
 *
 * @category Interceptors
 * @see https://axios-http.com/docs/interceptors
 *
 */
const AxiosInterceptor = () => {
  const pathname = usePathname();
  //   const { auth } = useAuthContext();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const { headers } = config;

        // if (headers) {
        //   if (auth?.data.access_token && !config.headers?.Authorization) {
        //     headers.Authorization = `Bearer ${auth.data.access_token}`;
        //   }
        // }

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
  }, [pathname]);

  return null;
};

export default AxiosInterceptor;
