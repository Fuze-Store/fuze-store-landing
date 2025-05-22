'use client';

import { Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const Item = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Card sx={{ height: 120 }} elevation={0}>
    <CardContent>
      <Typography
        variant="h6"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
      >
        {title}
      </Typography>

      <Typography textAlign="center">{description}</Typography>
    </CardContent>
  </Card>
);

const WhatWeOffer = () => (
  <Container maxWidth="lg">
    <Box p={4} textAlign="center">
      <Typography
        textAlign="center"
        component="h2"
        variant="h4"
        gutterBottom
        fontWeight={500}
      >
        Why Choose Us
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        color="textSecondary"
        fontWeight={400}
      >
        Whether you're running one store or scaling to many, our system is
        designed to be fast, flexible, and future-proof — no steep learning
        curves, no outdated workflows.
      </Typography>
    </Box>

    <Grid justifyContent="center" container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Item
          title="🚀 Quick & Easy Setup"
          description="Get started in minutes — no tech team required."
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Item
          title="🎯 Built for Efficiency"
          description="Speedy POS, smart table layouts, and zero friction checkouts."
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Item
          title="🔄 All-in-One Platform"
          description="POS, reservations, appointments, CRM, staff, reporting — all in
              one place."
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Item
          title="🧠 Intuitive for Staff"
          description="Minimal training needed. Your team will love it."
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Item
          title="🏪 Scales With You"
          description="One store today, a franchise tomorrow — we’ve got you."
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Item
          title="📊 Insightful Reporting"
          description="Make smarter decisions with real-time analytics."
        />
      </Grid>
    </Grid>
  </Container>
);

export default memo(WhatWeOffer);
