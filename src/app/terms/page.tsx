'use client';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';

import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions Page',
};

export default function TermsPage() {
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
          <Box mb={15}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Terms and Conditions
            </Typography>

            <Typography
              textAlign="center"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor orci quis lacus viverra pulvinar. Suspendisse quis
              pulvinar ex, molestie viverra libero. Vestibulum blandit diam a
              scelerisque lacinia. Pellentesque lobortis commodo nulla at
              tempor. In pellentesque volutpat sapien, vel venenatis magna
              fringilla non. Donec dignissim tincidunt cursus. Integer est eros,
              blandit a finibus quis, bibendum et sapien. Nam eleifend nibh mi,
              nec pharetra massa rutrum vitae. Curabitur scelerisque erat magna,
              egestas malesuada lacus vehicula eget. Donec leo nulla,
              scelerisque ut laoreet eget, faucibus eu augue. Duis ultrices elit
              eu odio varius, eu tristique justo imperdiet. Mauris rhoncus quis
              risus in venenatis. Suspendisse vulputate feugiat odio hendrerit
              ullamcorper.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography mb={2} variant="h5" fontWeight={500}>
              1. Information we collect
            </Typography>

            <Typography mb={2}>
              Nam condimentum pellentesque enim quis commodo. Maecenas nec ipsum
              nec mi sagittis sollicitudin. Maecenas vehicula, ipsum congue
              sagittis consectetur, ipsum nulla elementum dui, quis elementum mi
              sem quis orci. Pellentesque euismod, mauris nec lobortis
              elementum, dolor lectus fringilla ante, sit amet blandit sapien
              libero nec est. Maecenas sodales neque sed augue viverra interdum
              tincidunt malesuada purus. Phasellus lectus justo, congue vel
              vulputate quis, mattis nec tellus. Fusce a ultricies dolor.
            </Typography>

            <Typography mb={2}>
              Nam condimentum pellentesque enim quis commodo. Maecenas nec ipsum
              nec mi sagittis sollicitudin. Maecenas vehicula, ipsum congue
              sagittis consectetur, ipsum nulla elementum dui, quis elementum mi
              sem quis orci.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography mb={2} variant="h5" fontWeight={500}>
              2. How we use your information
            </Typography>

            <Typography mb={2}>
              Nam condimentum pellentesque enim quis commodo. Maecenas nec ipsum
              nec mi sagittis sollicitudin. Maecenas vehicula, ipsum congue
              sagittis consectetur, ipsum nulla elementum dui, quis elementum mi
              sem quis orci. Pellentesque euismod, mauris nec lobortis
              elementum, dolor lectus fringilla ante, sit amet blandit sapien
              libero nec est. Maecenas sodales neque sed augue viverra interdum
              tincidunt malesuada purus. Phasellus lectus justo, congue vel
              vulputate quis, mattis nec tellus. Fusce a ultricies dolor.
            </Typography>

            <Typography mb={2}>
              Nam condimentum pellentesque enim quis commodo. Maecenas nec ipsum
              nec mi sagittis sollicitudin. Maecenas vehicula, ipsum congue
              sagittis consectetur, ipsum nulla elementum dui, quis elementum mi
              sem quis orci.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography mb={2} variant="h5" fontWeight={500}>
              3. Data Security
            </Typography>

            <Typography mb={2}>
              Nam condimentum pellentesque enim quis commodo. Maecenas nec ipsum
              nec mi sagittis sollicitudin. Maecenas vehicula, ipsum congue
              sagittis consectetur, ipsum nulla elementum dui, quis elementum mi
              sem quis orci. Pellentesque euismod, mauris nec lobortis
              elementum, dolor lectus fringilla ante, sit amet blandit sapien
              libero nec est. Maecenas sodales neque sed augue viverra interdum
              tincidunt malesuada purus. Phasellus lectus justo, congue vel
              vulputate quis, mattis nec tellus. Fusce a ultricies dolor.
            </Typography>

            <Typography mb={2}>
              Nam condimentum pellentesque enim quis commodo. Maecenas nec ipsum
              nec mi sagittis sollicitudin. Maecenas vehicula, ipsum congue
              sagittis consectetur, ipsum nulla elementum dui, quis elementum mi
              sem quis orci.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography mb={2} variant="h5" fontWeight={500}>
              4. Changes to our privacy policy
            </Typography>

            <Typography mb={2}>
              Nam condimentum pellentesque enim quis commodo. Maecenas nec ipsum
              nec mi sagittis sollicitudin. Maecenas vehicula, ipsum congue
              sagittis consectetur, ipsum nulla elementum dui, quis elementum mi
              sem quis orci. Pellentesque euismod, mauris nec lobortis
              elementum, dolor lectus fringilla ante, sit amet blandit sapien
              libero nec est. Maecenas sodales neque sed augue viverra interdum
              tincidunt malesuada purus. Phasellus lectus justo, congue vel
              vulputate quis, mattis nec tellus. Fusce a ultricies dolor.
            </Typography>

            <Typography mb={2}>
              Nam condimentum pellentesque enim quis commodo. Maecenas nec ipsum
              nec mi sagittis sollicitudin. Maecenas vehicula, ipsum congue
              sagittis consectetur, ipsum nulla elementum dui, quis elementum mi
              sem quis orci.
            </Typography>
          </Box>
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
