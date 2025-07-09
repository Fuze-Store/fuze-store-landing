import Accordion from '@/components/Accordion';
import AccordionDetails from '@/components/AccordionDetails';
import AccordionSummary from '@/components/AccordionSummary';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { paths } from '@/helpers/page.helper';
import { guides } from '@/utils/articles';

import type { GuideLink } from '@/types/doc';

type Props = {
  link: GuideLink;
  indention?: number;
  initialExpanded?: boolean;
};

const GuideLinkComponent = ({
  link,
  indention = 0,
  initialExpanded = false,
}: Props) => {
  const pathname = usePathname();
  const selected = link.href === pathname;
  const [expanded, setExpanded] = useState(initialExpanded);

  const onToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          sx={{ borderRadius: 2 }}
          selected={selected}
          LinkComponent={Link}
          href={link.href}
        >
          <ListItemText primary={link.text} />
        </ListItemButton>

        {link.links && (
          <IconButton size="small" onClick={onToggle}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}
      </ListItem>
      {link.links && link.links.length > 0 && (
        <Collapse in={expanded}>
          <List sx={{ ml: indention + 1 }} dense>
            {link.links.map((subLink, subIndex) => (
              <GuideLinkComponent
                key={subIndex}
                link={subLink}
                indention={indention + 1}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const TableOfContents = () => {
  const pathname = usePathname();

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <Button
          LinkComponent={Link}
          href={paths.docs}
          size="large"
          sx={{ color: 'text.primary' }}
          startIcon={<ArrowBackIcon />}
        >
          Back to Docs
        </Button>
      </Stack>

      {guides.map((guide, index) => {
        return (
          <Accordion key={index} defaultExpanded sx={{ borderBottom: 0 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{`${index + 1}. ${guide.title}`}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ py: 0 }}>
              <List dense>
                {guide.links.map((link, linkIndex) => {
                  const initialExpanded =
                    link?.links?.some((item) => item.href === pathname) ??
                    false;

                  return (
                    <GuideLinkComponent
                      key={linkIndex}
                      link={link}
                      indention={0}
                      initialExpanded={initialExpanded}
                    />
                  );
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default TableOfContents;
