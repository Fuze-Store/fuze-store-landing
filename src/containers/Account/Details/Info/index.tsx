'use client';

import { paths } from '@/helpers/page.helper';
import { Avatar, Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { memo } from 'react';

type Props = {
  fullName: string;
  initials: string;
};

const AccountDetailsInfo = ({ fullName, initials }: Props) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    spacing={1}
  >
    <Stack direction="row" alignItems="center" spacing={1}>
      <Avatar
        sx={{
          height: 48,
          width: 48,
          fontSize: 24,
          lineHeight: 48,
        }}
      >
        {initials}
      </Avatar>
      <Box>
        <Typography variant="subtitle1">{fullName}</Typography>
      </Box>
    </Stack>

    <Button href={paths.accountEdit} LinkComponent={Link} size="small">
      Edit
    </Button>
  </Stack>
);

export default memo(AccountDetailsInfo);
