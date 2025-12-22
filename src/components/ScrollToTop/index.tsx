'use client';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Fab, Fade, useScrollTrigger } from '@mui/material';
import React, { memo } from 'react';

type Props = {
  target?: Node | Window | null | undefined;
};

function ScrollTop(props: Props) {
  const { target } = props;
  const trigger = useScrollTrigger({
    target,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#main');

    if (anchor) {
      anchor.scrollIntoView({ block: 'start' });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, left: 16, zIndex: 999 }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
}

export default memo(ScrollTop);
