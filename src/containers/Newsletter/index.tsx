'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AxiosError } from 'axios';
import { memo } from 'react';
import { toast } from 'sonner';

import useSubscribe from '@/containers/Newsletter/hooks/useSubscribe';

import type { FormInputs } from '@/containers/Newsletter/Form/Provider/types';
import type { NewsletterErrorResponse } from '@/types/newsletter';

import NewsletterForm from '@/containers/Newsletter/Form';
import NewsletterFormProvider from '@/containers/Newsletter/Form/Provider';

const Newsletter = () => {
  const { subscribe, error: err, isPending } = useSubscribe();
  const error = err as AxiosError<NewsletterErrorResponse> | null;

  const onSubmit = async (payload: FormInputs) => {
    try {
      const response = await subscribe(payload);
      toast.success(response.message);
    } catch (err) {
      const error = err as AxiosError<NewsletterErrorResponse>;
      toast.error(error.response?.data.message);
    }
  };

  return (
    <Container maxWidth="md">
      <Box mb={8}>
        <Typography
          textAlign="center"
          component="h2"
          variant="h4"
          gutterBottom
          fontWeight={500}
        >
          Newsletter
        </Typography>

        <Typography
          textAlign="center"
          variant="h6"
          gutterBottom
          color="textSecondary"
          fontWeight={400}
        >
          Stay updated with the latest news and exclusive offers.
        </Typography>
      </Box>

      <NewsletterFormProvider
        errors={error?.response?.data.errors}
        onSubmit={onSubmit}
      >
        <NewsletterForm disabled={isPending} />
      </NewsletterFormProvider>
    </Container>
  );
};

export default memo(Newsletter);
