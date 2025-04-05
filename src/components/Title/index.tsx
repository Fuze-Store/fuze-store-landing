/**
 * @module Title
 * @category Components
 *
 */

import {
  Skeleton,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import { memo, ReactNode } from 'react';

export type Props = {
  primary?: string | ReactNode;
  secondary?: string;
  primaryTypographyProps?: Omit<TypographyProps, 'children'>;
  secondaryTypographyProps?: Omit<TypographyProps, 'children'>;
  loading?: boolean;
  loadingWidth?: number;
  StackProps?: StackProps;
  spacing?: number;
};

/**
 * Reusable title component
 *
 * @category Components
 * @param Props
 *
 */
const Title = ({
  primary,
  secondary,
  primaryTypographyProps,
  secondaryTypographyProps,
  loading = false,
  loadingWidth = 120,
  StackProps,
  spacing = 0,
}: Props) => {
  const renderPrimary = (): ReactNode => {
    if (loading) return <Skeleton variant="text" width={loadingWidth} />;
    if (typeof primary === 'string' || typeof primary === 'number') {
      return (
        <Typography
          variant="body2"
          fontWeight="medium"
          {...primaryTypographyProps}
        >
          {primary ?? ' '}
        </Typography>
      );
    }

    return primary;
  };

  return (
    <Stack direction="column" spacing={spacing} {...StackProps}>
      {secondary && (
        <Typography
          variant="caption"
          color="text.secondary"
          fontWeight="medium"
          {...secondaryTypographyProps}
        >
          {secondary}
        </Typography>
      )}
      {renderPrimary()}
    </Stack>
  );
};

export default memo(Title);
