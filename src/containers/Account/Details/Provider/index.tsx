'use client';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { Card, CardContent, Chip, Grid2, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { memo, useCallback } from 'react';

import { SocialProvider } from '@/enums/socialProviders.enum';
import { SOCIAL_LINKS } from '@/utils/constants';

import type { AccountProvider } from '@/types/account';

import LinkProviderButton from '@/containers/Account/LinkProviderButton';

type Props = {
  providers?: AccountProvider[];
};

const AccountDetailsProvider = ({ providers }: Props) => {
  const isLinked = useCallback(
    (provider: SocialProvider) =>
      providers?.findIndex((item) => item.provider === provider) !== -1,
    [providers],
  );

  const getProviderIcon = (provider: SocialProvider) => {
    if (provider === SocialProvider.FACEBOOK) {
      return <FacebookRoundedIcon />;
    }
    if (provider === SocialProvider.GOOGLE) {
      return <GoogleIcon />;
    }

    return null;
  };

  const getProviderLabel = (provider: SocialProvider) => {
    if (provider === SocialProvider.FACEBOOK) return 'Facebook';
    if (provider === SocialProvider.GOOGLE) return 'Google';

    return '';
  };

  return (
    <Card elevation={0} variant="outlined">
      <CardContent>
        <Typography variant="body2">Social</Typography>
      </CardContent>
      <CardContent>
        <Stack spacing={1}>
          {SOCIAL_LINKS.map((linkProvider) => {
            const linked = isLinked(linkProvider);
            return (
              <Grid2 key={linkProvider} container spacing={1}>
                <Grid2 size={{ xs: 12, sm: 'grow' }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {getProviderIcon(linkProvider)}
                    <Typography>{getProviderLabel(linkProvider)}</Typography>
                    {linked && <Chip label="Linked" color="success" />}
                  </Stack>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 'auto' }}>
                  <LinkProviderButton isLinked={linked} />
                </Grid2>
              </Grid2>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default memo(AccountDetailsProvider);
