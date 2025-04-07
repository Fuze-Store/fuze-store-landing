'use client';

import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useEmblaCarousel from 'embla-carousel-react';
import { memo } from 'react';
import './style.css';

const TestimonialFront = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <Typography
        textAlign="center"
        component="h2"
        variant="h4"
        gutterBottom
        fontWeight={500}
      >
        Testimonial
      </Typography>
      <Typography
        textAlign="center"
        variant="h6"
        gutterBottom
        color="textSecondary"
        fontWeight={400}
      >
        Tired of wasting thousands of hours starting from scratch on every
        project and rebuilding the same components? Untitled UI comes with
        everything you need to design modern and beautiful UI and websites.
      </Typography>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <Box sx={{ p: 1 }} className="embla__slide">
            <Grid container spacing={1}>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card>
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: 'text.secondary', fontSize: 14 }}
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      benevolent
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card>
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: 'text.secondary', fontSize: 14 }}
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      benevolent
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card>
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: 'text.secondary', fontSize: 14 }}
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      benevolent
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default memo(TestimonialFront);
