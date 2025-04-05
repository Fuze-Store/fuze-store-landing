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

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = decodeURIComponent(segment.replace(/-/g, ' '));

    return {
      href,
      label: label.charAt(0).toUpperCase() + label.slice(1),
    };
  });

  return (
    <MUIBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      <Link
        component={NextLink}
        underline="hover"
        key="1"
        color="inherit"
        href="/"
      >
        Home
      </Link>
      {breadcrumbs.map((crumb, i) => (
        <>
          {i === breadcrumbs.length - 1 ? (
            <Typography key={crumb.href} sx={{ color: 'text.primary' }}>
              {crumb.label}
            </Typography>
          ) : (
            <Link
              component={NextLink}
              underline="hover"
              key={crumb.href}
              color="inherit"
              href={crumb.href}
            >
              {crumb.label}
            </Link>
          )}
        </>
      ))}

      {/* <li key={crumb.href} className="flex items-center">
          <span className="mx-1">/</span>
          {i === breadcrumbs.length - 1 ? (
            <span className="text-gray-800 font-medium">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:underline text-blue-600">
              {crumb.label}
            </Link>
          )}
        </li>
      ))} */}
    </MUIBreadcrumbs>
  );
};

export default memo(Breadcrumbs);
