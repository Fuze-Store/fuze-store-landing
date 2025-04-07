/**
 * @module LoginFormSubmit
 * @category Containers
 *
 */

import { Button, ButtonProps } from '@mui/material';
import i18next from 'i18next';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import type { FormInputs } from '@/containers/Login/Form/Provider/types';

/**
 * Login Form Submit
 *
 * @category Forms
 *
 */
const LoginFormSubmit = ({
  loading = false,
  disabled = false,
  ...rest
}: Partial<ButtonProps>) => {
  const {
    formState: { isValid, isSubmitted, isDirty },
  } = useFormContext<FormInputs>();

  return (
    <Button
      variant="contained"
      disableElevation
      type="submit"
      disabled={!isDirty || (isSubmitted && !isValid) || disabled}
      loading={loading}
      {...rest}
    >
      {i18next.t('Login')}
    </Button>
  );
};

export default memo(LoginFormSubmit);
