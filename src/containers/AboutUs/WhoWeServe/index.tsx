'use client';

import { Stack, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Image from 'next/image';
import './style.css';

const StackItem = styled(Box)(({ theme }) => ({
  minWidth: 0,
  flex: `0 0 100%`,
  height: 240,
  marginRight: theme.spacing(1),
  marginLeft: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    flex: `0 0 25%`,
  },
  [theme.breakpoints.up('md')]: {
    flex: `0 0 20%`,
  },
}));

const Item = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => (
  <StackItem className="embla__slide_who_we_serve">
    <Stack
      sx={{ p: 3 }}
      direction="column"
      flexWrap="wrap"
      alignItems="space-between"
    >
      <Stack mb={2} justifyContent="center" alignItems="center">
        <Box sx={{ flex: 1, height: 80 + 4, width: 80 + 4 }}>
          <Image src={imgSrc} alt={title} width={80} height={80} />
        </Box>
      </Stack>
      <Typography
        textAlign="center"
        variant="h6"
        fontWeight="bold"
        gutterBottom
      >
        {title}
      </Typography>
    </Stack>
  </StackItem>
);

const WhoWeServe = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      active: true,
      axis: 'x',
      dragFree: true,
      // slidesToScroll: 'auto',
    },
    [
      WheelGesturesPlugin(),
      AutoScroll({ playOnInit: true, active: true, stopOnFocusIn: false }),
    ],
  );

  return (
    <>
      <Container maxWidth="md">
        <Box mb={8}>
          <Typography
            textAlign="center"
            component="h2"
            variant="h4"
            gutterBottom
            fontWeight={500}
          >
            Who We Serve
          </Typography>

          <Typography
            textAlign="center"
            variant="h6"
            gutterBottom
            color="textSecondary"
            fontWeight={400}
          >
            Today, our platform is used by restaurants, salons, cafés, clinics,
            and multi-store chains across the country. Whether you manage one
            location or ten, we’ve got your back.
          </Typography>
        </Box>
      </Container>

      <div className="embla" ref={emblaRef}>
        <Stack direction="row" className="embla__container" px={1}>
          <Item
            imgSrc="https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/ford-64f1953507e77.webp"
            title="Laundry Stations"
            description="Track orders by tag, manage service types, pricing, and notify customers when ready."
          />
          <Item
            imgSrc="https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/nissan-61b2c15b26163.webp"
            title="Water Refilling Stations"
            description="Handle recurring deliveries, customer routes, bottle deposits, and quick POS."
          />
          <Item
            imgSrc="https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/mitsubishi-5f4da9847ea60.webp"
            title="Veterinary Clinics"
            description="Book appointments, manage patient records, sell pet products, and track prescriptions."
          />
          <Item
            imgSrc="https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/mg-667129526125c.webp"
            title="Clinics"
            description="Schedule sessions, assign rooms/equipment, manage services and invoices with ease."
          />
          <Item
            imgSrc="https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/hyundai-6380612130230.webp"
            title="Restaurants & Food Hubs"
            description="Use area/table layouts, modify dishes, split bills, and track dine-in/takeout orders."
          />
          <Item
            imgSrc="https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/mazda-5c8b19bcc76ed.webp"
            title="Personal Services"
            description="Ideal for salons, barbers, wellness spas—appointments, products, and staff commissions."
          />
          <Item
            imgSrc="https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/54617d00e8edc.webp"
            title="Small Retail Businesses"
            description="	Simple inventory, barcode support, and customer management for any local shop."
          />
          <Item
            imgSrc="https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/54617cfcc4917.webp"
            title="Small Retail Businesses"
            description="	Simple inventory, barcode support, and customer management for any local shop."
          />
          <Item
            imgSrc="https://d1hv7ee95zft1i.cloudfront.net/custom/car-make/standard/suzuki-6156dca556a35.webp"
            title="Small Retail Businesses"
            description="	Simple inventory, barcode support, and customer management for any local shop."
          />
        </Stack>
      </div>
    </>
  );
};

export default WhoWeServe;
