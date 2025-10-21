'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureExpense = ({ rtl = false }: Props) => {
  const bulletList = [
    'Create & Categorize Expenses – Log every expense and group them by category for clear insights into where your money goes.',
    'Color-Coded Tracking – Use custom hex colors to visually distinguish expense types at a glance.',
    'Approval Workflow – Manage expense statuses with Pending, Approved, and Rejected stages for better accountability.',
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
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#ccc',
            borderRadius: 8,
            height: 460,
            width: '100%',
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <StyledIconPlaceholder mb={2}>
          <EventOutlinedIcon color="primary" sx={{ height: 24, width: 24 }} />
        </StyledIconPlaceholder>

        <Box mb={2}>
          <Typography variant="h5" fontWeight="500">
            Expense Management
          </Typography>

          <Typography variant="subtitle1">
            Take full control of your store’s spending with our Expense
            Management feature. Stay organized, monitor costs, and make smarter
            financial decisions — all from one place.
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

export default memo(FeatureExpense);
