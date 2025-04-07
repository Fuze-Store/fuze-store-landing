'use client';

import { Button, ButtonProps } from '@mui/material';
import { memo } from 'react';

import { SocialProvider } from '@/enums/socialProviders.enum';
import useUnlinkAccount from '../Provider/hooks/useUnlinkAccount';

type Props = {
  provider: SocialProvider;
  ButtonProps?: Partial<ButtonProps>;
};

const UnlinkProviderButton = ({ provider, ButtonProps }: Props) => {
  const { unlinkAccount } = useUnlinkAccount();

  const submit = () => unlinkAccount(provider);

  return (
    <Button color="error" {...ButtonProps} onClick={submit}>
      Unlink
    </Button>
  );
};

export default memo(UnlinkProviderButton);
