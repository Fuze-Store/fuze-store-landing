/**
 * @module RegisterForm
 * @category Forms
 *
 */

import { Box, Grid, TextField, Typography } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import type { FormInputs } from '@/containers/Register/Form/Provider/types';

import FieldErrorMessage from '@/components/FieldErrorMessage';
import Label from '@/components/Label';
import SectionContainer from '@/components/SectionContainer';
import CouponField from '@/containers/Coupon/ValidateField';

/**
 * Register Form
 *
 * @category Forms
 *
 */
const RegisterForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <>
      <SectionContainer>
        <Label htmlFor="username" error={!!errors.username}>
          Username *
        </Label>
        <TextField
          type="text"
          id="username"
          required
          fullWidth
          {...register('username')}
          error={!!errors.username}
        />
        <FieldErrorMessage name="username" errors={errors} />

        <Box mt={2}>
          <Typography component="p" variant="caption" color="textSecondary">
            * Username must be at least 6 characters.
          </Typography>
          <Typography component="p" variant="caption" color="textSecondary">
            * Username must be a lowercase.
          </Typography>
          <Typography component="p" variant="caption" color="textSecondary">
            * Username must be alphanumeric, dot, underscore only.
          </Typography>
        </Box>
      </SectionContainer>

      <SectionContainer>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Label htmlFor="first-name" error={!!errors.firstName}>
              First Name *
            </Label>
            <TextField
              type="text"
              id="first-name"
              required
              fullWidth
              {...register('firstName')}
              error={!!errors.firstName}
            />
            <FieldErrorMessage name="firstName" errors={errors} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Label htmlFor="last-name" error={!!errors.lastName}>
              Last Name *
            </Label>
            <TextField
              type="text"
              id="last-name"
              required
              fullWidth
              {...register('lastName')}
              error={!!errors.lastName}
            />
            <FieldErrorMessage name="lastName" errors={errors} />
          </Grid>
        </Grid>
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="email" error={!!errors.email}>
          Email *
        </Label>
        <TextField
          type="email"
          id="email"
          required
          fullWidth
          {...register('email')}
          error={!!errors.email}
        />
        <FieldErrorMessage name="email" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="password" error={!!errors.password}>
          Password *
        </Label>
        <TextField
          type="password"
          id="password"
          required
          fullWidth
          {...register('password')}
          error={!!errors.password}
        />
        <FieldErrorMessage name="password" errors={errors} />

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
          fullWidth
          {...register('confirmPassword')}
          error={!!errors.confirmPassword}
        />
        <FieldErrorMessage name="confirmPassword" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <CouponField name="couponCode" label="Voucher Code" required={false} />
      </SectionContainer>
    </>
  );
};

export default memo(RegisterForm);
