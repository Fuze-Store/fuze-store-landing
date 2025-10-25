'use client';

import { Divider, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Articles from '@/containers/HelpCenter/Articles';
import FeatureFaq from '@/containers/HelpCenter/FeatureFaq';
import GeneralFaq from '@/containers/HelpCenter/GeneralFaq';

export default function Page() {
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
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Learn to Use Every Feature of Fuze Store
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              Step-by-step guides, video walkthroughs, and FAQs to master our
              POS system.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={(theme) => ({ py: { xs: theme.spacing(4), sm: theme.spacing(8) } })}
      >
        <Articles />
      </Box>

      <Box
        component="section"
        sx={(theme) => ({ py: { xs: theme.spacing(4), sm: theme.spacing(8) } })}
      >
        <GeneralFaq />
      </Box>

      <Box
        component="section"
        sx={(theme) => ({ py: { xs: theme.spacing(4), sm: theme.spacing(8) } })}
      >
        <FeatureFaq />
      </Box>

      <Divider />
    </>
  );
}
