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

const theme = createTheme({
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

export default theme;
