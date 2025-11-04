'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

import HeroHome from '@/components/HeroHome';
import MetaHeader from '@/components/MetaHeader';
import HomeFeatures from '@/containers/Home/FeaturesSection';
import SupportedPlatform from '@/containers/Home/SupportedPlatform';
import UseCase from '@/containers/Home/UseCase';
import Newsletter from '@/containers/Newsletter';
import WhatWeOffer from '@/containers/WhatWeOffer';

export default function Page() {
  return (
    <>
      <MetaHeader
        title=""
        description="Welcome to Fuze Store, your all-in-one solution for managing your business efficiently."
      />

      <Box>
        {/* Hero  */}
        <HeroHome />

        {/* Features */}
        <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
          <HomeFeatures />

          <Box mt={6} px={2} textAlign="center">
            <Button
              LinkComponent={Link}
              href="/features"
              variant="contained"
              disableElevation
              sx={{ maxWidth: 360 }}
              fullWidth
              size="extra-large"
              endIcon={<ArrowForwardIcon fontSize="inherit" />}
            >
              Explore All Features
            </Button>
          </Box>
        </Box>

        {/* What We Offer */}
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
          <WhatWeOffer />

          <Box mt={6} px={2} textAlign="center">
            <Button
              LinkComponent={Link}
              href="/register"
              variant="contained"
              disableElevation
              sx={{ maxWidth: 360 }}
              fullWidth
              size="extra-large"
              endIcon={<ArrowForwardIcon fontSize="inherit" />}
            >
              Try it Free
            </Button>
          </Box>
        </Box>

        {/* Use Case */}
        <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
          <UseCase />

          {/* <Box mt={6} px={2} textAlign="center">
            <Button
              variant="contained"
              disableElevation
              sx={{ maxWidth: 360 }}
              fullWidth
              size="extra-large"
              endIcon={<ArrowForwardIcon fontSize="inherit" />}
            >
              Browse Use Cases
            </Button>
          </Box> */}
        </Box>

        {/* Platform */}
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
          <SupportedPlatform />
        </Box>

        {/* Newsletter */}
        <Box
          component="section"
          sx={(theme) => ({
            py: theme.spacing(10),
          })}
        >
          <Newsletter />
        </Box>

        <Divider />
      </Box>
    </>
  );
}
