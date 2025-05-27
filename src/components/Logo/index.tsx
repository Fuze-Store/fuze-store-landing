'use client';

import { useTheme } from '@mui/material';
import Image from 'next/image';

import logoWhite from '@/assets/logo/logo-white.png';
import logoDark from '@/assets/logo/logo.png';

type Props = {
  isThemeDark?: boolean;
  width?: number;
  height?: number;
};

export default function Logo({
  width = 40,
  height = 40,
  isThemeDark = false,
}: Props) {
  const theme = useTheme();
  const logo =
    theme.palette.mode === 'dark' || isThemeDark ? logoWhite : logoDark;
  return <Image src={logo} width={width} height={height} alt="Logo" />;
}
