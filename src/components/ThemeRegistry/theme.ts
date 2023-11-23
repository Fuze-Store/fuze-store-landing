import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
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
    mode: 'dark',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
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
