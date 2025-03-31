/**
 * @module DialogConfirmation
 * @category Components
 *
 */

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { memo } from 'react';

import { DialogConfirmationProps } from '@/components/DialogConfirmation/types';

/**
 * Reusable dialog confirmation component
 *
 * @category Components
 * @param Props
 *
 */
const DialogConfirmation = ({
  ButtonCancelProps,
  ButtonConfirmProps,
  title,
  description,
  content,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  open = false,
  onCancel,
  onConfirm,
}: DialogConfirmationProps) => (
  <Dialog
    open={open}
    onClose={onCancel}
    aria-labelledby="confirmation-dialog-title"
    aria-describedby="confirmation-dialog-description"
    maxWidth="sm"
  >
    {Boolean(title) && (
      <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
    )}
    <DialogContent>
      {description && (
        <>
          {typeof description === 'string' ? (
            <DialogContentText>{description}</DialogContentText>
          ) : (
            description.map((item, index) => (
              <DialogContentText key={index} sx={{ mb: 2 }}>
                {item}
              </DialogContentText>
            ))
          )}
        </>
      )}
    </DialogContent>
    <DialogActions>
      <Button sx={{ minWidth: 80 }} {...ButtonCancelProps} onClick={onCancel}>
        {cancelText}
      </Button>
      <Button
        disableElevation
        autoFocus
        sx={{ minWidth: 80 }}
        {...ButtonConfirmProps}
        onClick={onConfirm}
      >
        {confirmText}
      </Button>
    </DialogActions>
  </Dialog>
);

export default memo(DialogConfirmation);
