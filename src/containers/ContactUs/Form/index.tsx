/**
 * @module ContactUsForm
 * @category Forms
 *
 */

import { TextField } from '@mui/material';
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
        <Label htmlFor="name" error={!!errors.name}>
          Name *
        </Label>
        <TextField
          type="text"
          id="name"
          required
          fullWidth
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
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
