'use client';

// Import the functions you need from the SDKs you need
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Box from '@mui/material/Box';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';

import '@/containers/Localization/i18n';
import { authPages } from '@/helpers/page.helper';
import { store } from '@/rtk/configureStore';

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppBar from '@/containers/Appbar';
import AuthProvider from '@/containers/Auth/Context';
import SideBar from '@/containers/SideBar';
import AppProvider from '@/providers/App';
import ConfirmationProvider from '@/providers/Confirmation';
import AxiosInterceptor from '@/utils/AxiosInterceptor';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD-rb_g4QWK5ZASANVMAXiO3qFhzwFaaeI',
  authDomain: 'fuze-landing-app.firebaseapp.com',
  projectId: 'fuze-landing-app',
  storageBucket: 'fuze-landing-app.appspot.com',
  messagingSenderId: '640997110614',
  appId: '1:640997110614:web:e5a9877a4748e05e785cf7',
  measurementId: 'G-1WWW2RE0RY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showNavigation = !authPages.includes(pathname);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {/* <SessionProvider> */}
          <QueryClientProvider client={queryClient}>
            <AppRouterCacheProvider>
              <ThemeRegistry>
                <AuthProvider>
                  <AppProvider>
                    <ConfirmationProvider>
                      <ReactQueryDevtools />
                      <AxiosInterceptor />
                      {showNavigation && <AppBar />}
                      <Box
                        component="main"
                        sx={{ flexGrow: 1, bgcolor: 'background.default' }}
                      >
                        {children}
                      </Box>
                      {showNavigation && <SideBar />}
                      <Toaster
                        // theme={theme.dark ? 'light' : 'dark'}
                        closeButton
                        position="bottom-right"
                      />
                    </ConfirmationProvider>
                  </AppProvider>
                </AuthProvider>
              </ThemeRegistry>
            </AppRouterCacheProvider>
          </QueryClientProvider>
          {/* </SessionProvider> */}
        </Provider>
      </body>
    </html>
  );
}
