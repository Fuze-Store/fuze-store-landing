/**
 * @module LoginForm
 * @category Forms
 *
 */

import { TextField } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormInputs } from '@/containers/Login/Form/Provider/types';

import FieldErrorMessage from '@/components/FieldErrorMessage';
import Label from '@/components/Label';
import SectionContainer from '@/components/SectionContainer';

type Props = {
  loading?: boolean;
};

/**
 * Login Form
 *
 * @category Forms
 *
 */
const LoginForm = ({ loading = false }: Props) => {
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
          fullWidth
          disabled={loading}
          {...register('email')}
          error={!!errors.email}
        />
        <FieldErrorMessage name="email" errors={errors} />
      </SectionContainer>

      <SectionContainer>
        <Label htmlFor="email" error={!!errors.password}>
          Password *
        </Label>
        <TextField
          type="password"
          required
          fullWidth
          disabled={loading}
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <FieldErrorMessage name="password" errors={errors} />
      </SectionContainer>
    </>
  );
};

export default memo(LoginForm);
