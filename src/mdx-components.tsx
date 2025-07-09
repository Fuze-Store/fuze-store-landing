import { Box, Typography } from '@mui/material';
import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props) => <Typography variant="h3" {...props} />,
    h2: (props) => <Typography variant="h4" {...props} />,
    h3: (props) => <Typography variant="h5" {...props} />,
    h4: (props) => <Typography variant="h6" {...props} />,
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
          backgroundColor: '#f5f5f5',
          padding: '2px 6px',
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
        }}
        {...props}
      />
    ),
    ...components,
  };
}
