import { createTheme } from '@mui/material/styles';
import { Nunito } from 'next/font/google';

const font = Nunito({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    'extra-large': true;
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#196c32',
      dark: '#114b23',
      light: '#47895b',
    },
    secondary: {
      main: '#516351',
      dark: '#384538',
      light: '#738273',
    },
    background: {
      // default: '#fcfdf7',
    },
  },
  typography: {
    fontFamily: font.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 50,
          textTransform: 'none',
        }),
      },
      variants: [
        {
          props: { size: 'extra-large' },
          style: {
            fontSize: '1rem',
            padding: '0.65rem 2.75rem',
          },
        },
      ],
    },
  },
});

export const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#87d991',
      dark: '#5e9765',
      light: '#9fe0a7',
    },
    secondary: {
      main: '#b8ccb6',
      dark: '#808e7f',
      light: '#c6d6c4',
    },
  },
});

export default lightTheme;
