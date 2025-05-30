/**
 * @module LabelForm
 * @category Components
 *
 */

import { styled, Typography, TypographyProps } from '@mui/material';
import { LabelHTMLAttributes } from 'react';

export default styled(
  (
    props: TypographyProps & LabelHTMLAttributes<'label'> & { error?: boolean },
  ) => (
    <Typography
      component="label"
      color={props?.error ? 'error' : 'textSecondary'}
      variant="body2"
      {...props}
    />
  ),
  {
    shouldForwardProp: (prop) => prop !== 'error',
  },
)();
