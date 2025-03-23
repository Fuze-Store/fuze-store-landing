'use client';

// Import the functions you need from the SDKs you need
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Box from '@mui/material/Box';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import * as React from 'react';

import AppBar from '@/components/AppBar';
import SideBar from '@/components/SideBar';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { authPages } from '@/helpers/page.helper';
import AppProvider from '@/providers/App';
import { usePathname } from 'next/navigation';

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
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <AppProvider>
              {showNavigation && <AppBar />}
              <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default' }}
              >
                {children}
              </Box>
              {showNavigation && <SideBar />}
            </AppProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
