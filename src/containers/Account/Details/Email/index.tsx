'use client';

import { Button, Chip, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Activity, memo } from 'react';

import { paths } from '@/helpers/page.helper';

import AccountResendEmailButton from '@/containers/Account/Email/ResendButton';

type Props = {
  email?: string;
  isVerified?: boolean;
};

const AccountDetailsEmail = ({ email, isVerified = false }: Props) => {
  if (email) {
    return (
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, sm: 'grow' }}>
          <Stack direction="row" spacing={1}>
            <Typography>{email}</Typography>
            {!isVerified && (
              <Chip label="Not Verified" size="small" color="warning" />
            )}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 'auto' }}>
          <Stack direction="row" spacing={1}>
            <Button
              href={paths.accountChangeEmail}
              LinkComponent={Link}
              size="small"
            >
              Change Email
            </Button>
            <Activity mode={isVerified ? 'hidden' : 'visible'}>
              <AccountResendEmailButton isVerified={isVerified} />
            </Activity>
          </Stack>
        </Grid>
      </Grid>
    );
  }

  return null;
};

export default memo(AccountDetailsEmail);
