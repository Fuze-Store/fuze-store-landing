'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { memo } from 'react';

import img1 from '@/images/ipadpro-gift-card-1.png';
import img2 from '@/images/ipadpro-gift-card-2.png';

type Props = {
  rtl?: boolean;
};

const FeatureGiftCard = ({ rtl = false }: Props) => {
  const bulletList = [
    'Perfect for Promotions – Run seasonal campaigns or offer gift cards as rewards and incentives.',
    'Easy Gift Card Creation – Generate and issue gift cards directly from your POS or dashboard.',
    'Customizable Value – Set fixed or flexible gift card amounts based on your business needs.',
    'Maximum Usage Limit – Control how many times a gift card can be used for added security.',
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 10 }}
      alignItems="center"
      direction={rtl ? 'row-reverse' : 'row'}
    >
      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            my: 4,
            paddingBottom: '20%',
          }}
        >
          <Box
            component={Image}
            src={img1}
            alt="POS 1"
            layout="responsive"
            sx={{
              maxWidth: { xs: 400, sm: 520, md: 400, lg: 560, xl: 600 },
              position: 'relative',
              top: 0,
              right: rtl
                ? { xs: '-5%', sm: '-5%', md: '5%', lg: '8%', xl: 0 }
                : 0,
            }}
          />

          <Box
            component={Image}
            src={img2}
            alt="POS 2"
            layout="responsive"
            sx={{
              position: 'absolute',
              top: '30%',
              maxWidth: { xs: 400, sm: 520, md: 400, lg: 560, xl: 600 },
              right: rtl ? 0 : { xs: '5%', md: '-10%', lg: '-8%', xl: 0 },
            }}
          />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <StyledIconPlaceholder mb={2}>
          <CardGiftcardOutlinedIcon
            color="primary"
            sx={{ height: 24, width: 24 }}
          />
        </StyledIconPlaceholder>

        <Box mb={2}>
          <Typography variant="h5" fontWeight="500" gutterBottom>
            Gift Cards
          </Typography>

          <Typography variant="subtitle1">
            Delight your customers and grow loyalty with Gift Cards — a simple
            yet powerful way to encourage repeat visits and attract new
            customers.
          </Typography>
        </Box>

        <Box component="ul" p={0} my={4}>
          {bulletList.map((text, index) => (
            <Stack
              component="li"
              key={index}
              mb={1}
              direction="row"
              alignItems="flex-start"
              spacing={1}
            >
              <Box component="span">
                <DoneIcon color="primary" sx={{ height: 28, width: 28 }} />
              </Box>
              <Typography>{text}</Typography>
            </Stack>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(FeatureGiftCard);
