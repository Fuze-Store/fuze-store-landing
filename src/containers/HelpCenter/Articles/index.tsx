'use client';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CircleIcon from '@mui/icons-material/Circle';
import { ButtonBase, Collapse, Grid, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { memo, useState } from 'react';

import type { GuideLink } from '@/types/doc';

import { guides } from '@/utils/articles';

type ArticleLinkProps = {
  link: GuideLink;
  indention?: number;
};

const StyledList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  '& a': {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const ArticleLinkComponent = ({ link, indention = 0 }: ArticleLinkProps) => {
  const [expanded, setExpanded] = useState(false);
  const hasLinks = link.links && link.links.length > 0;

  const onToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <Box
        component="li"
        sx={{
          marginLeft: (theme) => theme.spacing(indention * 2),
          verticalAlign: 'middle',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {hasLinks ? (
          <Box
            component={ButtonBase}
            disableRipple
            onClick={onToggle}
            sx={{ width: 24, textAlign: 'center' }}
          >
            {expanded ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </Box>
        ) : (
          <Box component="span" sx={{ width: 24, textAlign: 'center' }}>
            <CircleIcon sx={{ fontSize: 8 }} />
          </Box>
        )}
        <Link href={link.href}>
          <Typography>{link.text}</Typography>
        </Link>
      </Box>
      {link.links && link.links.length > 0 && (
        <Collapse in={expanded}>
          <Box sx={{ my: 0.5 }}>
            {link.links.map((subLink, subIndex) => (
              <ArticleLinkComponent
                key={subIndex}
                link={subLink}
                indention={indention + 1}
              />
            ))}
          </Box>
        </Collapse>
      )}
    </>
  );
};

const Articles = () => {
  return (
    <Container maxWidth="lg">
      <Box mb={5}>
        <Typography component="h2" variant="h4" gutterBottom fontWeight={600}>
          Guides for Your Store & POS System
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          Find clear, easy instructions for every feature—whether you’re just
          getting started, managing products, handling sales, or setting up
          staff and billing. Click any topic below for a simple, non-technical
          walkthrough.
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        {guides.map((guide, index) => (
          <Grid size={{ xs: 12, sm: 4, md: 3 }} key={index}>
            <Box>
              <Typography variant="h6" gutterBottom>
                {guide.title}
              </Typography>
              <Typography color="text.secondary" mb={1}>
                {guide.description}
              </Typography>
              <StyledList>
                {guide.links.map((link, linkIndex) => (
                  <ArticleLinkComponent
                    key={linkIndex}
                    link={link}
                    indention={0}
                  />
                ))}
              </StyledList>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default memo(Articles);
