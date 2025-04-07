'use client';

// Import the functions you need from the SDKs you need
import { useTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Box from '@mui/material/Box';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';

import '@/containers/Localization/i18n';
import { store } from '@/rtk/configureStore';
import AxiosInterceptor from '@/utils/AxiosInterceptor';

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppBar from '@/containers/Appbar';
import SideBar from '@/containers/SideBar';
import AppProvider from '@/providers/App';
import ConfirmationProvider from '@/providers/Confirmation';

import './globals.css';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 60 * 1000,
    },
  },
});

export default function RootLayout({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <SessionProvider>
                <AppRouterCacheProvider>
                  <ThemeRegistry>
                    <AppProvider>
                      <ConfirmationProvider>
                        <ReactQueryDevtools />
                        <AxiosInterceptor />
                        <AppBar />
                        <Box
                          component="main"
                          sx={{
                            flexGrow: 1,
                            bgcolor: (theme) => theme.palette.grey[50],
                            minHeight: '100vh',
                            flexDirection: 'column',
                            display: 'flex',
                          }}
                        >
                          {children}
                        </Box>
                        <SideBar />
                        <Toaster
                          theme={
                            theme.palette.mode === 'dark' ? 'dark' : 'light'
                          }
                          closeButton
                          position="top-right"
                        />
                      </ConfirmationProvider>
                    </AppProvider>
                  </ThemeRegistry>
                </AppRouterCacheProvider>
              </SessionProvider>
            </HydrationBoundary>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
