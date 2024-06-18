'use client';

import { useTheme } from '@mui/material';
import Image from 'next/image';

import logoWhite from '@/assets/logo/logo-white.png';
import logoDark from '@/assets/logo/logo.png';

export default function Logo({
  width = 40,
  height = 40,
}: {
  width?: number;
  height?: number;
}) {
  const theme = useTheme();
  const logo = theme.palette.mode === 'dark' ? logoWhite : logoDark;
  return <Image src={logo} width={width} height={height} alt="Logo" />;
}
