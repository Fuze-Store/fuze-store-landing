'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { PropsWithChildren } from 'react';

export default function PrivacyPage({ children }: PropsWithChildren) {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        bgcolor:
          theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[50],
        py: theme.spacing(12),
      })}
    >
      <Container maxWidth="md">
        <Box mb={10}>
          <Typography
            textAlign="center"
            component="h2"
            variant="h4"
            gutterBottom
            fontWeight={500}
          >
            Privacy Policy
          </Typography>

          <Typography
            textAlign="center"
            variant="subtitle1"
            gutterBottom
            color="textSecondary"
            fontWeight={400}
          >
            At Fuze Store, we are committed to safeguarding your personal
            information and ensuring transparency in how we collect, use, and
            protect your data. This Privacy Policy outlines our practices and
            your rights regarding your information when you interact with our
            application.
          </Typography>
        </Box>

        {children}
      </Container>
    </Box>
  );
}
