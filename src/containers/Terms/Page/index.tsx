'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { PropsWithChildren } from 'react';

export default function TermsAndConditionsPage({
  children,
}: PropsWithChildren) {
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
            Terms and Conditions
          </Typography>

          <Typography
            textAlign="center"
            gutterBottom
            color="textSecondary"
            fontWeight={400}
          >
            Please read these Terms and Conditions carefully before using our
            website. By accessing or using Fuze Store, you agree to be bound by
            these terms. If you do not agree with any part of the terms, you may
            not use our services.
          </Typography>
        </Box>
        {children}
      </Container>
    </Box>
  );
}
