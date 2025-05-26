'use client';

import PasswordIcon from '@mui/icons-material/Password';
import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Container from '@mui/material/Container';
import Link from 'next/link';

import { paths } from '@/enums/path.enum';

export default function Page() {
  return (
    <Container maxWidth="sm">
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
  );
}
