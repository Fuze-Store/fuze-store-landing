'use client';

import SocialList from '@/components/SocialList';
import Form from '@/containers/ContactUs/Form';
import FormProvider from '@/containers/ContactUs/Form/Provider';
import FormSubmit from '@/containers/ContactUs/Form/Submit';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
            <Typography variant="h6" mb={2} fontWeight={500}>
              Other Ways to Reach Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> support@fuzestore.com
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Phone:</strong> +1 (555) 123-4567
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Address:</strong> 123 Fuze St, Suite 100, San Francisco,
              CA 94105
            </Typography>
            <Box mt={2}>
              <Typography variant="body1" gutterBottom>
                <strong>Follow us:</strong>
              </Typography>
              <SocialList />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#ccc',
          borderRadius: 8,
          height: 460,
          width: '100%',
        }}
      /> */}
    </>
  );
}
