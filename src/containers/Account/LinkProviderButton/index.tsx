'use client';

import { Button, ButtonProps } from '@mui/material';
import { memo } from 'react';

import useLinkAccount from '@/containers/Account/Provider/hooks/useLinkAccount';

type Props = {
  isLinked: boolean;
  ButtonProps?: Partial<ButtonProps>;
};

const LinkProviderButton = ({ isLinked, ButtonProps }: Props) => {
  const { linkAccount } = useLinkAccount();

  const submit = async () => {
    if (isLinked) return await linkAccount();
    return await linkAccount();
  };

  return (
    <Button
      color={isLinked ? 'error' : 'primary'}
      onClick={submit}
      {...ButtonProps}
    >
      {isLinked ? 'Unlink' : 'Link'}
    </Button>
  );
};

export default memo(LinkProviderButton);
