import banner from '@/images/banner.jpg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <Box sx={{ minHeight: 2000 }}>
      <section style={{ overflow: 'hidden', position: 'relative' }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            position: 'relative',
            backgroundImage: `url(${banner.src})`,
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Container maxWidth="lg">
            <Grid container>
              <Grid xs={12} md={6}>
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

                <Button size="extra-large" variant="contained" color="primary">
                  Learn More
                </Button>
              </Grid>
              <Grid xs={12} md={6}></Grid>
            </Grid>
          </Container>
        </Box>
      </section>
    </Box>
  );
}
