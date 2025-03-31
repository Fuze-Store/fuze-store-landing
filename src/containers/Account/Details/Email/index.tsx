'use client';

import { Button, Card, CardContent, Chip, Grid2, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

import AccountResendEmailButton from '@/containers/Account/Email/ResendButton';

type Props = {
  email?: string;
  isVerified?: boolean;
};

const AccountDetailsEmail = ({ email, isVerified = false }: Props) => {
  if (email) {
    return (
      <Card elevation={0} variant="outlined">
        <CardContent>
          <Typography variant="body2">Email</Typography>
        </CardContent>
        <CardContent>
          <Grid2 container spacing={1}>
            <Grid2 size={{ xs: 12, sm: 'grow' }}>
              <Stack direction="row" spacing={1}>
                <Typography>{email}</Typography>
                {!isVerified && (
                  <Chip label="Not Verified" size="small" color="warning" />
                )}
              </Stack>

              <Button size="small">Change Email</Button>
            </Grid2>

            {!isVerified && (
              <Grid2 size={{ xs: 12, sm: 'auto' }}>
                <AccountResendEmailButton isVerified={isVerified} />
              </Grid2>
            )}
          </Grid2>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default memo(AccountDetailsEmail);
