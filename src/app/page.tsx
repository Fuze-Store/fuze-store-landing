'use client';

import BoltIcon from '@mui/icons-material/Bolt';
import EventIcon from '@mui/icons-material/Event';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollToTop';
import SideBar from '@/components/SideBar';
import { Divider, Stack } from '@mui/material';

export default function HomePage({ ...props }) {
  return (
    <>
      <Box>
        <section style={{ overflow: 'hidden', position: 'relative' }}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              position: 'relative',
              // backgroundImage: `url(${banner.src})`,
              height: '100vh',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Container maxWidth="lg">
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ mb: 2 }} fontWeight="bold" variant="h2">
                    Premium
                    <Box
                      component="span"
                      sx={{ color: 'primary.main' }}
                      className="block"
                    >
                      Auto Accessories
                    </Box>
                  </Typography>

                  <Typography
                    sx={{ mb: 2 }}
                    component="p"
                    variant="h6"
                    fontWeight="400"
                  >
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry’s standard
                    dummy.
                  </Typography>

                  <Button
                    size="extra-large"
                    variant="contained"
                    color="primary"
                  >
                    Learn More
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}></Grid>
              </Grid>
            </Container>
          </Box>
        </section>

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
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    component="h3"
                    color="primary.light"
                    fontWeight={500}
                    gutterBottom
                  >
                    The ultimate UI kit
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h4"
                    gutterBottom
                    fontWeight={500}
                  >
                    Design fast. Design consistently.
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="textSecondary"
                    fontWeight={400}
                  >
                    Tired of wasting thousands of hours starting from scratch on
                    every project and rebuilding the same components? Untitled
                    UI comes with everything you need to design modern and
                    beautiful UI and websites.
                  </Typography>
                </Box>

                <Box sx={{ py: 5 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Box sx={{ mr: 1 }}>
                          <EventIcon color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                          <Typography color="primary" fontWeight={500}>
                            Figma`s powerful new Config 2023 features
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Box sx={{ mr: 1 }}>
                          <EventIcon color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                          <Typography color="primary" fontWeight={500}>
                            Figma`s powerful new Config 2023 features
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Box sx={{ mr: 1 }}>
                          <EventIcon color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                          <Typography color="primary" fontWeight={500}>
                            Figma`s powerful new Config 2023 features
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Box sx={{ mr: 1 }}>
                          <EventIcon color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                          <Typography color="primary" fontWeight={500}>
                            Figma`s powerful new Config 2023 features
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    minHeight: 440,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#ccc',
                    borderRadius: 8,
                    height: '100%',
                    width: '100%',
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={(theme) => ({ py: theme.spacing(12) })}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    minHeight: 440,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#ccc',
                    borderRadius: 8,
                    height: '100%',
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    component="h3"
                    color="primary.light"
                    fontWeight={500}
                    gutterBottom
                  >
                    The ultimate UI kit
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h4"
                    gutterBottom
                    fontWeight={500}
                  >
                    Design fast. Design consistently.
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="textSecondary"
                    fontWeight={400}
                  >
                    Tired of wasting thousands of hours starting from scratch on
                    every project and rebuilding the same components? Untitled
                    UI comes with everything you need to design modern and
                    beautiful UI and websites.
                  </Typography>
                </Box>

                <Box sx={{ py: 5 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Box sx={{ mr: 1 }}>
                          <EventIcon color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                          <Typography color="primary" fontWeight={500}>
                            Figma`s powerful new Config 2023 features
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Box sx={{ mr: 1 }}>
                          <EventIcon color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                          <Typography color="primary" fontWeight={500}>
                            Figma`s powerful new Config 2023 features
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Box sx={{ mr: 1 }}>
                          <EventIcon color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                          <Typography color="primary" fontWeight={500}>
                            Figma`s powerful new Config 2023 features
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Box sx={{ mr: 1 }}>
                          <EventIcon color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                          <Typography color="primary" fontWeight={500}>
                            Figma`s powerful new Config 2023 features
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

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
          <Container maxWidth="lg">
            <Box mb={8}>
              <Typography
                textAlign="center"
                component="h3"
                color="primary.light"
                fontWeight={500}
                gutterBottom
              >
                The ultimate UI kit
              </Typography>

              <Typography
                textAlign="center"
                component="h2"
                variant="h4"
                gutterBottom
                fontWeight={500}
              >
                Design fast. Design consistently.
              </Typography>

              <Typography
                textAlign="center"
                variant="h6"
                gutterBottom
                color="textSecondary"
                fontWeight={400}
              >
                Tired of wasting thousands of hours starting from scratch on
                every project and rebuilding the same components? Untitled UI
                comes with everything you need to design modern and beautiful UI
                and websites.
              </Typography>
            </Box>

            <Box
              sx={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ccc',
                borderRadius: 8,
                height: 440,
                width: '100%',
              }}
            />
          </Container>
        </Box>

        <Box
          component="section"
          sx={(theme) => ({
            py: theme.spacing(12),
          })}
        >
          <Container maxWidth="lg">
            <Box mb={8}>
              <Typography
                component="h3"
                color="primary.light"
                fontWeight={500}
                gutterBottom
              >
                The ultimate UI kit
              </Typography>

              <Typography
                component="h2"
                variant="h4"
                gutterBottom
                fontWeight={500}
              >
                Design fast. Design consistently.
              </Typography>

              <Typography
                variant="h6"
                gutterBottom
                color="textSecondary"
                fontWeight={400}
              >
                Tired of wasting thousands of hours starting from scratch on
                every project and rebuilding the same components? Untitled UI
                comes with everything you need to design modern and beautiful UI
                and websites.
              </Typography>
            </Box>

            <Box
              sx={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ccc',
                borderRadius: 8,
                height: 440,
                width: '100%',
              }}
            />
          </Container>
        </Box>

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
          <Container maxWidth="lg">
            <Box mb={8}>
              <Typography
                textAlign="center"
                component="h3"
                color="primary.light"
                fontWeight={500}
                gutterBottom
              >
                The ultimate UI kit
              </Typography>

              <Typography
                textAlign="center"
                component="h2"
                variant="h4"
                gutterBottom
                fontWeight={500}
              >
                Design fast. Design consistently.
              </Typography>

              <Typography
                textAlign="center"
                variant="h6"
                gutterBottom
                color="textSecondary"
                fontWeight={400}
              >
                Tired of wasting thousands of hours starting from scratch on
                every project and rebuilding the same components? Untitled UI
                comes with everything you need to design modern and beautiful UI
                and websites.
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
                        Design and prototype faster, with an entire library of
                        ready components.
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
                        Get everyone on the same page with a single library.
                        Design faster consistently.
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
                        Learn how professional design systems are built and
                        learn Figma best practices.
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

        <Container maxWidth="lg">
          <Divider />
        </Container>

        <Footer />
      </Box>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <SideBar />
    </>
  );
}
