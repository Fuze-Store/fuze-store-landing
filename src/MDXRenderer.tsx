'use client';

import { Box, Typography } from '@mui/material';
import { getMDXComponent } from 'mdx-bundler/client';
import { MDXComponents } from 'mdx/types';
import { useMemo } from 'react';

const components: MDXComponents = {
  h1: (props) => <Typography variant="h4" {...props} />,
  h2: (props) => <Typography variant="h5" {...props} />,
  h3: (props) => <Typography variant="h6" {...props} />,
  h4: (props) => <Typography variant="subtitle1" {...props} />,
  p: (props) => <Typography variant="body1" {...props} />,
  ul: (props) => <Box component="ul" sx={{ pl: 4, mb: 2 }} {...props} />,
  ol: (props) => <Box component="ol" sx={{ pl: 4, mb: 2 }} {...props} />,
  li: (props) => (
    <Box component="li" sx={{ display: 'list-item', pl: 1 }} {...props} />
  ),
  img: (props) => (
    <Box
      component="img"
      sx={{
        maxWidth: '100%',
        borderRadius: 2,
        my: 3,
        boxShadow: 2,
      }}
      {...props}
    />
  ),
  blockquote: (props) => (
    <Box
      sx={{
        borderLeft: '4px solid #ccc',
        pl: 2,
        ml: 0,
        color: 'text.secondary',
        fontStyle: 'italic',
        my: 3,
      }}
      {...props}
    />
  ),
  code: (props) => (
    <Box
      component="code"
      sx={{
        bgcolor: '#f5f5f5',
        color: '#1b1b1b',
        padding: '2px 6px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '0.875rem',
      }}
      {...props}
    />
  ),
};

export default function MDXRenderer({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
}
