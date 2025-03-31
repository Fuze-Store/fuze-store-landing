'use client';

import { Button, ButtonProps } from '@mui/material';
import { memo } from 'react';

import useDeleteAccount from '@/containers/Account/hooks/useDeleteAccount';

const AccountDeleteButton = (props: ButtonProps) => {
  const { deleteAccount } = useDeleteAccount();

  return (
    <Button
      fullWidth
      color="error"
      size="large"
      onClick={deleteAccount}
      {...props}
    >
      Delete Account
    </Button>
  );
};

export default memo(AccountDeleteButton);
