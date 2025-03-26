'use client';

import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import Footer from '@/components/Footer';
import {
  alpha,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
} from '@mui/material';

const FeatureItem = () => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <Box
      sx={{
        p: 1,
        height: 24,
        width: 24,
        borderRadius: '50%',
        backgroundColor: (theme) => theme.palette.success.light,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CheckIcon
        sx={{
          fontWeight: 500,
          fontSize: 16,
          color: (theme) => theme.palette.primary.dark,
        }}
      />
    </Box>

    <Typography variant="body2" color="textSecondary">
      Access to basic features
    </Typography>
  </Stack>
);

const Plan = () => (
  <Card sx={{ borderRadius: 4 }}>
    <CardContent
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        textAlign: 'center',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Chip
          sx={{
            backgroundColor: (theme) =>
              alpha(theme.palette.primary.light, 0.16),
            px: 2,
            fontWeight: 500,
          }}
          variant="outlined"
          label="Starter"
          color="primary"
        />
      </Box>

      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ verticalAlign: 'bottom' }}
      >
        <Typography
          variant="h6"
          sx={{ verticalAlign: 'top' }}
          component="span"
          fontWeight={700}
        >
          PHP
        </Typography>
        1,500
      </Typography>

      <Typography gutterBottom color="textSecondary" sx={{ maxWidth: 300 }}>
        plus 3% above PHP 25,000.00 monthly sales
      </Typography>
    </CardContent>
    <Divider />
    <CardContent>
      <Box mb={2}>
        <Typography variant="subtitle1" fontWeight={500}>
          Features
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Everything in our Free plan plus ...
        </Typography>
      </Box>

      <Grid container spacing={1}>
        <Grid size={{ xs: 12 }}>
          <FeatureItem />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FeatureItem />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FeatureItem />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FeatureItem />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FeatureItem />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FeatureItem />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FeatureItem />
        </Grid>
      </Grid>
    </CardContent>
    <Divider />
    <CardContent>
      <Button variant="contained" disableElevation fullWidth>
        Get Started
      </Button>
    </CardContent>
  </Card>
);

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: 'rgba(0, 0, 0, .03)',
  // borderBottom: '1px solid rgba(0, 0, 0, .125)',
  // flexDirection: 'row-reverse',
  // [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
  //   {
  //     transform: 'rotate(90deg)',
  //   },
  // [`& .${accordionSummaryClasses.content}`]: {
  //   marginLeft: theme.spacing(1),
  // },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
  color: theme.palette.text.secondary,
  // borderBottom: '1px solid rgba(0, 0, 0, .125)',
}));

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
          py: theme.spacing(12),
        })}
      >
        <Container maxWidth="lg">
          <Box mb={8}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Pricing
            </Typography>

            <Typography
              textAlign="center"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry’s standard dummy..
            </Typography>
          </Box>

          <Grid container direction="row" spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Plan />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Plan />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Plan />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(12) })}>
        <Container disableGutters maxWidth="md">
          <Box px={2} mb={8}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              FAQs
            </Typography>

            <Typography
              textAlign="center"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry’s standard dummy..
            </Typography>
          </Box>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6" fontWeight={600} component="span">
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="h6" fontWeight={600} component="span">
                Accordion 2
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography variant="h6" fontWeight={600} component="span">
                Accordion 3
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>

      <Divider />

      <Footer />
    </>
  );
}
