'use client';

import { Grid, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ContactUsForm from '@/containers/ContactUs/Form';
import ContactUsFormProvider from '@/containers/ContactUs/Form/Provider';
import ContactUsFormSubmit from '@/containers/ContactUs/Form/Submit';
import ContactUsInfo from '@/containers/ContactUs/Info';

export default function ContactUsPage() {
  return (
    <>
      <Box
        component="section"
        sx={(theme) => ({
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.grey[50],
          py: theme.spacing(10),
        })}
      >
        <Toolbar />
        <Container maxWidth="md">
          <Box mb={8}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Contact Us
            </Typography>

            <Typography
              textAlign="center"
              variant="h6"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              Tired of wasting thousands of hours starting from scratch on every
              project and rebuilding the same components? Untitled UI comes with
              everything you need to design modern and beautiful UI and
              websites.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container
        component="section"
        sx={(theme) => ({ py: theme.spacing(10) })}
        maxWidth="lg"
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactUsFormProvider>
              <ContactUsForm />
              <ContactUsFormSubmit
                variant="contained"
                disableElevation
                fullWidth
              />
            </ContactUsFormProvider>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box px={{ sm: 4 }} py={{ sm: 4 }}>
              <ContactUsInfo />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
