/**
 * @module AccountDetailsFormSubmit
 * @category Containers
 *
 */

import { Button, ButtonProps } from '@mui/material';
import i18next from 'i18next';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import type { FormInputs } from '@/containers/Account/Details/Form/Provider/types';

/**
 * AccountDetails Form Submit
 *
 * @category Forms
 *
 */
const AccountDetailsFormSubmit = ({
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
      {i18next.t('Update')}
    </Button>
  );
};

export default memo(AccountDetailsFormSubmit);
