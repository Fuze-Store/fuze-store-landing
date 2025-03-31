/**
 * List of dialog confirmation types
 *
 * @module DialogConfirmationTypes
 * @category Types
 *
 */

import type { ButtonProps, DialogProps } from '@mui/material';
import type { ReactNode } from 'react';

export type DialogConfirmationProps = {
  open?: boolean;
  ButtonCancelProps?: Omit<ButtonProps, 'children'>;
  ButtonConfirmProps?: Omit<ButtonProps, 'children'>;
  cancelText?: string;
  confirmText?: string;
  title?: string;
  description?: string | string[];
  content?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  DialogProps?: DialogProps;
};
