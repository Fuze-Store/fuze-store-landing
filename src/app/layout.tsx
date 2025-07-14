// Import the functions you need from the SDKs you need
// import { getAnalytics, isSupported } from 'firebase/analytics';
// import { initializeApp } from 'firebase/app';
import { PropsWithChildren } from 'react';

import Main from '@/containers/Main';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyD-rb_g4QWK5ZASANVMAXiO3qFhzwFaaeI',
//   authDomain: 'fuze-landing-app.firebaseapp.com',
//   projectId: 'fuze-landing-app',
//   storageBucket: 'fuze-landing-app.appspot.com',
//   messagingSenderId: '640997110614',
//   appId: '1:640997110614:web:e5a9877a4748e05e785cf7',
//   measurementId: 'G-1WWW2RE0RY',
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

export const metadata = {
  title: 'Fuze Store',
  description: 'Fuze Store - Your POS and Store Management Solution',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body id="main">
        <Main>{children}</Main>
      </body>
    </html>
  );
}
