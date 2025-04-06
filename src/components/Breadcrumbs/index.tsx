'use client';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, Typography } from '@mui/material';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs = [
    <Link
      component={NextLink}
      underline="hover"
      key="1"
      color="inherit"
      href="/"
    >
      Home
    </Link>,
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const label = decodeURIComponent(segment.replace(/-/g, ' ')).replace(
        /\b\w/g,
        (l) => l.toUpperCase(),
      );

      const isLast = index === segments.length - 1;

      return isLast ? (
        <Typography key={href} color="text.primary">
          {label}
        </Typography>
      ) : (
        <Link
          component={NextLink}
          underline="hover"
          key={href}
          color="inherit"
          href={href}
        >
          {label}
        </Link>
      );
    }),
  ];

  return (
    <MUIBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      {breadcrumbs}
    </MUIBreadcrumbs>
  );
};

export default memo(Breadcrumbs);
