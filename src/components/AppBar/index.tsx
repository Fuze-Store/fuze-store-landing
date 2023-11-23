'use client';

import DashboardIcon from '@mui/icons-material/Dashboard';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Link } from '@mui/material';
import AppBarMui from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

const ListGroup = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  listStyleType: 'none',
}));

const ListItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  '&.logo': {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
}));

const LinkItem = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
  '&.social': {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
}));

export default function AppBar() {
  return (
    <AppBarMui
      color="transparent"
      position="absolute"
      sx={{ boxShadow: 'none', zIndex: 2000 }}
    >
      <Toolbar style={{ minHeight: 128 }}>
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <ListGroup className="list-none">
            <ListItem>
              <LinkItem href="/">
                <LocalPhoneOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
                <span> +1 631 123 4567</span>
              </LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/">About Us</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/">Products</LinkItem>
            </ListItem>
            <ListItem className="logo">
              <DashboardIcon sx={{ fontSize: 80, color: '#444' }} />
            </ListItem>
            <ListItem>
              <LinkItem href="/">Our Work</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/">Contact Us</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem className="social" href="/">
                <FacebookOutlinedIcon />
              </LinkItem>
              <LinkItem className="social" href="/">
                <FacebookOutlinedIcon />
              </LinkItem>
              <LinkItem className="social" href="/">
                <FacebookOutlinedIcon />
              </LinkItem>
            </ListItem>
          </ListGroup>
        </Container>
      </Toolbar>
    </AppBarMui>
  );
}
