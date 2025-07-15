/**
 * @module AccountPaymentMethodAdyenSubmit
 * @category Containers
 *
 */

import AddIcon from '@mui/icons-material/Add';
import { Button, ButtonProps } from '@mui/material';
import { memo, useCallback } from 'react';

import useCreatePaymentMethodSession from '@/containers/Account/PaymentMethod/hooks/useCreatePaymentMethodSession';
import { paths } from '@/helpers/page.helper';
import useAppDispatch from '@/hooks/useAppDispatch';

import { resetGlobalFields, updateGlobalFields } from '@/rtk/global/slice';

/**
 * AccountPaymentMethodAdyenSubmit
 *
 * @category Containers
 *
 */
const AddPaymentMethodButton = (props: Partial<ButtonProps>) => {
  const dispatch = useAppDispatch();
  const { createPaymentMethodSession } = useCreatePaymentMethodSession();

  const subscribe = useCallback(async () => {
    try {
      dispatch(
        updateGlobalFields({
          key: 'loading',
          value: { show: true, message: 'Creating Session' },
        }),
      );

      const returnUrl = `${window.location.origin}${paths.accountSubscription}`;
      const response = await createPaymentMethodSession(returnUrl);

      if (response) {
        dispatch(
          updateGlobalFields({
            key: 'loading',
            value: { show: true, message: 'Redirecting' },
          }),
        );

        window.open(response.data.url);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => dispatch(resetGlobalFields(['loading'])), 3000);
    }
  }, [dispatch, createPaymentMethodSession]);

  return (
    <Button startIcon={<AddIcon />} {...props} onClick={subscribe}>
      Add Payment Method
    </Button>
  );
};

export default memo(AddPaymentMethodButton);
