'use client';

import { Button, ButtonProps } from '@mui/material';
import { signIn } from 'next-auth/react';
import { memo } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import useLinkAccount from '@/containers/Account/Provider/hooks/useLinkAccount';
import { SocialProvider } from '@/enums/socialProviders.enum';
import {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from 'react-facebook-login';
import { toast } from 'sonner';

type Props = {
  provider: SocialProvider;
  isLinked: boolean;
  ButtonProps?: Partial<ButtonProps>;
};

const LinkProviderButton = ({ provider, isLinked, ButtonProps }: Props) => {
  const { linkAccount } = useLinkAccount();

  const submit = async () => {
    if (provider === SocialProvider.FACEBOOK) {
    }

    const response = await signIn('facebook');
    console.log(response);
    return;
    if (isLinked) return await linkAccount();
    return await linkAccount();
  };

  const responseFacebook = async (
    userInfo: ReactFacebookLoginInfo | ReactFacebookFailureResponse,
  ) => {
    console.log(userInfo);
    if (userInfo?.error) {
      toast.error(userInfo.error.message);
      return;
    }

    await linkAccount({ accessToken: userInfo.accessToken, provider });
  };

  if (provider === SocialProvider.FACEBOOK) {
    return (
      <FacebookLogin
        appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string}
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <Button
            color={isLinked ? 'error' : 'primary'}
            onClick={renderProps.onClick}
            {...ButtonProps}
          >
            {isLinked ? 'Unlink' : 'Link'}
          </Button>
        )}
      />
    );
  }

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
