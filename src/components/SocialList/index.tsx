'use client';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, BoxProps, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React, { memo } from 'react';

import TikTokIcon from '@/components/Icons/TikTokIcon';
import ViberIcon from '@/components/Icons/ViberIcon';

type LinkItemProps = BoxProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BoxProps> & {
    dark?: boolean;
  };

const LinkItem = styled(
  (props: LinkItemProps) => <Box component={Link} {...props} />,
  {
    shouldForwardProp: (prop) => prop !== 'dark',
  },
)(({ theme, dark = false }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(4),
  marginBottom: theme.spacing(2),
  color: dark ? theme.palette.common.white : theme.palette.common.black,
  textDecoration: 'none',
  fontWeight: 500,
  '&:hover': {
    color: theme.palette.primary.light,
  },
  '&.social': {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  '&.selected': {
    color: theme.palette.primary.main,
  },
  '&.selected:hover': {
    color: theme.palette.primary.dark,
  },
}));

const SocialList = ({ dark = false }: { dark?: boolean }) => {
  return (
    <Stack direction="row" spacing={2}>
      <LinkItem
        dark={dark}
        className="social"
        href="https://web.facebook.com/profile.php?id=61580336897253"
        title="Fuze Store"
        target="_blank"
      >
        <FacebookOutlinedIcon sx={{ width: 40, height: 40 }} />
      </LinkItem>
      <LinkItem
        dark={dark}
        className="social"
        href="https://invite.viber.com/?g2=AQBjWRnR0%2B5AhlVPjtSKqBZRo%2BgLxIe2GipjXl7aQBgkfWVuwl6pi0f7ZnGcgWbM"
        target="_blank"
      >
        <ViberIcon color="inherit" sx={{ width: 40, height: 40 }} />
      </LinkItem>
      <LinkItem
        dark={dark}
        className="social"
        href="https://instagram.com"
        target="_blank"
      >
        <InstagramIcon sx={{ width: 40, height: 40 }} />
      </LinkItem>
      <LinkItem
        dark={dark}
        className="social"
        href="https://tiktok.com"
        target="_blank"
      >
        <TikTokIcon color="inherit" sx={{ width: 40, height: 40 }} />
      </LinkItem>
    </Stack>
  );
};

export default memo(SocialList);
