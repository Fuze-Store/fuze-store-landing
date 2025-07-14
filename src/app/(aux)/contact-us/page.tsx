'use client';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';

import MetaHeader from '@/components/MetaHeader';
import ScrollTop from '@/components/ScrollToTop';
import ContactUsForm from '@/containers/ContactUs/Form';
import ContactUsFormProvider from '@/containers/ContactUs/Form/Provider';
import ContactUsFormSubmit from '@/containers/ContactUs/Form/Submit';

export default function ContactUsPage() {
  return (
    <>
      <MetaHeader
        title="Contact Us"
        description="Get in touch with Fuze Store for support and inquiries."
      />

      <ContactUsFormProvider>
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
                gutterBottom
                color="textSecondary"
                fontWeight={400}
              >
                Tired of wasting thousands of hours starting from scratch on
                every project and rebuilding the same components? Untitled UI
                comes with everything you need to design modern and beautiful UI
                and websites.
              </Typography>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
          <Container maxWidth="sm">
            <ContactUsForm />

            <ContactUsFormSubmit
              variant="contained"
              disableElevation
              fullWidth
            />
          </Container>
        </Box>

        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ContactUsFormProvider>
    </>
  );
}
