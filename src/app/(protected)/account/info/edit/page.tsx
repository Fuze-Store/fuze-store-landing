'use client';

import BoltIcon from '@mui/icons-material/Bolt';
import EventIcon from '@mui/icons-material/Event';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Avatar, Card, CardContent, Stack, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <>
      <Toolbar />
      <Container maxWidth="sm">
        <Box mb={2}>
          <Card elevation={0} variant="outlined">
            <CardContent>
              <Typography>Personal Information</Typography>
            </CardContent>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar
                  sx={{ height: 56, width: 56, fontSize: 28, lineHeight: 56 }}
                >
                  KD
                </Avatar>
                <Box>
                  <Typography variant="subtitle1">Kim Del Rosario</Typography>
                  <Typography variant="body2" color="textSecondary">
                    kimuel.delrosario@gmail.com
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box mb={8}>
          <Typography
            textAlign="center"
            component="h2"
            variant="h4"
            gutterBottom
            fontWeight={500}
          >
            About Us
          </Typography>

          <Typography
            textAlign="center"
            gutterBottom
            color="textSecondary"
            fontWeight={400}
          >
            Lorem ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the industry’s standard dummy..
          </Typography>
        </Box>

        <Grid container direction="row" spacing={2}>
          <Grid item xs={6} md={3}>
            <Box
              sx={(theme) => ({
                flex: 1,
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.grey[900]
                    : theme.palette.grey[200],
                height: 290,
              })}
            >
              <Stack
                sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
                direction="column"
                alignItems="space-between"
              >
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      flex: 1,
                      borderRadius: '50%',
                      borderWidth: 5,
                      borderColor: '#424242',
                      borderStyle: 'solid',
                      height: 40 + 20 + 4,
                      width: 40 + 20 + 4,
                      display: 'flex',
                      // backgroundColor: '#757575',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SubscriptionsIcon sx={{ height: 40, width: 40 }} />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={500} gutterBottom>
                    Startups
                  </Typography>
                  <Typography fontWeight={500} color="text.secondary">
                    Design and prototype faster, with an entire library of ready
                    components.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Box
              sx={(theme) => ({
                flex: 1,
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.grey[900]
                    : theme.palette.grey[200],
                height: 290,
              })}
            >
              <Stack
                sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
                direction="column"
                alignItems="space-between"
              >
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      flex: 1,
                      borderRadius: '50%',
                      borderWidth: 5,
                      borderColor: '#424242',
                      borderStyle: 'solid',
                      height: 40 + 20 + 4,
                      width: 40 + 20 + 4,
                      display: 'flex',
                      // backgroundColor: '#757575',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ReceiptIcon sx={{ height: 40, width: 40 }} />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={500} gutterBottom>
                    Design Teams
                  </Typography>
                  <Typography fontWeight={500} color="text.secondary">
                    Get everyone on the same page with a single library. Design
                    faster consistently.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Box
              sx={(theme) => ({
                flex: 1,
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.grey[900]
                    : theme.palette.grey[200],
                height: 290,
              })}
            >
              <Stack
                sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
                direction="column"
                alignItems="space-between"
              >
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      flex: 1,
                      borderRadius: '50%',
                      borderWidth: 5,
                      borderColor: '#424242',
                      borderStyle: 'solid',
                      height: 40 + 20 + 4,
                      width: 40 + 20 + 4,
                      display: 'flex',
                      // backgroundColor: '#757575',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BoltIcon sx={{ height: 40, width: 40 }} />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={500} gutterBottom>
                    Beginners & Students
                  </Typography>
                  <Typography fontWeight={500} color="text.secondary">
                    Learn how professional design systems are built and learn
                    Figma best practices.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Box
              sx={(theme) => ({
                flex: 1,
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.grey[900]
                    : theme.palette.grey[200],
                height: 290,
              })}
            >
              <Stack
                sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
                direction="column"
                alignItems="space-between"
              >
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      flex: 1,
                      borderRadius: '50%',
                      borderWidth: 5,
                      borderColor: '#424242',
                      borderStyle: 'solid',
                      height: 40 + 20 + 4,
                      width: 40 + 20 + 4,
                      display: 'flex',
                      // backgroundColor: '#757575',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EventIcon sx={{ height: 40, width: 40 }} />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={500} gutterBottom>
                    Freelance Designers
                  </Typography>
                  <Typography fontWeight={500} color="text.secondary">
                    Deliver high-quality projects faster, take on more clients,
                    and increase your income.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
