'use client';

import { accountPages } from '@/helpers/page.helper';
import { Tab, Tabs, tabsClasses, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useMemo } from 'react';

import SectionContainer from '@/components/SectionContainer';

const Sidebar = () => {
  const pathname = usePathname();

  const selectedIndex = useMemo(
    () => accountPages.findIndex((nav) => nav.path.toString() === pathname),
    [pathname],
  );

  return (
    <>
      {selectedIndex >= 0 && (
        <SectionContainer px={2} sx={{ mb: 2 }}>
          <Typography variant="h4">
            {accountPages[selectedIndex].label}
          </Typography>
        </SectionContainer>
      )}

      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
        <Tabs
          value={selectedIndex}
          variant="scrollable"
          aria-label="visible arrows tabs example"
          sx={{
            mb: 2,
            py: 0.5,
            bgcolor: (theme) => theme.palette.grey[50],
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
          slotProps={{
            indicator: { sx: { display: 'none' } },
          }}
        >
          {accountPages.map((nav) => {
            return (
              <Tab
                disableRipple
                LinkComponent={Link}
                key={nav.label}
                href={nav.path}
                label={nav.label}
                sx={{
                  fontSize: (theme) => theme.typography.subtitle1.fontSize,
                  textTransform: 'initial',
                  bgcolor: 'transparent',
                  mx: 1,
                  my: 0.5,
                  px: 4,
                  borderRadius: 2,
                  '&.Mui-selected': {
                    bgcolor: (theme) => theme.palette.background.default,
                    fontWeight: 600,
                    boxShadow: (theme) => theme.shadows[1],
                  },
                }}
              />
            );
          })}
        </Tabs>
      </Box>
    </>
  );
};

export default memo(Sidebar);
