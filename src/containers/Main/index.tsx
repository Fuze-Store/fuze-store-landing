'use client';

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
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';

import '@/containers/Localization/i18n';
import { store } from '@/rtk/configureStore';
import AxiosInterceptor from '@/utils/AxiosInterceptor';

import Footer from '@/components/Footer';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppBar from '@/containers/Appbar';
import SideBar from '@/containers/SideBar';
import AppProvider from '@/providers/App';
import ConfirmationProvider from '@/providers/Confirmation';

import '@/app/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 60 * 1000,
    },
  },
});

export default function Main({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <AppRouterCacheProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <SessionProvider>
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
                        minHeight: '100vh',
                        flexDirection: 'column',
                        display: 'flex',
                      }}
                    >
                      {children}
                    </Box>
                    <Footer />
                    <SideBar />
                    <Toaster
                      theme={theme.palette.mode === 'dark' ? 'dark' : 'light'}
                      closeButton
                      position="top-right"
                    />
                  </ConfirmationProvider>
                </AppProvider>
              </ThemeRegistry>
            </SessionProvider>
          </HydrationBoundary>
        </QueryClientProvider>
      </Provider>
      <SpeedInsights />
    </AppRouterCacheProvider>
  );
}
