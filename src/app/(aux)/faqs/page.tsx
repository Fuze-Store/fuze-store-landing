'use client';

import BoltIcon from '@mui/icons-material/Bolt';
import EventIcon from '@mui/icons-material/Event';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollToTop';

export default function FAQsPage() {
  return (
    <>
      <Box
        component="section"
        sx={(theme) => ({
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.grey[50],
          py: theme.spacing(12),
        })}
      >
        <Container maxWidth="md">
          <Box mb={8}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              FAQs
            </Typography>

            <Typography
              textAlign="center"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              Tired of wasting thousands of hours starting from scratch on every
              project and rebuilding the same components? Untitled UI comes with
              everything you need to design modern and beautiful UI and
              websites.
            </Typography>
          </Box>

          <Grid container direction="row" spacing={2}>
            <Grid size={{ xs: 6 }}>
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
                      Design and prototype faster, with an entire library of
                      ready components.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 6 }}>
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
                      Get everyone on the same page with a single library.
                      Design faster consistently.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 6 }}>
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

            <Grid size={{ xs: 6 }}>
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
                      Deliver high-quality projects faster, take on more
                      clients, and increase your income.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />

      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
