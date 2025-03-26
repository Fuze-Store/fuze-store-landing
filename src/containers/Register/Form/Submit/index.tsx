/**
 * @module RegisterFormSubmit
 * @category Containers
 *
 */

import { Button, ButtonProps } from '@mui/material';
import i18next from 'i18next';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import type { FormInputs } from '@/containers/Register/Form/Provider/types';

/**
 * Register Form Submit
 *
 * @category Forms
 *
 */
const RegisterFormSubmit = ({
  loading = false,
  disabled = false,
  ...rest
}: Partial<ButtonProps>) => {
  const {
    formState: { isValid, isSubmitted, isDirty },
  } = useFormContext<FormInputs>();

  return (
    <Button
      type="submit"
      disabled={!isDirty || (isSubmitted && !isValid) || loading || disabled}
      {...rest}
    >
      {i18next.t('Create Account')}
    </Button>
  );
};

export default memo(RegisterFormSubmit);
