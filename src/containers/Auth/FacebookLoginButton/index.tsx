'use client';

import { Button, ButtonProps } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { paths } from '@/enums/path.enum';

import { memo, useState } from 'react';
import { toast } from 'sonner';

type Props = {
  ButtonProps?: Partial<ButtonProps>;
};

const FacebookLoginButton = ({ ButtonProps }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async () => {
    try {
      setLoading(true);
      const result = await signIn('facebook', {
        redirect: false,
      });

      if (result?.ok) {
        router.push(paths.account);
        return;
      }

      if (result?.error) {
        toast.error(result?.error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="outlined"
      sx={{ backgroundColor: '#4267b2', color: '#fff' }}
      disableElevation
      fullWidth
      loading={loading}
      {...ButtonProps}
      onClick={login}
    >
      Login with Facebook
    </Button>
  );
};

export default memo(FacebookLoginButton);
