'use client';

import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import DoneIcon from '@mui/icons-material/Done';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import FrontHandOutlinedIcon from '@mui/icons-material/FrontHandOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import SectionContainer from '@/components/SectionContainer';

type Props = {
  rtl?: boolean;
};

const FeatureCatalog = ({ rtl = false }: Props) => {
  const bulletCategoryList = [
    'Add color codes and images to visually identify categories.',
    'Create nested categories with parent-child organization',
    'Choose which categories appear on your POS Register for a clean, focused interface',
  ];
  const bulletProductList = [
    'Support for simple or bundled products.',
    'Enable stock tracking with low-stock alerts.',
    'Include cost and tax details for accurate pricing.',
    'Set special pricing and schedules for promotions and happy hours.',
  ];

  const bulletServiceList = [
    'All product features (except stock).',
    'Add service duration to manage appointments efficiently.',
    'Customize pricing, attach taxes, and link with modifiers for extra add-ons.',
  ];

  const bulletModifierList = [
    'Choose between single or multiple option selections.',
    'Make modifiers required or optional to fit your workflow.',
    'Great for add-ons, toppings, extras, or service options.',
    'Add custom labels to display neatly in your POS Register.',
  ];

  return (
    <>
      <Stack mb={10} alignItems="center" textAlign="center">
        <StyledIconPlaceholder mb={2}>
          <MenuBookOutlinedIcon
            color="primary"
            sx={{ height: 24, width: 24 }}
          />
        </StyledIconPlaceholder>

        <Typography variant="h4" fontWeight="500" gutterBottom>
          Smart Catalog Management
        </Typography>

        <Typography
          variant="h6"
          maxWidth={900}
          color="text.secondary"
          gutterBottom
        >
          Showcase everything your store offers — from food and drinks to
          services and add-ons — all in one organized place. The Catalogs
          feature helps you manage your Categories, Products, Services, and
          Modifiers effortlessly so your POS always stays clean and up to date.
        </Typography>
      </Stack>

      <Grid container spacing={{ xs: 2, sm: 8 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box mb={4}>
            <StyledIconPlaceholder mb={2}>
              <CategoryOutlinedIcon
                color="primary"
                sx={{ height: 24, width: 24 }}
              />
            </StyledIconPlaceholder>

            <SectionContainer>
              <Typography variant="h6" fontWeight="500">
                Categories
              </Typography>

              <Typography>
                Organize your store with style and clarity.
              </Typography>

              <Box component="ul" p={0} my={4}>
                {bulletCategoryList.map((text, index) => (
                  <Stack
                    component="li"
                    key={index}
                    mb={1}
                    direction="row"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    <Box component="span">
                      <DoneIcon
                        color="primary"
                        sx={{ height: 24, width: 24 }}
                      />
                    </Box>
                    <Typography>{text}</Typography>
                  </Stack>
                ))}
              </Box>
            </SectionContainer>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Box mb={4}>
            <StyledIconPlaceholder mb={2}>
              <ExtensionOutlinedIcon
                color="primary"
                sx={{ height: 24, width: 24 }}
              />
            </StyledIconPlaceholder>

            <SectionContainer>
              <Typography variant="h6" fontWeight="500">
                Modifiers
              </Typography>

              <Typography>
                Let customers personalize their orders effortlessly.
              </Typography>

              <Box component="ul" p={0} my={4}>
                {bulletModifierList.map((text, index) => (
                  <Stack
                    component="li"
                    key={index}
                    mb={1}
                    direction="row"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    <Box component="span">
                      <DoneIcon
                        color="primary"
                        sx={{ height: 24, width: 24 }}
                      />
                    </Box>
                    <Typography>{text}</Typography>
                  </Stack>
                ))}
              </Box>
            </SectionContainer>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Box mb={4}>
            <StyledIconPlaceholder mb={2}>
              <LocalMallOutlinedIcon
                color="primary"
                sx={{ height: 24, width: 24 }}
              />
            </StyledIconPlaceholder>

            <SectionContainer mb={2}>
              <Typography variant="h6" fontWeight="500">
                Products
              </Typography>

              <Typography>
                Manage everything you sell — from single items to bundled deals.
              </Typography>

              <Box component="ul" p={0} my={4}>
                {bulletProductList.map((text, index) => (
                  <Stack
                    component="li"
                    key={index}
                    mb={1}
                    direction="row"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    <Box component="span">
                      <DoneIcon
                        color="primary"
                        sx={{ height: 24, width: 24 }}
                      />
                    </Box>
                    <Typography>{text}</Typography>
                  </Stack>
                ))}
              </Box>
            </SectionContainer>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Box mb={4}>
            <StyledIconPlaceholder mb={2}>
              <FrontHandOutlinedIcon
                color="primary"
                sx={{ height: 24, width: 24 }}
              />
            </StyledIconPlaceholder>

            <SectionContainer mb={2}>
              <Typography variant="h6" fontWeight="500">
                Services
              </Typography>

              <Typography>
                Perfect for salons, spas, and other service-based stores.
              </Typography>

              <Box component="ul" p={0} my={4}>
                {bulletServiceList.map((text, index) => (
                  <Stack
                    component="li"
                    key={index}
                    mb={1}
                    direction="row"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    <Box component="span">
                      <DoneIcon
                        color="primary"
                        sx={{ height: 24, width: 24 }}
                      />
                    </Box>
                    <Typography>{text}</Typography>
                  </Stack>
                ))}
              </Box>
            </SectionContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(FeatureCatalog);
