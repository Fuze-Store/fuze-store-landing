/**
 * @module NewsletterForm
 * @category Forms
 *
 */

import { Box, Grid, TextField } from '@mui/material';
import i18next from 'i18next';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import type { FormInputs } from '@/containers/Newsletter/Form/Provider/types';

import FieldErrorMessage from '@/components/FieldErrorMessage';
import FormSubmit from '@/containers/Newsletter/Form/Submit';

type Props = {
  disabled?: boolean;
};

const NewsletterForm = ({ disabled = false }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12, sm: 'grow' }}>
        <TextField
          placeholder={i18next.t('Enter your email')}
          type="email"
          id="email"
          required
          fullWidth
          disabled={disabled}
          {...register('email')}
          error={!!errors.email}
        />
        <FieldErrorMessage name="email" errors={errors} />
      </Grid>
      <Grid size={{ xs: 12, sm: 'auto' }}>
        <Box mt={{ xs: 0, sm: 1 }}>
          <FormSubmit disabled={disabled} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(NewsletterForm);
