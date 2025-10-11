'use client';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { Chip, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { memo, useCallback } from 'react';

import { SocialProvider } from '@/enums/socialProviders.enum';
import { SOCIAL_LINKS } from '@/utils/constants';

import type { AccountProvider } from '@/types/account';

import LinkProviderButton from '@/containers/Account/LinkProviderButton';
import UnlinkProviderButton from '@/containers/Account/UnLinkProviderButton';

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
    <Stack spacing={1}>
      {SOCIAL_LINKS.map((linkProvider) => {
        const linked = isLinked(linkProvider);
        return (
          <Grid key={linkProvider} alignItems="center" container spacing={1}>
            <Grid size={{ xs: 12, sm: 'grow' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                {getProviderIcon(linkProvider)}
                <Typography>{getProviderLabel(linkProvider)}</Typography>
                {linked && <Chip label="Linked" size="small" color="success" />}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 'auto' }}>
              {linked ? (
                <UnlinkProviderButton provider={linkProvider} />
              ) : (
                <LinkProviderButton provider={linkProvider} />
              )}
            </Grid>
          </Grid>
        );
      })}
    </Stack>
  );
};

export default memo(AccountDetailsProvider);
