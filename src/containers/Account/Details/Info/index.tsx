'use client';

import { paths } from '@/enums/path.enum';
import { Avatar, Button, Card, CardContent, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { memo } from 'react';

type Props = {
  email: string;
  fullName: string;
  initials: string;
};

const AccountDetailsInfo = ({ email, fullName, initials }: Props) => (
  <Card elevation={0} variant="outlined">
    <CardContent>
      <Typography variant="body2">Personal Information</Typography>
    </CardContent>
    <CardContent>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar
            sx={{
              height: 56,
              width: 56,
              fontSize: 28,
              lineHeight: 56,
            }}
          >
            {initials}
          </Avatar>
          <Box>
            <Typography variant="subtitle1">{fullName}</Typography>
          </Box>
        </Stack>

        <Button href={paths.accountInfoEdit} LinkComponent={Link} size="small">
          Edit
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

export default memo(AccountDetailsInfo);
