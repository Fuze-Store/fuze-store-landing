'use client';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useContext } from 'react';

import Logo from '@/components/Logo';
import { AppContext } from '@/contexts/App';

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
}));

export default function Footer() {
  const { setShowDrawer } = useContext(AppContext);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 64,
  });

  return (
    <Box sx={{ py: 4 }} component="footer">
      <Container maxWidth="lg">
        <Box>
          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Logo width={40} height={40} />
            </Box>
            <Stack direction="row" spacing={1}>
              <LinkItem className="social" href="/">
                <FacebookOutlinedIcon sx={{ width: 40, height: 40 }} />
              </LinkItem>
              <LinkItem className="social" href="/">
                <XIcon sx={{ width: 40, height: 40 }} />
              </LinkItem>
              <LinkItem className="social" href="/">
                <InstagramIcon sx={{ width: 40, height: 40 }} />
              </LinkItem>
            </Stack>
          </Stack>
        </Box>

        <ListGroup sx={{ my: 4 }}>
          <LinkItem href="/">FAQs</LinkItem>
          <LinkItem href="/">License</LinkItem>
          <LinkItem href="/">Privacy</LinkItem>
          <LinkItem href="/">Terms</LinkItem>
          <LinkItem href="/">Cookies</LinkItem>
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
