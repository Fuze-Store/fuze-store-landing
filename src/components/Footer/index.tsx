'use client';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import TikTokIcon from '@/components/Icons/TikTokIcon';
import Logo from '@/components/Logo';

const ListGroup = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  listStyleType: 'none',
  padding: 0,
}));

const LinkItem = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(4),
  color: theme.palette.text.primary,
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
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 300],
        py: 4,
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Box>
          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Link href="/">
                <Logo width={40} height={40} />
              </Link>
            </Box>
            <Stack direction="row" spacing={1}>
              <LinkItem
                className="social"
                href="https://facebook.com"
                target="_blank"
              >
                <FacebookOutlinedIcon sx={{ width: 40, height: 40 }} />
              </LinkItem>
              <LinkItem className="social" href="https://x.com" target="_blank">
                <XIcon sx={{ width: 40, height: 40 }} />
              </LinkItem>
              <LinkItem
                className="social"
                href="https://instagram.com"
                target="_blank"
              >
                <InstagramIcon sx={{ width: 40, height: 40 }} />
              </LinkItem>
              <LinkItem
                className="social"
                href="https://tiktok.com"
                target="_blank"
              >
                <TikTokIcon color="inherit" sx={{ width: 40, height: 40 }} />
              </LinkItem>
            </Stack>
          </Stack>
        </Box>

        <ListGroup sx={{ my: 4 }}>
          <LinkItem
            href="/faqs"
            className={pathname === '/faqs' ? 'selected' : undefined}
          >
            FAQs
          </LinkItem>
          <LinkItem href="/">License</LinkItem>
          <LinkItem
            href="/privacy"
            className={pathname === '/privacy' ? 'selected' : undefined}
          >
            Privacy
          </LinkItem>
          <LinkItem
            href="/terms"
            className={pathname === '/terms' ? 'selected' : undefined}
          >
            Terms
          </LinkItem>
        </ListGroup>

        <Box
          sx={(theme) => ({ [theme.breakpoints.up('lg')]: { width: '80%' } })}
        >
          <Typography>
            © 2024 Untitled UI. All rights reserved. Untitled UI is not
            affiliated with Figma or Figma`s team, nor is it endorsed by or
            sponsored by Figma. A side project by Jordan who is working on
            Himalayas, a better remote jobs platform. This website was built in
            Webflow (this is an affiliate link). Crafted in Melbourne,
            Australia. We acknowledge this country’s First Nations peoples and
            their ongoing strength in practising the world’s oldest living
            culture. We acknowledge the Traditional Owners of the land on which
            our office stands, The Wurundjeri people of the Kulin Nation, and
            pay our respects to Elders past and present.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
