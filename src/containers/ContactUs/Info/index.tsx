'use client';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SocialList from '@/components/SocialList';

export default function ContactUsInfo() {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h6" mb={3} fontWeight={500}>
        Other Ways to Reach Us
      </Typography>
      <Typography variant="body1" mb={1.5}>
        <strong>Email:</strong>{' '}
        <a href="mailto:support@fuzestore.com">support@fuzestore.com</a>
      </Typography>
      <Typography variant="body1" mb={1.5}>
        <strong>Phone:</strong> (+63) 999 4817 197
      </Typography>
      <Typography variant="body1" mb={1.5}>
        <strong>Address:</strong> 1076 A. Bonifacio Balingasa, Balintawak Quezon
        City, Philippines 1115
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" mb={1.5}>
          <strong>Follow us:</strong>
        </Typography>
        <SocialList dark={theme.palette.mode === 'dark'} />
      </Box>
    </Box>
  );
}
