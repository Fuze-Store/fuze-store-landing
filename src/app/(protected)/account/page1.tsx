'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from '@/enums/path.enum';
import { Avatar, Card, CardContent, Grid2, Stack } from '@mui/material';
import Link from 'next/link';

const menus = [
  {
    label: 'Account Details',
    description: 'Manage your account information',
    path: paths.accountInfo,
  },
  {
    label: 'Subscription',
    description: 'Manage your subscription',
    path: paths.accountSubscription,
  },
  {
    label: 'Address',
    description: 'Manage your account address',
    path: paths.accountAddress,
  },
  {
    label: 'Security',
    description: 'Manage your account security',
    path: paths.accountSecurity,
  },
];

export default function Page() {
  return (
    <>
      <Container disableGutters maxWidth="lg">
        <Box
          mb={2}
          sx={{
            height: 160,
            borderRadius: 4,
            position: 'relative',
            display: 'flex',
            py: 2,
            px: 3,
            flexDirection: 'row',
            alignItems: 'center',
            // bgcolor: (theme) => theme.palette.grey[100],
            // bgcolor: 'rgba(221, 229, 217, 0.24)',
            bgcolor: '#fcfdf7',
          }}
        >
          <Container maxWidth="lg">
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{ height: 56, width: 56, fontSize: 28, lineHeight: 56 }}
              >
                KD
              </Avatar>

              <Box>
                <Typography variant="h5">Kim Del Rosario</Typography>
                <Typography variant="body2" color="textSecondary">
                  kimuel.delrosario@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Box>

        <Grid2 container spacing={1}>
          {menus.map((menu) => (
            <Grid2 key={menu.label} size={{ xs: 6, md: 4 }}>
              <Link href={menu.path} style={{ textDecoration: 'none' }}>
                <Card
                  variant="elevation"
                  elevation={0}
                  sx={{
                    height: 150,
                    boxShadow: 'none',
                    bgcolor: '#fcfdf7',
                  }}
                >
                  <CardContent>
                    <Typography variant="subtitle1">{menu.label}</Typography>
                    {menu.description && (
                      <Typography variant="body2" color="textSecondary">
                        {menu.description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
}
