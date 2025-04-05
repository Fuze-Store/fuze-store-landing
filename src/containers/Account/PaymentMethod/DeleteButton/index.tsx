/**
 * @module AccountPaymentMethodAdyenSubmit
 * @category Containers
 *
 */

import { Button, ButtonProps } from '@mui/material';
import { memo } from 'react';

import useSetDefaultPaymentMethodSession from '../hooks/useSetDefaultPaymentMethodSession';

type Props = {
  ButtonProps?: Partial<ButtonProps>;
  paymentMethodId: string;
};

const SetDefaultButton = ({ ButtonProps, paymentMethodId }: Props) => {
  const { setDefaultPaymentMethod } = useSetDefaultPaymentMethodSession();

  return (
    <Button
      variant="contained"
      disableElevation
      {...ButtonProps}
      onClick={() => setDefaultPaymentMethod(paymentMethodId)}
    >
      Set As Default
    </Button>
  );
};

export default memo(SetDefaultButton);
