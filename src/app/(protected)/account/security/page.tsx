'use client';

import PasswordIcon from '@mui/icons-material/Password';
import Container from '@mui/material/Container';

import { paths } from '@/enums/path.enum';
import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Toolbar />
      <Container sx={{ py: 2 }} maxWidth="sm">
        <Card variant="outlined" elevation={0}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                LinkComponent={Link}
                href={paths.accountSecurityPassword}
              >
                <ListItemIcon>
                  <PasswordIcon />
                </ListItemIcon>
                <ListItemText primary="Change Password" />
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
      </Container>
    </>
  );
}
