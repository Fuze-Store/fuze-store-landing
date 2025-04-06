/**
 * @module AccountPasswordForm
 * @category Forms
 *
 */

import { Box, TextField, Typography } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormInputs } from '@/containers/Account/Security/Password/Form/Provider/types';

import FieldErrorMessage from '@/components/FieldErrorMessage';
import Label from '@/components/Label';
import SectionContainer from '@/components/SectionContainer';

type Props = {
  loading?: boolean;
};

/**
 * AccountPassword Form
 *
 * @category Forms
 *
 */
const AccountPasswordForm = ({ loading = false }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <>
      <SectionContainer>
        <Label htmlFor="new-password" error={!!errors.newPassword}>
          New Password *
        </Label>
        <TextField
          type="password"
          id="new-password"
          required
          disabled={loading}
          fullWidth
          {...register('newPassword')}
          error={!!errors.newPassword}
        />
        <FieldErrorMessage name="email" errors={errors} />

        <Box mt={2}>
          <Typography component="p" variant="caption" color="textSecondary">
            * New Password must be at least 8 characters.
          </Typography>
          <Typography component="p" variant="caption" color="textSecondary">
            * New Password must contain at least 1 lowercase.
          </Typography>
          <Typography component="p" variant="caption" color="textSecondary">
            * New Password must contain at least 1 uppercase.
          </Typography>
          <Typography component="p" variant="caption" color="textSecondary">
            * New Password must contain at least 8 numbers.
          </Typography>
        </Box>
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="confirm-password" error={!!errors.confirmPassword}>
          Confirm Password *
        </Label>
        <TextField
          type="password"
          id="confirm-password"
          required
          disabled={loading}
          fullWidth
          {...register('confirmPassword')}
          error={!!errors.confirmPassword}
        />
        <FieldErrorMessage name="email" errors={errors} />
      </SectionContainer>
    </>
  );
};

export default memo(AccountPasswordForm);
