'use client';

import { ButtonProps } from '@mui/material';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { memo } from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import { toast } from 'sonner';

import useLinkAccount from '@/containers/Account/Provider/hooks/useLinkAccount';
import { SocialProvider } from '@/enums/socialProviders.enum';

type Props = {
  provider: SocialProvider;
  ButtonProps?: Partial<ButtonProps>;
};

const LinkProviderButton = ({ provider }: Props) => {
  const { linkAccount } = useLinkAccount();

  const responseFacebook = async (userInfo: ReactFacebookLoginInfo) => {
    console.log(userInfo);
    if (userInfo?.accessToken) {
      await linkAccount({ accessToken: userInfo.accessToken, provider });
    }
  };

  const responseGoogle = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse?.credential) {
      await linkAccount({
        accessToken: credentialResponse.credential,
        provider,
      });
    }
  };

  const onErrorGoogle = () => {
    toast.error('Unable to connect');
  };

  if (provider === SocialProvider.FACEBOOK) {
    return (
      <FacebookLogin
        appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string}
        fields="name,email,picture"
        callback={responseFacebook}
        buttonStyle={{
          height: 40,
          padding: 0,
          fontSize: 14,
          paddingLeft: 8,
          paddingRight: 8,
          textTransform: 'initial',
          minWidth: 176,
        }}
      />
    );
  }

  if (provider === SocialProvider.GOOGLE) {
    return (
      <GoogleLogin
        onSuccess={responseGoogle}
        onError={onErrorGoogle}
        useOneTap={false}
      />
    );
  }

  return null;
};

export default memo(LinkProviderButton);
