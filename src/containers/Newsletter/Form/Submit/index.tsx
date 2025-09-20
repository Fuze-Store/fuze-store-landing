/**
 * @module NewsletterFormSubmit
 * @category Containers
 *
 */

import { Button, ButtonProps } from '@mui/material';
import i18next from 'i18next';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import type { FormInputs } from '@/containers/Newsletter/Form/Provider/types';

/**
 * Newsletter Form Submit
 *
 * @category Forms
 *
 */
const NewsletterFormSubmit = ({
  loading = false,
  disabled = false,
  sx,
  ...rest
}: Partial<ButtonProps>) => {
  const {
    formState: { isValid, isSubmitted, isDirty },
  } = useFormContext<FormInputs>();

  return (
    <Button
      variant="contained"
      disableElevation
      size="large"
      type="submit"
      sx={{ minWidth: 160, ...sx }}
      disabled={!isDirty || (isSubmitted && !isValid) || loading || disabled}
      {...rest}
    >
      {i18next.t('Subscribe')}
    </Button>
  );
};

export default memo(NewsletterFormSubmit);
