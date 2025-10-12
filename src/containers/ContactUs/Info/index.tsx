'use client';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SocialList from '@/components/SocialList';

export default function ContactUsInfo() {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h6" mb={2} fontWeight={500}>
        Other Ways to Reach Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Email:</strong> support@fuzestore.com
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Phone:</strong> +1 (555) 123-4567
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Address:</strong> 123 Fuze St, Suite 100, San Francisco, CA
        94105
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" gutterBottom>
          <strong>Follow us:</strong>
        </Typography>
        <SocialList dark={theme.palette.mode === 'dark'} />
      </Box>
    </Box>
  );
}
