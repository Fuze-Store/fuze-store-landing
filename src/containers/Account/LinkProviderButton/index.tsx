'use client';

import { Button, ButtonProps } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import { memo } from 'react';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
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

  const responseFacebook = async (userInfo: ReactFacebookLoginInfo) => {
    if (userInfo?.accessToken) {
      await linkAccount({ accessToken: userInfo.accessToken, provider });
    }
  };

  if (provider === SocialProvider.FACEBOOK) {
    return (
      <FacebookLogin
        appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string}
        fields="name,email,picture"
        callback={responseFacebook}
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
