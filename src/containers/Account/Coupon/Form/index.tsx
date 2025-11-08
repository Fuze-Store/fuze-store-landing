/**
 * @module AccountCouponForm
 * @category Forms
 *
 */

import { TextField } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormInputs } from '@/containers/Account/Coupon/Form/Provider/types';

import FieldErrorMessage from '@/components/FieldErrorMessage';
import Label from '@/components/Label';
import SectionContainer from '@/components/SectionContainer';

type Props = {
  loading?: boolean;
};

const AccountCouponForm = ({ loading = false }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <>
      <SectionContainer>
        <Label htmlFor="code" error={!!errors.couponCode}>
          Code *
        </Label>
        <TextField
          type="text"
          id="couponCode"
          required
          disabled={loading}
          fullWidth
          {...register('couponCode')}
          error={!!errors.couponCode}
        />
        <FieldErrorMessage name="couponCode" errors={errors} />
      </SectionContainer>
    </>
  );
};

export default memo(AccountCouponForm);
