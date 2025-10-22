'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureMigration = ({ rtl = false }: Props) => {
  const bulletList = [
    'Multiple Formats Supported – Import or export data using XLSX or CSV files.',
    'Quick Data Updates – Bulk upload or download information to save hours of manual work.',
    'Seamless Migration – Perfect for moving data between stores or updating your catalog.',
    'Maintain Consistency – Ensure all records are accurate and up-to-date across your system.',
    'Easy Backup & Restore – Export your data regularly for safe storage and quick recovery.',
  ];

  return (
    <>
      <StyledIconPlaceholder mb={2}>
        <ImportExportOutlinedIcon
          color="primary"
          sx={{ height: 24, width: 24 }}
        />
      </StyledIconPlaceholder>

      <Box mb={2}>
        <Typography variant="h5" fontWeight="500" gutterBottom>
          Import & Export
        </Typography>

        <Typography variant="subtitle1">
          Save time, reduce errors, and keep your data organized with our Import
          & Export tools. Whether you’re migrating from another system or
          backing up your records, it’s simple, fast, and reliable.
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
    </>
  );
};

export default memo(FeatureMigration);
