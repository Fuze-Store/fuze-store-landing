'use client';

import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Form from '@/containers/ContactUs/Form';
import FormProvider from '@/containers/ContactUs/Form/Provider';
import FormSubmit from '@/containers/ContactUs/Form/Submit';
import ContactUsInfo from '@/containers/ContactUs/Info';

export default function ContactUs() {
  return (
    <>
      <Box mb={8}>
        <Typography
          textAlign="center"
          component="h2"
          variant="h4"
          gutterBottom
          fontWeight={500}
        >
          Still Have Questions? / Contact Us
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <FormProvider>
            <Form />
            <FormSubmit variant="contained" fullWidth />
          </FormProvider>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box px={{ sm: 4 }} py={{ sm: 4 }}>
            <ContactUsInfo />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
