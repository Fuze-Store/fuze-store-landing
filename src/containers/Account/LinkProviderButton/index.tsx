'use client';

import FacebookLogin, {
  SuccessResponse,
} from '@greatsumini/react-facebook-login';
import { Button, ButtonProps } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import { memo } from 'react';
import { toast } from 'sonner';

import useLinkAccount from '@/containers/Account/Provider/hooks/useLinkAccount';
import { SocialProvider } from '@/enums/socialProviders.enum';

type Props = {
  provider: SocialProvider;
  ButtonProps?: Partial<ButtonProps>;
};

const LinkProviderButton = ({ provider }: Props) => {
  const { linkAccount } = useLinkAccount();
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      await linkAccount({
        accessToken: tokenResponse.access_token,
        provider,
      });
    },
    onError: (errorResponse) => {
      toast.error(errorResponse.error, {
        description: errorResponse.error_description,
      });
    },
  });

  const responseFacebook = async (res: SuccessResponse) => {
    if (res?.accessToken) {
      await linkAccount({ accessToken: res.accessToken, provider });
    }
  };

  if (provider === SocialProvider.FACEBOOK) {
    return (
      <FacebookLogin
        appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string}
        fields="name,email,picture"
        onSuccess={responseFacebook}
        render={(renderProps) => (
          <Button onClick={renderProps.onClick}>Link</Button>
        )}
      />
    );
  }

  if (provider === SocialProvider.GOOGLE) {
    return <Button onClick={() => googleLogin()}>Link</Button>;
  }

  return null;
};

export default memo(LinkProviderButton);
