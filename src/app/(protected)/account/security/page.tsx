'use client';

import PasswordIcon from '@mui/icons-material/Password';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import Link from 'next/link';

import MetaHeader from '@/components/MetaHeader';
import { paths } from '@/helpers/page.helper';

export default function Page() {
  return (
    <>
      <MetaHeader
        title="Security"
        description="Manage your security settings for Fuze Store."
      />

      <Container sx={{ marginLeft: 0 }} maxWidth="sm">
        <Box py={2}>
          <Typography fontWeight={600}>Password</Typography>
          <Divider />

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
        </Box>
      </Container>
    </>
  );
}
