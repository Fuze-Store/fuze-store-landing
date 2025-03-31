/**
 * @module AddressFormSubmit
 * @category Containers
 *
 */

import { Button, ButtonProps } from '@mui/material';
import i18next from 'i18next';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import type { FormInputs } from '@/containers/Address/Form/Provider/types';

/**
 * Address Form Submit
 *
 * @category Forms
 *
 */
const AddressFormSubmit = ({
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
      {i18next.t('Submit')}
    </Button>
  );
};

export default memo(AddressFormSubmit);
