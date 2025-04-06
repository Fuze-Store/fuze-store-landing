/**
 * @module AccountPasswordFormSubmit
 * @category Containers
 *
 */

import { Button, ButtonProps } from '@mui/material';
import i18next from 'i18next';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import type { FormInputs } from '@/containers/Account/Security/Password/Form/Provider/types';

/**
 * AccountPassword Form Submit
 *
 * @category Forms
 *
 */
const AccountPasswordFormSubmit = ({
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
      disabled={!isDirty || (isSubmitted && !isValid) || disabled}
      loading={loading}
      {...rest}
    >
      {i18next.t('Change Password')}
    </Button>
  );
};

export default memo(AccountPasswordFormSubmit);
