'use client';

import EmergencyIcon from '@mui/icons-material/Emergency';
import FrontHandIcon from '@mui/icons-material/FrontHand';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import PetsIcon from '@mui/icons-material/Pets';
import StoreIcon from '@mui/icons-material/Store';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { Stack, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import './style.css';

type ItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const StackItem = styled(Box)(({ theme }) => ({
  minWidth: 0,
  flex: `0 0 100%`,
  // height: 240,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.grey[900]
      : theme.palette.grey[200],
  marginRight: theme.spacing(1),
  marginLeft: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    flex: `0 0 50%`,
  },
  [theme.breakpoints.up('md')]: {
    flex: `0 0 25%`,
  },
  [theme.breakpoints.up('lg')]: {
    flex: `0 0 20%`,
  },
}));

const Item = ({ icon, title, description }: ItemProps) => (
  <StackItem className="embla__slide_use_case">
    <Stack
      sx={{ p: 3, height: '100%' }}
      direction="column"
      alignItems="space-between"
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            borderRadius: '50%',
            borderWidth: 5,
            borderColor: '#424242',
            borderStyle: 'solid',
            height: 40 + 20 + 4,
            width: 40 + 20 + 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
      </Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography fontWeight={500} color="text.secondary">
        {description}
      </Typography>
    </Stack>
  </StackItem>
);

const UseCase = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    active: true,
    axis: 'x',
    slidesToScroll: 'auto',
  });

  return (
    <>
      <Container maxWidth="lg">
        <Box mb={8}>
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
            Built for Every Business. Designed for Your Industry.
          </Typography>

          <Typography
            textAlign="center"
            variant="h6"
            gutterBottom
            color="textSecondary"
            fontWeight={400}
          >
            Whether you manage appointments, track orders, or serve walk-ins,
            our POS system adapts to your unique workflow—without the need for
            customization or compromise.
          </Typography>
        </Box>
      </Container>

      <div className="embla" ref={emblaRef}>
        <Stack direction="row" className="embla__container" px={1}>
          <Item
            icon={<LocalLaundryServiceIcon sx={{ height: 40, width: 40 }} />}
            title="Laundry Stations"
            description="Track orders by tag, manage service types, pricing, and notify customers when ready."
          />
          <Item
            icon={<WaterDropIcon sx={{ height: 40, width: 40 }} />}
            title="Water Refilling Stations"
            description="Handle recurring deliveries, customer routes, bottle deposits, and quick POS."
          />
          <Item
            icon={<PetsIcon sx={{ height: 40, width: 40 }} />}
            title="Veterinary Clinics"
            description="Book appointments, manage patient records, sell pet products, and track prescriptions."
          />
          <Item
            icon={<EmergencyIcon sx={{ height: 40, width: 40 }} />}
            title="Clinics"
            description="Schedule sessions, assign rooms/equipment, manage services and invoices with ease."
          />
          <Item
            icon={<LocalDiningIcon sx={{ height: 40, width: 40 }} />}
            title="Restaurants & Food Hubs"
            description="Use area/table layouts, modify dishes, split bills, and track dine-in/takeout orders."
          />
          <Item
            icon={<FrontHandIcon sx={{ height: 40, width: 40 }} />}
            title="Personal Services"
            description="Ideal for salons, barbers, wellness spas—appointments, products, and staff commissions."
          />
          <Item
            icon={<StoreIcon sx={{ height: 40, width: 40 }} />}
            title="Small Retail Businesses"
            description="	Simple inventory, barcode support, and customer management for any local shop."
          />
        </Stack>
      </div>
    </>
  );
};

export default UseCase;
