/**
 * @module ContactUsForm
 * @category Forms
 *
 */

import { Box, Stack, styled, TextField } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import Label from '@/components/Label';
import { FormInputs } from '@/containers/ContactUs/Form/Provider/types';

const SectionContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

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
        <Stack direction="row" spacing={1}>
          <Box sx={{ flex: 1 }}>
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
          </Box>
          <Box sx={{ flex: 1 }}>
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
          </Box>
        </Stack>
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
