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

const GoogleLoginButton = ({ ButtonProps }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async () => {
    try {
      setLoading(true);
      const result = await signIn('google', {
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
      sx={{ backgroundColor: '#fff', color: '#000' }}
      disableElevation
      fullWidth
      loading={loading}
      {...ButtonProps}
      onClick={login}
    >
      Sign in with Google
    </Button>
  );
};

export default memo(GoogleLoginButton);
