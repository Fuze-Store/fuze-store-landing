/**
 * @module AccountEmailForm
 * @category Forms
 *
 */

import { TextField } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormInputs } from '@/containers/Account/Email/Form/Provider/types';

import FieldErrorMessage from '@/components/FieldErrorMessage';
import Label from '@/components/Label';
import SectionContainer from '@/components/SectionContainer';

type Props = {
  loading?: boolean;
};

/**
 * AccountEmail Form
 *
 * @category Forms
 *
 */
const AccountEmailForm = ({ loading = false }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <>
      <SectionContainer>
        <Label htmlFor="email" error={!!errors.email}>
          Email *
        </Label>
        <TextField
          type="email"
          id="email"
          required
          disabled={loading}
          fullWidth
          {...register('email')}
          error={!!errors.email}
        />
        <FieldErrorMessage name="email" errors={errors} />
      </SectionContainer>
    </>
  );
};

export default memo(AccountEmailForm);
