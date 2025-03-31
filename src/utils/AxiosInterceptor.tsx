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

        // TODO:
        // if (headers) {
        //   if (auth?.data.access_token && !config.headers?.Authorization) {
        //     headers.Authorization = `Bearer ${auth.data.access_token}`;
        //   }
        // }

        // headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NvcWI2c3JhY2wuZXhlY3V0ZS1hcGkuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9hcGkvdjEvbG9naW4iLCJpYXQiOjE3NDMzNzkyODMsImV4cCI6MTc0NTk3MTI4MywibmJmIjoxNzQzMzc5MjgzLCJqdGkiOiJmcE9wdUd6THRMRFpMSTBEIiwic3ViIjoiMSIsInBydiI6ImI5MTI3OTk3OGYxMWFhN2JjNTY3MDQ4N2ZmZjAxZTIyODI1M2ZlNDgifQ.LLtBWg1IRjl7nRX7igAjqzokN3qFd91BU2bcphlqdxrxmdjfKeU74MQxM4s8cOAoSuhIEwG8dWzhewenuK9lgqHae07-kOdfTKlPskuPok_KaZRhzvcuG40tBaRLPHXNi4reBwyLKohmITJCMZQRd4Ru7fVEvKZn-v-y7AD2csGnZt5OeeO6_Wto3diRIxxiv0ohSXYovu2nz0RbDq_Grt4jRC-urQ6_2YQhjkRXtLcMbvlFTnxHM_jRR-vhdrnLSnJiCtzLgDJRqsO6okPVr6ZTck5cKM5fa2fZa3SMZqq77KA8BwW5UjR7REY5UYOaYqJ49kxn5lE1MaphT5Kd-Qo-o_FL89iGykPu_2cx3jRFr-IHIbH6KRnp9DvJkSNTHLYejYPT9Lr5LyboUUur9mpJM00elPgAaQiNizaigDKI1qIcjYuDZwBmcZZv9ktIKGE0Qo-ouhmUEFQfccgVqZgFTjNjZdt9hm8Iv2eWvo_DweaS_VdiHsoLDtyy3qf-wnjOMULv-ovTvcaNpBqDX3aM7WQOsUn-TFqqNEXi5i8QyXgU0378AWK0VujcKrR7nMP9ZbRikO1SI-FYeJZVB1d5UQvYNoCZds4EUvKREorbqR2MJ7HNCNglH9-wXcS-mMFtVpUEzuyE0uw_RW5iVePfLc7H0Wl-XUOTpv8DO3g`;
        headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzQyOTg4NDU5LCJleHAiOjE3NDU1ODA0NTksIm5iZiI6MTc0Mjk4ODQ1OSwianRpIjoiYnJoc1BPSVVlY3VSUW5YeSIsInN1YiI6IjEiLCJwcnYiOiJiOTEyNzk5NzhmMTFhYTdiYzU2NzA0ODdmZmYwMWUyMjgyNTNmZTQ4In0.dnF8eqg4BMF0M_IffYlMwAPINX0KEbtvYO99rf7fKR0`;
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
