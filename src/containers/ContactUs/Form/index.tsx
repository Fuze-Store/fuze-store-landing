/**
 * @module ContactUsForm
 * @category Forms
 *
 */

import { Grid, TextField } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormInputs } from '@/containers/ContactUs/Form/Provider/types';

import Label from '@/components/Label';
import SectionContainer from '@/components/SectionContainer';

/**
 * ContactUs Form
 *
 * @category Forms
 *
 */
const ContactUsForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <>
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
              helperText={errors.firstName?.message}
            />
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
              helperText={errors.lastName?.message}
            />
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
          helperText={errors.email?.message}
        />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="username" error={!!errors.phoneNumber}>
          Phone Number
        </Label>
        <TextField
          type="text"
          id="username"
          required
          fullWidth
          {...register('phoneNumber')}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="message" error={!!errors.message}>
          Message *
        </Label>
        <TextField
          type="text"
          multiline
          rows={4}
          id="message"
          required
          fullWidth
          {...register('message')}
          error={!!errors.message}
          helperText={errors.message?.message}
        />
      </SectionContainer>
    </>
  );
};

export default memo(ContactUsForm);
