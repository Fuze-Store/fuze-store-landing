'use client';

import EventIcon from '@mui/icons-material/Event';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ScrollTop from '@/components/ScrollToTop';
import SideBar from '@/components/SideBar';

export default function HomePage({ ...props }) {
  return (
    <>
      <Box sx={{ minHeight: 2000 }}>
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
            <Container maxWidth="xl">
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
            bgcolor: theme.palette.grey[900],
            py: theme.spacing(12),
          })}
        >
          <Container maxWidth="xl">
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
          <Container maxWidth="xl">
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
            bgcolor: theme.palette.grey[900],
            py: theme.spacing(12),
          })}
        >
          <Container maxWidth="xl">
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
