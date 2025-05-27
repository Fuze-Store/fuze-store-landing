'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Divider } from '@mui/material';

export default function Page() {
  return (
    <>
      <Box
        component="section"
        sx={(theme) => ({
          py: theme.spacing(10),
        })}
      >
        <Container maxWidth="lg">
          <Box p={4} textAlign="center">
            <Typography
              textAlign="center"
              component="h3"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              Use Cases
            </Typography>

            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Everything You Need to Run and Grow Your Store.
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              A modern, cloud-based POS system built for retail, service, and
              food businesses — packed with powerful features to simplify
              operations and boost sales.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Divider />
    </>
  );
}
