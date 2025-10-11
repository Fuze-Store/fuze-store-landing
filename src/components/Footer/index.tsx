'use client';

import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { paths } from '@/helpers/page.helper';

import Logo from '@/components/Logo';
import SocialList from '@/components/SocialList';

const ListGroup = styled('ul')(() => ({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  listStyleType: 'none',
  flexWrap: 'wrap',
  padding: 0,
}));

const LinkItem = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(4),
  marginBottom: theme.spacing(2),
  color: theme.palette.common.white,
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

export default function Footer() {
  const pathname = usePathname();

  return (
    <Box sx={{ bgcolor: '#212121', py: 4 }} component="footer">
      <Container maxWidth="lg">
        <Box>
          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Link href="/">
                <Logo isThemeDark width={40} height={40} />
              </Link>
            </Box>
            <SocialList dark />
          </Stack>
        </Box>

        <ListGroup sx={{ my: 4 }}>
          <LinkItem
            href={paths.faqs}
            className={pathname === paths.faqs ? 'selected' : undefined}
          >
            FAQs
          </LinkItem>
          <LinkItem
            href={paths.helpCenter}
            className={pathname === paths.helpCenter ? 'selected' : undefined}
          >
            Help Center
          </LinkItem>
          <LinkItem
            href={paths.privacyPolicy}
            className={
              pathname === paths.privacyPolicy ? 'selected' : undefined
            }
          >
            Privacy Policy
          </LinkItem>
          <LinkItem
            href={paths.termsAndConditions}
            className={
              pathname === paths.termsAndConditions ? 'selected' : undefined
            }
          >
            Terms and Conditions
          </LinkItem>
        </ListGroup>

        <Box
          sx={(theme) => ({ [theme.breakpoints.up('lg')]: { width: '80%' } })}
        >
          <Typography color="#fff">
            © 2025 Fuze Store. All rights reserved. Fuze Store POS and all
            related content are the property of Fuze Store. Unauthorized use,
            reproduction, or distribution is strictly prohibited.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
